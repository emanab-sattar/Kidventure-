// Helper 1: Safely read what the HTML page sent to Vercel
function getRequestData(req) {
  if (!req.body) {
    return {};
  }
  if (typeof req.body === 'string') {
    return JSON.parse(req.body);
  }
  return req.body;
}

// Helper 2: Pull the AI's text reply out of Gemini's response object
function extractAiText(data) {
  if (!data.candidates) {
    return '';
  }
  if (data.candidates.length === 0) {
    return '';
  }
  var firstReply = data.candidates[0];
  if (!firstReply.content || !firstReply.content.parts) {
    return '';
  }
  if (firstReply.content.parts.length === 0) {
    return '';
  }
  return firstReply.content.parts[0].text || '';
}

// Main function that Vercel runs when the website calls /api/generate
module.exports = async function (req, res) {
  // 1. Allow our HTML pages to talk to this Vercel link
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 2. Quick browser test when the link is opened directly in Chrome
  if (req.method === 'GET') {
    var keyIsSet = false;
    if (process.env.GEMINI_API_KEY) {
      keyIsSet = true;
    }
    return res.status(200).json({
      ok: true,
      hasGeminiKey: keyIsSet,
      message: 'Kidventure API is running!'
    });
  }

  // 3. Only allow POST requests for AI generation
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests are allowed' });
  }

  // 4. Get our secret Gemini key from Vercel
  var apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'GEMINI_API_KEY is missing in Vercel' });
  }

  try {
    var body = getRequestData(req);
    var prompt = body.prompt;
    if (!prompt) {
      prompt = 'Say hello to a kid explorer in 1 short sentence!';
    }

    // Build the message for Gemini
    var messageParts = [{ text: prompt }];

    if (body.imageBase64 && body.mimeType) {
      messageParts.push({
        inlineData: {
          mimeType: body.mimeType,
          data: body.imageBase64
        }
      });
    }

    // 5. Call Google Gemini with strict child-safety settings
    var geminiUrl =
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent';

    var response = await fetch(geminiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey
      },
      body: JSON.stringify({
        contents: [{ parts: messageParts }],
        safetySettings: [
          { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_LOW_AND_ABOVE' },
          { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_LOW_AND_ABOVE' },
          { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_LOW_AND_ABOVE' },
          { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_LOW_AND_ABOVE' }
        ]
      })
    });

    var data = await response.json();

    if (!response.ok) {
      var errorMessage = 'Gemini request failed';
      if (data.error && data.error.message) {
        errorMessage = data.error.message;
      }
      return res.status(response.status).json({ error: errorMessage });
    }

    var replyText = extractAiText(data);
    return res.status(200).json({ ok: true, text: replyText });
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Server error' });
  }
};
