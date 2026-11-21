// Helper 1: Read the data sent from our HTML page
function getRequestData(req) {
  if (!req.body) {
    return {};
  }
  if (typeof req.body === 'string') {
    return JSON.parse(req.body);
  }
  return req.body;
}

// Helper 2: Get the text answer out of Gemini's reply
function extractAiText(data) {
  if (data.candidates) {
    if (data.candidates.length > 0) {
      var firstReply = data.candidates[0];
      if (firstReply.content) {
        if (firstReply.content.parts) {
          if (firstReply.content.parts.length > 0) {
            return firstReply.content.parts[0].text;
          }
        }
      }
    }
  }
  return '';
}

// Helper 3: Use Groq as a second, independent safety checker (NFR-10)
async function isTextSafeForKids(textToCheck, groqKey) {
  if (!groqKey) {
    return true;
  }
  if (!textToCheck) {
    return true;
  }

  var safetyRules =
    'You are a child safety checker for ages 6 to 12. ' +
    'Check the text below. Reply with ONLY the word SAFE if it is safe. ' +
    'Reply with UNSAFE if it contains offensive content, sharp tools (knives, scissors without adult), ' +
    'wall electricity, or dangerous chemicals. ' +
    'Do NOT block safe mentions of small batteries or toy motors unless used dangerously.';

  var groqBody = {
    model: 'llama-3.1-8b-instant',
    temperature: 0,
    messages: [
      { role: 'system', content: safetyRules },
      { role: 'user', content: textToCheck }
    ]
  };

  var groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + groqKey
    },
    body: JSON.stringify(groqBody)
  });

  if (!groqResponse.ok) {
    return true;
  }

  var groqData = await groqResponse.json();
  if (groqData.choices) {
    if (groqData.choices.length > 0) {
      var answer = groqData.choices[0].message.content;
      var cleanAnswer = answer.trim().toUpperCase();
      if (cleanAnswer.startsWith('UNSAFE')) {
        return false;
      }
    }
  }

  return true;
}

// Main function that Vercel runs when our website calls /api/generate
module.exports = async function (req, res) {
  // Step 1: Allow our HTML pages to talk to this Vercel link
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Step 2: Browser test when you open /api/generate in Chrome
  if (req.method === 'GET') {
    var hasGemini = false;
    if (process.env.GEMINI_API_KEY) {
      hasGemini = true;
    }

    var hasGroq = false;
    if (process.env.GROQ_API_KEY) {
      hasGroq = true;
    }

    return res.status(200).json({
      ok: true,
      hasGeminiKey: hasGemini,
      hasGroqKey: hasGroq,
      message: 'Kidventure API is running!'
    });
  }

  // Step 3: Only allow POST requests when asking the AI
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests are allowed' });
  }

  var geminiKey = process.env.GEMINI_API_KEY;
  var groqKey = process.env.GROQ_API_KEY;

  if (!geminiKey) {
    return res.status(500).json({ error: 'GEMINI_API_KEY is missing in Vercel' });
  }

  try {
    // Step 4: Read the prompt (and optional photo) from our HTML page
    var body = getRequestData(req);
    var prompt = body.prompt;
    if (!prompt) {
      prompt = 'Say hello to a kid explorer in 1 short sentence!';
    }

    var messageParts = [{ text: prompt }];

    if (body.imageBase64) {
      if (body.mimeType) {
        messageParts.push({
          inlineData: {
            mimeType: body.mimeType,
            data: body.imageBase64
          }
        });
      }
    }

    // Step 5: Send the request to Google Gemini with strict safety settings
    var geminiUrl =
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent';

    var geminiBody = {
      contents: [{ parts: messageParts }],
      safetySettings: [
        { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_LOW_AND_ABOVE' },
        { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_LOW_AND_ABOVE' },
        { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_LOW_AND_ABOVE' },
        { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_LOW_AND_ABOVE' }
      ]
    };

    var response = await fetch(geminiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': geminiKey
      },
      body: JSON.stringify(geminiBody)
    });

    var data = await response.json();

    if (!response.ok) {
      var errorMessage = 'Gemini request failed';
      if (data.error) {
        if (data.error.message) {
          errorMessage = data.error.message;
        }
      }
      return res.status(response.status).json({ error: errorMessage });
    }

    var replyText = extractAiText(data);

    // Step 6: Double-check the reply with Groq before showing it to a child
    var isSafe = await isTextSafeForKids(replyText, groqKey);
    if (!isSafe) {
      return res.status(200).json({
        ok: false,
        blocked: true,
        error: 'That idea was not safe for kids. Please try a different everyday item or idea!'
      });
    }

    // Step 7: Send the safe answer back to our HTML page
    return res.status(200).json({ ok: true, text: replyText });
  } catch (err) {
    var crashMessage = 'Server error';
    if (err.message) {
      crashMessage = err.message;
    }
    return res.status(500).json({ error: crashMessage });
  }
};
