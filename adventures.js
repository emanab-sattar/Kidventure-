// Six hidden items kids can tap in the Discovery Room while waiting
var DISCOVERY_OBJECTS = [
  { id: 'magnifying-glass', label: 'Magnifying Glass', hint: 'Can you find something used to look closely at tiny details?' },
  { id: 'pencil', label: 'Pencil', hint: 'Can you find something used for drawing or sketching new ideas?' },
  { id: 'book', label: 'Book', hint: 'Can you find something filled with stories and clever facts?' },
  { id: 'leaf', label: 'Leaf', hint: 'Can you find something from nature outdoors?' },
  { id: 'block', label: 'Building Block', hint: 'Can you find something you can stack to build a tower?' },
  { id: 'compass', label: 'Compass', hint: 'Can you find something used for exploring and finding directions?' }
];

// Room colors and titles for each of the three adventures
var DISCOVERY_ROOMS = {
  playroom: {
    title: 'Little Playroom Discovery',
    subtitle: 'Look around the cozy playroom and tap the hidden objects while your game is getting ready!',
    cardClass: 'room-sand',
    stageClass: 'room-scene-sand',
    buttonClass: 'button-sand'
  },
  workshop: {
    title: 'Creative Workshop Discovery',
    subtitle: 'Look around the inventor workshop and tap the objects while we prepare your feedback!',
    cardClass: 'room-peach',
    stageClass: 'room-scene-peach',
    buttonClass: 'button-peach'
  },
  discovery: {
    title: 'Little Discovery Room',
    subtitle: 'Tap objects around the discovery room while your next career mission gets ready!',
    cardClass: 'room-mint',
    stageClass: 'room-scene-mint',
    buttonClass: 'button-mint'
  }
};

// Building challenges shown in the Young Inventors Lab
var CREATIVE_CHALLENGES = [
  {
    id: 'flood-village',
    title: 'Protect the Little Village from Flooding!',
    story: 'A little village is in danger of flooding. Heavy rain is coming down the hillside. Can you build something real with everyday things to protect the tiny houses?',
    goal: 'Create a real-world structure that blocks, slows down, or guides pretend water away from a safe village zone.',
    suggestedMaterials: [
      'Cardboard boxes or cereal cartons',
      'Paper cups or clean plastic bottles',
      'Aluminum foil or plastic lids',
      'Tape, string, or rubber bands',
      'Towels or sponges to test absorbency'
    ],
    safetyReminder: 'Ask a grown-up before using scissors or real water, and test on a tray, sink, or towel so floors stay dry and safe!'
  },
  {
    id: 'shy-hedgehog',
    title: 'Build a Cozy Hideout for a Shy Toy Hedgehog!',
    story: 'A little woodland friend gets startled by bright hallway lights and loud footsteps. Can you invent a peaceful, sturdy shelter with a secret doorway?',
    goal: 'Design and assemble a cozy, self-standing shelter with an easy entrance and soft interior using materials around your home.',
    suggestedMaterials: [
      'Shoebox or scrap cardboard',
      'Clean dish towels or soft socks',
      'Wooden spoons or rolled paper tubes',
      'Scrap paper and masking tape'
    ],
    safetyReminder: 'Check with a grown-up before borrowing pillows or kitchen items, and keep walkways clear!'
  }
];

// List of jobs kids can roleplay in Career Quest
var CAREER_LIST = ['Doctor', 'Engineer', 'Astronaut', 'Scientist'];

// Story steps and endings for each career in Career Quest
var CAREER_SCENARIOS = {
  Doctor: {
    step1: {
      profession: 'Doctor',
      stepNumber: 1,
      scenario: 'A younger teammate just tripped during backyard tag! Their knee has a tiny scrape, and they are feeling nervous and holding back tears.',
      objective: 'Help your patient feel calm, safe, and ready for a gentle check-up using empathy and smart care steps.',
      question: 'What will you do first as the Doctor on duty?',
      choices: [
        {
          id: 'calm-first',
          label: 'Option A - Kneel down, speak gently, and explain every step before touching',
          summary: 'Prioritize comfort and trust first'
        },
        {
          id: 'check-kit',
          label: 'Option B - Grab a clean cloth, wash hands, and ask where it hurts most',
          summary: 'Prepare clean supplies and gather clues first'
        }
      ]
    },
    branches: {
      'calm-first': {
        profession: 'Doctor',
        stepNumber: 2,
        scenario: 'Because you spoke gently, your patient takes a slow deep breath and stops crying! Now they point to their knee and ask if the bandage will tickle.',
        objective: 'Finish the safe check-up and give a helpful recovery tip.',
        question: 'Next step: How will you help them feel strong again?',
        choices: [
          {
            id: 'breathing-game',
            label: 'Play a 3-second "smell the flower, blow the candle" breath game while resting',
            summary: 'Calm breathing recovery'
          },
          {
            id: 'rest-plan',
            label: 'Create a cozy rest station with water and a check-in buddy',
            summary: 'Hydration and buddy care'
          }
        ]
      },
      'check-kit': {
        profession: 'Doctor',
        stepNumber: 2,
        scenario: 'Smart hygiene! Washing your hands first kept germs away, and your patient tells you their knee hurts at a 2 out of 5 when they bend it.',
        objective: 'Give clear advice so they heal smoothly away from screens.',
        question: 'Next step: What offline recovery mission do you prescribe?',
        choices: [
          {
            id: 'drawing-badge',
            label: 'Draw a "Brave Patient" sticker on scrap paper and rest for 10 minutes',
            summary: 'Creative encouragement'
          },
          {
            id: 'stretch-check',
            label: 'Have them gently wiggle their toes to be sure everything else moves fine',
            summary: 'Careful movement check'
          }
        ]
      }
    },
    outcomes: {
      'breathing-game': 'Great bedside manner! Your patient smiled, took slow breaths, and felt safe enough to walk calmly with an adult.',
      'rest-plan': 'Thoughtful care! Setting up a cozy hydration and buddy spot kept everyone calm and looked after.',
      'drawing-badge': 'Creative Doctor move! Giving a handmade sticker turned a scary bump into a proud moment.',
      'stretch-check': 'Careful clinician! Checking small movements gently helped confirm everything was okay.'
    }
  },
  Engineer: {
    step1: {
      profession: 'Engineer',
      stepNumber: 1,
      scenario: 'A tiny toy delivery truck needs to cross a 30 cm gap between two chairs, but your bridge materials are only paper, cardboard strips, and tape!',
      objective: 'Design a bridge shape strong enough to hold the toy truck without bending in the middle.',
      question: 'Which engineering idea will you test first?',
      choices: [
        {
          id: 'fold-ribs',
          label: 'Option A - Fold the paper into accordion zig-zag pleats to make ribs',
          summary: 'Strengthen shape using triangles'
        },
        {
          id: 'arch-support',
          label: 'Option B - Tape a curved cardboard arch underneath the bridge deck',
          summary: 'Push weight sideways into chair legs'
        }
      ]
    },
    branches: {
      'fold-ribs': {
        profession: 'Engineer',
        stepNumber: 2,
        scenario: 'Look at those triangles working! The accordion pleats stopped the paper from sagging, and now the toy truck rolls halfway across, then slides near the edge.',
        objective: 'Keep the truck safely on the bridge deck.',
        question: 'What improvement do you add for test #2?',
        choices: [
          {
            id: 'guardrails',
            label: 'Fold up low cardboard guardrails along both sides of the bridge',
            summary: 'Add safety edges'
          },
          {
            id: 'wider-ramps',
            label: 'Tape smooth paper entry ramps onto each chair edge',
            summary: 'Smooth start and landing'
          }
        ]
      },
      'arch-support': {
        profession: 'Engineer',
        stepNumber: 2,
        scenario: 'Nice arch physics! The curved support carried the weight smoothly, though the tape on the left chair started to peel slightly under heavy cargo.',
        objective: 'Anchor the bridge ends securely.',
        question: 'How will you reinforce the ends of your bridge?',
        choices: [
          {
            id: 'book-anchors',
            label: 'Place two books on the flat bridge tabs on each chair',
            summary: 'Counterweight anchoring'
          },
          {
            id: 'double-triangles',
            label: 'Add triangle paper gussets under both ends of the deck',
            summary: 'Structural corner bracing'
          }
        ]
      }
    },
    outcomes: {
      guardrails: 'Mission success! Guardrails plus pleated ribs kept the truck centered all the way across the gap.',
      'wider-ramps': 'Smooth engineering! Gentle entry ramps kept the wheels steady from start to finish.',
      'book-anchors': 'Clever counterweight fix! Anchoring the ends kept the arch super steady under extra weight.',
      'double-triangles': 'Awesome structural thinking! Corner triangles spread out the load like real steel bridges.'
    }
  },
  Astronaut: {
    step1: {
      profession: 'Astronaut',
      stepNumber: 1,
      scenario: 'A bright Mars dust storm just covered your mini rover solar panels! Nighttime is coming soon and your base needs power.',
      objective: 'Protect the rover energy and keep your crew safe inside the Mars habitat.',
      question: 'Which mission plan do you choose first?',
      choices: [
        {
          id: 'wind-shield',
          label: 'Option A - Build a curved dust shield beside your station using folded paper',
          summary: 'Block blowing dust before it settles'
        },
        {
          id: 'battery-save',
          label: 'Option B - Switch the rover to Power-Save mode and map a supply trail',
          summary: 'Conserve stored energy first'
        }
      ]
    },
    branches: {
      'wind-shield': {
        profession: 'Astronaut',
        stepNumber: 2,
        scenario: 'Your curved dust shield deflected most of the storm! Now the morning sun is peeking out, and you have enough power for one rover task.',
        objective: 'Gather one helpful clue from the Mars crater safely.',
        question: 'What will your rover collect next?',
        choices: [
          {
            id: 'ice-search',
            label: 'Send the rover into a shady crater to search for signs of frozen water',
            summary: 'Explore water ice resources'
          },
          {
            id: 'beacon-map',
            label: 'Place three scrap-paper beacon markers around your room as a safe return path',
            summary: 'Navigate safely back to base'
          }
        ]
      },
      'battery-save': {
        profession: 'Astronaut',
        stepNumber: 2,
        scenario: 'Smart energy planning! Power-Save mode kept the rover heaters warm all night, and now you need to brush dust off the panels from inside your habitat.',
        objective: 'Test a lightweight tool idea away from the screen.',
        question: 'How will you test a dust-clearing helper in your room?',
        choices: [
          {
            id: 'feather-sweep',
            label: 'Pretend a wooden spoon and scrap paper are a gentle robotic sweeper arm',
            summary: 'Build robotic sweeper arm'
          },
          {
            id: 'wind-angle',
            label: 'Tilt a book like a solar panel and test which angle sheds paper confetti best',
            summary: 'Test tilt angle physics'
          }
        ]
      }
    },
    outcomes: {
      'ice-search': 'Discovery achieved! Exploring shady craters teaches astronauts where future water ice might hide.',
      'beacon-map': 'Safe navigation! Dropping clear trail markers ensured your crew never gets lost in low visibility.',
      'feather-sweep': 'Inventive robotics! Designing gentle tools protects delicate solar glass in space.',
      'wind-angle': 'Brilliant experiment! Testing panel angles showed how gravity helps slide dust right off.'
    }
  },
  Scientist: {
    step1: {
      profession: 'Scientist',
      stepNumber: 1,
      scenario: 'You found three mysterious objects on an expedition table: a dry sponge, a metal spoon, and a cork or plastic bottle cap. Which ones will float or sink?',
      objective: 'Form a real hypothesis and run a careful hands-on science experiment with an adult nearby.',
      question: 'How will you start your investigation?',
      choices: [
        {
          id: 'predict-first',
          label: 'Option A - Write or whisper a prediction for all three objects before testing',
          summary: 'Make hypotheses before testing'
        },
        {
          id: 'compare-shape',
          label: 'Option B - Feel how heavy vs. airy each object feels in your hands first',
          summary: 'Observe density and texture first'
        }
      ]
    },
    branches: {
      'predict-first': {
        profession: 'Scientist',
        stepNumber: 2,
        scenario: 'Awesome scientist habit! You predicted the bottle cap floats and the spoon sinks, and now notice the dry sponge floats at first, then slowly gets heavier!',
        objective: 'Discover WHY the sponge changed over time.',
        question: 'What experiment will you run next?',
        choices: [
          {
            id: 'tiny-holes',
            label: 'Look closely at the tiny air pockets in the sponge filling up with water',
            summary: 'Investigate air pockets and absorption'
          },
          {
            id: 'foil-boat',
            label: 'Shape scrap foil or a plastic lid into a tiny boat to see if the spoon can ride on top',
            summary: 'Test buoyancy and boat shape'
          }
        ]
      },
      'compare-shape': {
        profession: 'Scientist',
        stepNumber: 2,
        scenario: 'Great observation! You noticed the spoon feels cold and packed tight, while the sponge is full of tiny holes and air.',
        objective: 'Record what happens when you test air inside objects.',
        question: 'Which bonus test will you try next?',
        choices: [
          {
            id: 'cup-air',
            label: 'Push an upside-down cup into a bowl of water to feel trapped air push back',
            summary: 'Feel invisible air pressure'
          },
          {
            id: 'sort-chart',
            label: 'Draw two columns ("Floats" and "Sinks") on paper and test 3 more safe items',
            summary: 'Log data in a real chart'
          }
        ]
      }
    },
    outcomes: {
      'tiny-holes': 'Curious observation! Air pockets make a sponge float until water replaces the air inside.',
      'foil-boat': 'Buoyancy breakthrough! Spreading weight across a boat shape helps heavy materials stay afloat.',
      'cup-air': 'Invisible science win! Even though we cannot see air, it takes up real space inside the cup.',
      'sort-chart': 'True researcher! Recording observations on paper turns everyday play into real science.'
    }
  }
};

// Shows an interactive HTML5 Canvas Brick-Breaker game (adapted from MDN 2D Breakout Tutorial)
function showDiscoveryRoom(container, settings) {
  if (!container) return;
  var config = settings || {};
  var roomName = config.environment || 'playroom';
  if (roomName !== 'playroom' && roomName !== 'workshop' && roomName !== 'discovery') {
    roomName = 'playroom';
  }
  var room = DISCOVERY_ROOMS[roomName];

  if (config.errorMessage) {
    var retryButtonHtml = '';
    if (config.onRetryRequest) {
      retryButtonHtml =
        '<button type="button" id="room-retry-btn" class="button ' + room.buttonClass + '">' +
          drawSmallIcon('rotate-ccw', 'small-icon') +
          '<span>Try Again</span>' +
        '</button>';
    }

    container.innerHTML =
      '<div class="discovery-card ' + room.cardClass + '">' +
        '<div role="alert" class="room-error-card">' +
          '<div class="room-error-icon">' + drawSmallIcon('circle-alert', 'large-icon') + '</div>' +
          '<h2 class="room-error-title">Oops! Something Paused</h2>' +
          '<p class="room-error-text">' + makeTextSafe(config.errorMessage) + '</p>' +
          '<p class="room-error-sub">Everything you typed or added is still waiting safely on the previous step.</p>' +
          '<div class="room-error-actions">' +
            retryButtonHtml +
            '<button type="button" id="room-cancel-btn" class="button button-white">' +
              drawSmallIcon('arrow-left', 'small-icon') +
              '<span>Back to My Input</span>' +
            '</button>' +
          '</div>' +
        '</div>' +
      '</div>';

    var retryButton = document.getElementById('room-retry-btn');
    if (retryButton && config.onRetryRequest) retryButton.onclick = config.onRetryRequest;
    var cancelButton = document.getElementById('room-cancel-btn');
    if (cancelButton && config.onCancelToInput) cancelButton.onclick = config.onCancelToInput;
    return;
  }

  var statusLine = config.statusLabel || 'Getting your adventure ready...';
  if (config.professionNote) {
    statusLine += ' (' + config.professionNote + ')';
  }

  var continueBtnHtml = '';
  if (config.onContinueToSample) {
    var continueButtonLabel = config.resultButtonLabel || 'Continue';
    continueBtnHtml =
      '<button type="button" id="room-continue-btn" class="button ' + room.buttonClass + '"><span>' + makeTextSafe(continueButtonLabel) + '</span>' + drawSmallIcon('arrow-right', 'small-icon') + '</button>';
  }

  container.innerHTML =
    '<div class="discovery-card ' + room.cardClass + '">' +
      '<div class="room-header">' +
        '<div class="room-title-row">' +
          '<div id="room-owl-box"></div>' +
          '<div>' +
            '<p class="small-label">' + makeTextSafe(statusLine) + '</p>' +
            '<h2 class="panel-title">Break the Bricks!</h2>' +
          '</div>' +
        '</div>' +
        '<div class="room-count-badge">' +
          drawSmallIcon('star', 'small-icon') +
          '<span id="wait-score-text">Score: 0</span>' +
        '</div>' +
      '</div>' +
      '<div class="room-play-area">' +
        '<canvas id="wait-game-canvas" width="640" height="260" ' +
          'style="width:100%; max-width:640px; height:auto; display:block; margin:0 auto; border-radius:18px; border:2px solid rgba(81,65,104,0.18); background:#FFF9EF; touch-action:none; cursor:pointer;"></canvas>' +
        '<p style="text-align:center; margin-top:10px; font-size:13px; font-weight:700; color:#625F70;">' +
          'Move your mouse, finger, or left/right arrow keys to bounce the ball!' +
        '</p>' +
      '</div>' +
      '<div class="room-footer">' +
        '<button type="button" id="room-back-btn" class="button button-white">' + drawSmallIcon('arrow-left', 'small-icon') + '<span>Back</span></button>' +
        continueBtnHtml +
      '</div>' +
    '</div>';

  showOwl(document.getElementById('room-owl-box'), { variant: 'mini', interactive: false });

  var canvas = document.getElementById('wait-game-canvas');
  var ctx = canvas.getContext('2d');
  var scoreEl = document.getElementById('wait-score-text');
  var isRunning = true;
  var score = 0;

  // Ball setup
  var ballRadius = 9;
  var x = canvas.width / 2;
  var y = canvas.height - 45;
  var dx = 3.2;
  var dy = -3.2;

  // Paddle setup
  var paddleHeight = 14;
  var paddleWidth = 104;
  var paddleY = canvas.height - 26;
  var paddleX = (canvas.width - paddleWidth) / 2;
  var rightPressed = false;
  var leftPressed = false;

  // Brick grid setup (3 rows x 7 columns)
  var brickRowCount = 3;
  var brickColumnCount = 7;
  var brickWidth = 74;
  var brickHeight = 18;
  var brickPadding = 10;
  var brickOffsetTop = 22;
  var brickOffsetLeft = 31;
  var rowColors = ['#F8B9D5', '#FFE58F', '#A7E8C6'];

  var bricks = [];
  function resetBricks() {
    bricks = [];
    for (var c = 0; c < brickColumnCount; c++) {
      bricks[c] = [];
      for (var r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
      }
    }
  }
  resetBricks();

  function movePaddleToClientX(clientX) {
    var rect = canvas.getBoundingClientRect();
    var scaleX = canvas.width / rect.width;
    var relativeX = (clientX - rect.left) * scaleX;
    paddleX = relativeX - paddleWidth / 2;
    if (paddleX < 0) paddleX = 0;
    if (paddleX > canvas.width - paddleWidth) paddleX = canvas.width - paddleWidth;
  }

  canvas.onmousemove = function (event) {
    movePaddleToClientX(event.clientX);
  };

  canvas.ontouchmove = function (event) {
    if (event.touches && event.touches.length > 0) {
      event.preventDefault();
      movePaddleToClientX(event.touches[0].clientX);
    }
  };

  function keyDownHandler(event) {
    if (!isRunning || !document.body.contains(canvas)) return;
    if (event.key === 'Right' || event.key === 'ArrowRight') rightPressed = true;
    if (event.key === 'Left' || event.key === 'ArrowLeft') leftPressed = true;
  }

  function keyUpHandler(event) {
    if (event.key === 'Right' || event.key === 'ArrowRight') rightPressed = false;
    if (event.key === 'Left' || event.key === 'ArrowLeft') leftPressed = false;
  }

  window.addEventListener('keydown', keyDownHandler);
  window.addEventListener('keyup', keyUpHandler);

  function stopGame() {
    isRunning = false;
    window.removeEventListener('keydown', keyDownHandler);
    window.removeEventListener('keyup', keyUpHandler);
  }

  function collisionDetection() {
    for (var c = 0; c < brickColumnCount; c++) {
      for (var r = 0; r < brickRowCount; r++) {
        var b = bricks[c][r];
        if (b.status === 1) {
          if (x > b.x - ballRadius && x < b.x + brickWidth + ballRadius) {
            if (y > b.y - ballRadius && y < b.y + brickHeight + ballRadius) {
              dy = -dy;
              b.status = 0;
              score = score + 1;
              if (scoreEl) scoreEl.textContent = 'Score: ' + score;
              if (score % (brickRowCount * brickColumnCount) === 0) {
                resetBricks();
              }
            }
          }
        }
      }
    }
  }

  function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#A9D9FA';
    ctx.fill();
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = '#514168';
    ctx.stroke();
    ctx.closePath();
  }

  function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
    ctx.fillStyle = '#DFC6FA';
    ctx.fill();
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = '#514168';
    ctx.stroke();
    ctx.closePath();
  }

  function drawBricks() {
    for (var c = 0; c < brickColumnCount; c++) {
      for (var r = 0; r < brickRowCount; r++) {
        if (bricks[c][r].status === 1) {
          var brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
          var brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
          bricks[c][r].x = brickX;
          bricks[c][r].y = brickY;

          ctx.beginPath();
          ctx.rect(brickX, brickY, brickWidth, brickHeight);
          ctx.fillStyle = rowColors[r % rowColors.length];
          ctx.fill();
          ctx.lineWidth = 2;
          ctx.strokeStyle = '#514168';
          ctx.stroke();
          ctx.closePath();
        }
      }
    }
  }

  function draw() {
    if (!isRunning || !document.body.contains(canvas)) {
      stopGame();
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    collisionDetection();

    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
      dx = -dx;
    }

    if (y + dy < ballRadius) {
      dy = -dy;
    } else if (y + dy > paddleY - ballRadius) {
      if (x > paddleX - 6 && x < paddleX + paddleWidth + 6 && dy > 0) {
        var hitPos = (x - (paddleX + paddleWidth / 2)) / (paddleWidth / 2);
        dx = hitPos * 4.2;
        dy = -Math.abs(dy);
      } else if (y + dy > canvas.height - ballRadius) {
        x = paddleX + paddleWidth / 2;
        y = paddleY - 12;
        dx = 3.2;
        dy = -3.2;
      }
    }

    if (rightPressed) {
      paddleX = paddleX + 7;
      if (paddleX + paddleWidth > canvas.width) paddleX = canvas.width - paddleWidth;
    } else if (leftPressed) {
      paddleX = paddleX - 7;
      if (paddleX < 0) paddleX = 0;
    }

    x = x + dx;
    y = y + dy;
    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);

  var backButton = document.getElementById('room-back-btn');
  if (backButton && config.onCancelToInput) {
    backButton.onclick = function () {
      stopGame();
      config.onCancelToInput();
    };
  }

  var continueButton = document.getElementById('room-continue-btn');
  if (continueButton && config.onContinueToSample) {
    continueButton.onclick = function () {
      stopGame();
      config.onContinueToSample();
    };
  }
}

// Checks that an uploaded image is a JPG or PNG file under 10 MB
function checkPhotoFile(file) {
  var allowedTypes = ['image/jpeg', 'image/png'];
  var fileType = String(file.type || '').toLowerCase();
  var lowerName = String(file.name || '').toLowerCase();
  var validEnding =
    lowerName.slice(-4) === '.jpg' ||
    lowerName.slice(-5) === '.jpeg' ||
    lowerName.slice(-4) === '.png';
  if (allowedTypes.indexOf(fileType) === -1 && !(fileType === '' && validEnding)) {
    return 'Please choose a JPEG or PNG image file (.jpg, .jpeg, or .png).';
  }
  if (file.size > 10485760) {
    return 'That picture is larger than 10 MB. Please choose a smaller image.';
  }
  return '';
}

// Sets up the photo upload, device camera, and sample picture picker
// Sets up the photo upload (up to 3 photos), device camera, and sample picture picker
function setupPhotoPicker(container, settings) {
  if (!container) return;
  var config = settings || {};
  var accentClass = config.buttonAccentClass || 'button-white';
  var uploadLabel = config.uploadLabel || 'Upload Image';
  var sampleLabel = config.sampleLabel || 'Use Sample Picture';
  var maxImages = config.maxImages || 3;
  var useArrayMode = config.images !== undefined;

  var currentImages = [];
  if (useArrayMode && config.images) {
    for (var idx = 0; idx < config.images.length; idx++) {
      currentImages.push(config.images[idx]);
    }
  } else if (config.image) {
    currentImages.push(config.image);
  }

  var cameraOpen = false;
  var askingCamera = false;
  var errorMessage = '';
  var cameraStream = null;

  function stopCamera() {
    if (cameraStream) {
      var tracks = cameraStream.getTracks();
      for (var i = 0; i < tracks.length; i++) {
        tracks[i].stop();
      }
      cameraStream = null;
    }
    cameraOpen = false;
  }

  function notifyChange() {
    if (!config.onChange) return;
    if (useArrayMode) {
      config.onChange(currentImages);
    } else {
      config.onChange(currentImages[0] || null);
    }
  }

  function addNewImage(nextImage) {
    if (currentImages.length >= maxImages) {
      errorMessage = 'You can add up to ' + maxImages + ' photos.';
      drawPicker();
      return;
    }
    currentImages.push(nextImage);
    notifyChange();
    drawPicker();
  }

  function openCamera() {
    errorMessage = '';
    if (currentImages.length >= maxImages) {
      errorMessage = 'You already added the maximum of ' + maxImages + ' photos.';
      drawPicker();
      return;
    }
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      errorMessage = 'Camera access is not available in this browser. You can choose Upload Image instead!';
      drawPicker();
      return;
    }
    askingCamera = true;
    drawPicker();
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
      .then(function (stream) {
        cameraStream = stream;
        cameraOpen = true;
        askingCamera = false;
        drawPicker();
        var videoElement = container.querySelector('.camera-video');
        if (videoElement) videoElement.srcObject = cameraStream;
      })
      .catch(function (error) {
        askingCamera = false;
        var errorName = error && error.name ? error.name : '';
        if (errorName === 'NotFoundError' || errorName === 'DevicesNotFoundError') {
          errorMessage = 'No camera was found on this device. Please choose Upload Image instead!';
        } else {
          errorMessage = 'Camera permission was not granted in the browser. You can choose Upload Image instead!';
        }
        drawPicker();
      });
  }

  function takePhoto() {
    var videoElement = container.querySelector('.camera-video');
    if (!videoElement) return;
    var canvas = document.createElement('canvas');
    canvas.width = videoElement.videoWidth || 640;
    canvas.height = videoElement.videoHeight || 480;
    var drawingArea = canvas.getContext('2d');
    if (!drawingArea) return;
    drawingArea.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
    var photoUrl = canvas.toDataURL('image/jpeg', 0.85);
    stopCamera();
    addNewImage({
      previewUrl: photoUrl,
      fileName: 'camera-photo-' + (currentImages.length + 1) + '.jpg',
      source: 'camera'
    });
  }

  function pickSamplePicture() {
    errorMessage = '';
    addNewImage({
      previewUrl: './images/sample-everyday-objects.svg',
      fileName: 'everyday-objects.png',
      source: 'sample'
    });
  }

  function drawPicker() {
    var alertHtml = '';
    if (errorMessage) {
      alertHtml = '<div role="alert" class="error-box">' + drawSmallIcon('circle-alert', 'medium-icon') + '<span>' + makeTextSafe(errorMessage) + '</span></div>';
    }

    var cameraHtml = '';
    if (cameraOpen) {
      cameraHtml =
        '<div class="camera-box">' +
          '<div class="camera-video-wrap"><video autoplay playsinline muted class="camera-video"></video></div>' +
          '<div class="camera-actions">' +
            '<button type="button" data-action="snap" class="button button-yellow">' + drawSmallIcon('camera', 'small-icon') + '<span>Take Photo</span></button>' +
            '<button type="button" data-action="close-cam" class="button button-white">' + drawSmallIcon('x', 'small-icon') + '<span>Close Camera</span></button>' +
          '</div>' +
        '</div>';
    }

    var disabledAttribute = askingCamera ? 'disabled' : '';
    var cameraButtonText = askingCamera ? 'Requesting Camera...' : 'Use Camera';

    var bodyHtml = '';
    if (currentImages.length > 0) {
      var cardsHtml = '';
      for (var i = 0; i < currentImages.length; i++) {
        var item = currentImages[i];
        cardsHtml +=
          '<div class="photo-preview-card">' +
            '<div class="photo-image-box"><img src="' + makeTextSafe(item.previewUrl) + '" alt="Preview of your everyday objects" class="photo-image"/></div>' +
            '<div class="photo-bottom-bar">' +
              '<p class="photo-filename">' + makeTextSafe(item.fileName) + '</p>' +
              '<button type="button" data-remove-index="' + i + '" class="small-round-button small-red-button">' + drawSmallIcon('trash-2', 'small-icon') + '<span>Remove</span></button>' +
            '</div>' +
          '</div>';
      }

      var addMoreHtml = '<p class="photo-filename">Maximum ' + maxImages + ' photos added.</p>';
      if (currentImages.length < maxImages) {
        addMoreHtml =
          '<div class="photo-buttons">' +
            '<button type="button" data-action="upload" class="small-round-button">' + drawSmallIcon('upload', 'small-icon') + '<span>Add Another Photo (' + currentImages.length + '/' + maxImages + ')</span></button>' +
            '<button type="button" data-action="open-cam" ' + disabledAttribute + ' class="small-round-button">' + drawSmallIcon('camera', 'small-icon') + '<span>' + cameraButtonText + '</span></button>' +
          '</div>';
      }

      bodyHtml = cardsHtml + '<div class="photo-bottom-bar">' + addMoreHtml + '</div>';
    } else {
      bodyHtml =
        '<div class="photo-empty-box">' +
          '<p class="photo-empty-title">Show What You Have Nearby</p>' +
          '<p class="photo-empty-text">Choose up to ' + maxImages + ' JPG or PNG pictures (up to 10 MB each), or open your camera.</p>' +
          '<div class="photo-empty-buttons">' +
            '<button type="button" data-action="upload" class="button ' + makeTextSafe(accentClass) + '">' + drawSmallIcon('upload', 'small-icon') + '<span>' + makeTextSafe(uploadLabel) + '</span></button>' +
            '<button type="button" data-action="open-cam" ' + disabledAttribute + ' class="button button-white">' + drawSmallIcon('camera', 'small-icon') + '<span>' + cameraButtonText + '</span></button>' +
          '</div>' +
          '<div><button type="button" data-action="sample" class="text-link-button">' + makeTextSafe(sampleLabel) + '</button></div>' +
        '</div>';
    }

    container.innerHTML =
      '<div class="photo-picker">' +
        '<input type="file" multiple accept="image/jpeg,image/png,.jpg,.jpeg,.png" class="file-hidden" aria-label="' + makeTextSafe(uploadLabel) + '"/>' +
        alertHtml +
        cameraHtml +
        bodyHtml +
      '</div>';

    var fileInput = container.querySelector('input[type="file"]');
    if (fileInput) {
      fileInput.onchange = function (event) {
        var files = event.target.files;
        if (!files || files.length === 0) return;
        errorMessage = '';

        var slotsLeft = maxImages - currentImages.length;
        if (files.length > slotsLeft) {
          errorMessage = 'You can only add ' + slotsLeft + ' more photo(s) (maximum ' + maxImages + ').';
        }

        var countToRead = files.length;
        if (countToRead > slotsLeft) {
          countToRead = slotsLeft;
        }

        for (var f = 0; f < countToRead; f++) {
          (function (file) {
            var problem = checkPhotoFile(file);
            if (problem) {
              errorMessage = problem;
              drawPicker();
              return;
            }
            var reader = new FileReader();
            reader.onload = function () {
              if (reader.result) {
                addNewImage({ previewUrl: reader.result, fileName: file.name, source: 'upload' });
              }
            };
            reader.readAsDataURL(file);
          })(files[f]);
        }

        event.target.value = '';
      };
    }

    var uploadButtons = container.querySelectorAll('[data-action="upload"]');
    for (var j = 0; j < uploadButtons.length; j++) {
      uploadButtons[j].onclick = function () {
        if (fileInput) fileInput.click();
      };
    }

    var openCamButton = container.querySelector('[data-action="open-cam"]');
    if (openCamButton) openCamButton.onclick = openCamera;

    var snapButton = container.querySelector('[data-action="snap"]');
    if (snapButton) snapButton.onclick = takePhoto;

    var closeCamButton = container.querySelector('[data-action="close-cam"]');
    if (closeCamButton) {
      closeCamButton.onclick = function () {
        stopCamera();
        drawPicker();
      };
    }

    var removeButtons = container.querySelectorAll('[data-remove-index]');
    for (var r = 0; r < removeButtons.length; r++) {
      removeButtons[r].onclick = function () {
        var removeIdx = parseInt(this.getAttribute('data-remove-index'), 10);
        currentImages.splice(removeIdx, 1);
        errorMessage = '';
        notifyChange();
        drawPicker();
      };
    }

    var sampleButton = container.querySelector('[data-action="sample"]');
    if (sampleButton) sampleButton.onclick = pickSamplePicture;
  }

  drawPicker();
}

// Sets up the microphone button so kids can speak instead of typing
function setupVoiceInput(container, settings) {
  if (!container) return;
  var config = settings || {};
  var buttonLabel = config.label || 'Use Voice Input';
  var onTranscript = config.onTranscript || function () {};
  var isListening = false;
  var askingMic = false;
  var statusText = '';
  var recognition = null;
  var micStream = null;
  var wasCancelled = false;

  function stopMicStream() {
    if (micStream) {
      var tracks = micStream.getTracks();
      for (var i = 0; i < tracks.length; i++) {
        tracks[i].stop();
      }
      micStream = null;
    }
  }

  function startSpeech() {
    var SpeechRecognitionTool = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognitionTool) {
      stopMicStream();
      statusText = 'Voice dictation is not supported in this browser, so please type your message in the text box above.';
      drawVoice();
      return;
    }
    try {
      var recorder = new SpeechRecognitionTool();
      recorder.lang = 'en-US';
      recorder.interimResults = false;
      recorder.maxAlternatives = 1;
      recorder.onresult = function (event) {
        stopMicStream();
        isListening = false;
        var spokenText = '';
        if (event && event.results && event.results[0] && event.results[0][0]) {
          spokenText = event.results[0][0].transcript;
        }
        if (spokenText && !wasCancelled) {
          onTranscript(spokenText.trim());
          statusText = 'Voice added! You can keep typing or editing in the text box above.';
        }
        drawVoice();
      };
      recorder.onerror = function (event) {
        stopMicStream();
        isListening = false;
        if (!wasCancelled) {
          if (event && (event.error === 'not-allowed' || event.error === 'service-not-allowed')) {
            statusText = 'Microphone permission was not granted in the browser. You can type your idea in the text box above instead!';
          } else {
            statusText = 'Could not hear clearly right now. You can try again or type your idea in the text box above!';
          }
        }
        drawVoice();
      };
      recorder.onend = function () {
        isListening = false;
        drawVoice();
      };
      recognition = recorder;
      isListening = true;
      drawVoice();
      recorder.start();
    } catch (error) {
      isListening = false;
      stopMicStream();
      statusText = 'Could not start voice input right now. Please type your idea in the text box above!';
      drawVoice();
    }
  }

  function beginVoice() {
    statusText = '';
    wasCancelled = false;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      askingMic = true;
      drawVoice();
      navigator.mediaDevices.getUserMedia({ audio: true, video: false })
        .then(function (stream) {
          micStream = stream;
          askingMic = false;
          startSpeech();
        })
        .catch(function () {
          askingMic = false;
          statusText = 'Microphone permission was not granted in the browser. You can type your message in the text box above instead!';
          drawVoice();
        });
    } else {
      startSpeech();
    }
  }

  function drawVoice() {
    var controlsHtml = '';
    if (isListening) {
      controlsHtml =
        '<button type="button" data-voice="stop" class="voice-button voice-button-active">' + drawSmallIcon('square', 'small-icon') + '<span>Stop Voice Recording</span></button>' +
        '<button type="button" data-voice="cancel" class="voice-button">' + drawSmallIcon('x', 'small-icon') + '<span>Cancel</span></button>';
    } else {
      var disabledAttribute = askingMic ? 'disabled' : '';
      var micText = askingMic ? 'Requesting Microphone...' : buttonLabel;
      controlsHtml =
        '<button type="button" data-voice="start" ' + disabledAttribute + ' class="voice-button">' +
          drawSmallIcon('mic', 'small-icon') +
          '<span>' + makeTextSafe(micText) + '</span>' +
        '</button>';
    }

    var statusHtml = '';
    if (statusText) {
      statusHtml = '<p role="status" class="voice-status">' + makeTextSafe(statusText) + '</p>';
    }

    container.innerHTML =
      '<div class="voice-box">' +
        '<div class="voice-controls">' + controlsHtml + '</div>' +
        statusHtml +
      '</div>';

    var startButton = container.querySelector('[data-voice="start"]');
    if (startButton) startButton.onclick = beginVoice;

    var stopButton = container.querySelector('[data-voice="stop"]');
    if (stopButton) {
      stopButton.onclick = function () {
        wasCancelled = false;
        if (recognition) recognition.stop();
        stopMicStream();
        isListening = false;
        drawVoice();
      };
    }

    var cancelButton = container.querySelector('[data-voice="cancel"]');
    if (cancelButton) {
      cancelButton.onclick = function () {
        wasCancelled = true;
        if (recognition) recognition.stop();
        stopMicStream();
        isListening = false;
        statusText = '';
        drawVoice();
      };
    }
  }

  drawVoice();
}

// Returns the sample real-world game plan for the child's age group
function getSampleGame(ageGroup) {
  var difficultyLabel = 'Master Builder (Ages 11-12 & Mixed) - 4 steps back with trick rebounds';
  if (ageGroup === '6-8') {
    difficultyLabel = 'Gentle Starter (Ages 6-8) - 2 big steps back';
  } else if (ageGroup === '9-10') {
    difficultyLabel = 'Explorer Challenge (Ages 9-10) - 3 big steps back';
  }

  return {
    title: 'Cup-and-Sock Castle Rescue',
    objective: 'Knock down the shaky top cup without toppling the bottom base towers, then rebuild the castle faster together!',
    materials: [
      '5 to 8 paper or plastic cups',
      '2 pairs of clean rolled socks',
      '1 wooden spoon or ruler (launch line marker)',
      'Scrap paper for point tags'
    ],
    instructions: [
      'Stack the cups into a sturdy pyramid or mini village wall on the floor or a safe carpet.',
      'Place the wooden spoon two big steps away as your starting launch line.',
      'Gently toss the rolled socks underhand to knock down only the top cup first.',
      'Run over, pick up the socks, and try a new angle or stacking pattern for the next round!'
    ],
    difficulty: difficultyLabel
  };
}

// Returns an updated sample game based on the child's rule change request
function getModifiedGame(prompt, ageGroup) {
  var lowerText = String(prompt || '').toLowerCase();
  var baseGame = getSampleGame(ageGroup);
  var trimmedPrompt = String(prompt || '').trim();

  if (lowerText.indexOf('two') !== -1 || lowerText.indexOf('2') !== -1 || lowerText.indexOf('friend') !== -1) {
    return {
      title: 'Two-Player Cup-and-Sock Relay',
      objective: 'Work as a 2-player team! One player launches rolled socks while the partner rebuilds fallen guard cups before the next round.',
      materials: baseGame.materials.concat(['1 soft pillow as a team home base']),
      instructions: [
        'Partner A stands behind the spoon line with 2 rolled socks.',
        'Partner B waits beside the pillow base ready to be the Castle Rebuilder.',
        'After Partner A tosses both socks, switch jobs! Partner B tries to defend or rebuild using a new shape.',
        'Cheer each other on and trade turns inventing new cup layouts.'
      ],
      difficulty: 'Teamwork Mode - 2 Players Cooperative',
      appliedModification: trimmedPrompt
    };
  }

  if (lowerText.indexOf('hard') !== -1 || lowerText.indexOf('challeng') !== -1) {
    return {
      title: 'Super Trick-Shot Castle Challenge',
      objective: 'Score a clean hit on the guarded top cup using your non-dominant hand or a wall bounce!',
      materials: baseGame.materials.concat(['1 small cardboard box as a shield']),
      instructions: [
        'Place the cardboard box in front of the cups so you cannot roll straight in.',
        'Take 4 big steps back from the tower.',
        'Toss the rolled socks in a high rainbow arc over the cardboard shield.',
        'Every round you succeed, raise the shield or widen the tower!'
      ],
      difficulty: 'Extra Tricky Mode - Rainbow Arc Over Shield',
      appliedModification: trimmedPrompt
    };
  }

  return {
    title: 'Mystery Rule-Twist Cup Adventure',
    objective: 'Play using your own custom twist! Swap cup heights after every round so every throw feels brand new.',
    materials: baseGame.materials.concat(['1 pillow obstacle']),
    instructions: [
      'Build two mini towers instead of one tall castle.',
      'Place a couch pillow between the two towers as a river.',
      'Before tossing, call out which tower you are aiming for!',
      'Swap the rules again anytime you think of a sillier twist.'
    ],
    difficulty: baseGame.difficulty + ' - Custom Twist Applied',
    appliedModification: trimmedPrompt
  };
}

// Returns friendly mentor questions and next-step tips for Young Inventors Lab
function getInventionFeedback(challengeId, isReply) {
  if (isReply) {
    return {
      guidingQuestions: [
        'Nice testing! Which part of your updated design stayed the strongest when you tested your fix?',
        'If you built a full-size version for a real town, what natural material (like stones or logs) would replace your cardboard?'
      ],
      improvementSuggestions: [
        'Try sketching a quick label on scrap paper showing where the water or wind goes around your barrier.'
      ],
      followUpChallenges: [
        'Teach a family member or classmate how your invention works in 30 seconds without touching it!'
      ]
    };
  }

  if (challengeId === 'shy-hedgehog') {
    return {
      guidingQuestions: [
        'How does light stay outside your shelter while air can still flow in gently?',
        'What keeps the roof from wobbling if a gentle breeze blows past the doorway?'
      ],
      improvementSuggestions: [
        'Try adding folded paper corner pillars or rolled newspaper beams to strengthen the roof.',
        'Add a soft curved entrance flap so your little explorer feels tucked in.'
      ],
      followUpChallenges: [
        'Test gently tapping the table near your hideout to see if you can make the base wider so nothing tips over!'
      ]
    };
  }

  return {
    guidingQuestions: [
      'When pretend "rain" flows fast toward the village, where does the water go once it hits your barrier?',
      'Which joint or seam in your invention might need extra support if the flood lasts longer?'
    ],
    improvementSuggestions: [
      'Try tilting part of your cardboard wall at an angle so water slides sideways instead of pushing straight against one spot.',
      'Stack a heavier base weight (like a folded towel or block) behind the wall so it stays anchored.'
    ],
    followUpChallenges: [
      'Use rolled paper balls or dry beans as "flood drops" and test if any reach the village houses, then adjust one piece!'
    ]
  };
}

// Gets the first scene for the selected profession in Career Quest
function getCareerStepOne(profession) {
  return CAREER_SCENARIOS[profession].step1;
}

// Gets the second scene based on what the child picked in Scene 1
function getCareerNextStep(profession, choiceId) {
  var data = CAREER_SCENARIOS[profession];
  if (data.branches[choiceId]) {
    return data.branches[choiceId];
  }
  var firstKey = Object.keys(data.branches)[0];
  return data.branches[firstKey];
}

// Gets the final mission result screen for Career Quest
function getCareerOutcome(profession, choiceId) {
  var outcomeMessage = CAREER_SCENARIOS[profession].outcomes[choiceId] || 'Great thinking! Every decision helped shape your real-world mission.';
  return {
    profession: profession,
    stepNumber: 3,
    scenario: outcomeMessage,
    objective: 'Celebrate what you learned and try an offline version of this role!',
    question: '',
    choices: [],
    outcomeMessage: outcomeMessage
  };
}


// Live Vercel API link (hides our keys and runs Gemini + Groq safety checks)
var KIDVENTURE_API_URL = 'https://kidventure-three.vercel.app/api/generate';

// Helper 1: Fast check in Chrome for emails, links, phone numbers, or unsafe words (NFR-09)
function checkInputText(rawText) {
  var text = '';
  if (rawText) {
    text = String(rawText).trim();
  }
  if (!text) {
    return '';
  }

  var lower = text.toLowerCase();

  if (lower.indexOf('@') !== -1) {
    return 'Please do not include email addresses.';
  }
  if (lower.indexOf('http://') !== -1) {
    return 'Please do not include website links.';
  }
  if (lower.indexOf('https://') !== -1) {
    return 'Please do not include website links.';
  }

  var digitsCount = 0;
  for (var i = 0; i < text.length; i++) {
    var ch = text[i];
    if (ch >= '0' && ch <= '9') {
      digitsCount = digitsCount + 1;
      if (digitsCount >= 7) {
        return 'Please do not include phone numbers or personal numbers.';
      }
    } else if (ch !== ' ' && ch !== '-') {
      digitsCount = 0;
    }
  }

  var blockedWords = ['ignore previous', 'system prompt', 'knife', 'knives', 'bleach', 'matches', 'lighter', 'gun', 'weapon'];
  for (var j = 0; j < blockedWords.length; j++) {
    if (lower.indexOf(blockedWords[j]) !== -1) {
      return 'Let us keep our ideas safe and kid-friendly! Please try a different everyday item.';
    }
  }

  return '';
}

// Helper 2: Pull the JSON object out of the AI's text reply
function parseAiJson(rawText) {
  var cleaned = String(rawText).trim();
  var firstBrace = cleaned.indexOf('{');
  var lastBrace = cleaned.lastIndexOf('}');
  if (firstBrace !== -1) {
    if (lastBrace > firstBrace) {
      cleaned = cleaned.slice(firstBrace, lastBrace + 1);
    }
  }
  return JSON.parse(cleaned);
}

// Helper 3: Send a prompt (and optional photo) to our Vercel API and return the JSON result
async function askKidventureAI(prompt, userText, imageBase64, mimeType) {
  var requestData = {
    prompt: prompt,
    userText: userText || ''
  };

  if (imageBase64) {
    if (mimeType) {
      requestData.imageBase64 = imageBase64;
      requestData.mimeType = mimeType;
    }
  }

  for (var attempt = 1; attempt <= 2; attempt++) {
    try {
      var response = await fetch(KIDVENTURE_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      });

      var data = await response.json();

      if (response.ok && data.ok) {
        var parsed = parseAiJson(data.text);
        return { ok: true, data: parsed };
      }

      // If safety blocked it, stop right away and show the safety message
      if (data.blocked) {
        return { ok: false, error: data.error || 'That idea could not be used.' };
      }

      // If it was a temporary server/rate-limit error on attempt 1, wait 1.2s and retry once
      if (attempt === 1) {
        await new Promise(function (resolve) { setTimeout(resolve, 1200); });
      } else {
        return { ok: false, error: data.error || 'Something went wrong. Please try again!' };
      }
    } catch (err) {
      if (attempt === 1) {
        await new Promise(function (resolve) { setTimeout(resolve, 1200); });
      } else {
        return {
          ok: false,
          error: 'Could not reach the AI right now. Check your internet and try again!'
        };
      }
    }
  }
}

// Helper 4: Load a picture in memory so we can crop it on a canvas
function loadHtmlImage(imageUrl) {
  return new Promise(function (resolve, reject) {
    var img = new Image();
    img.onload = function () {
      resolve(img);
    };
    img.onerror = function () {
      reject(new Error('Could not read that image.'));
    };
    img.src = imageUrl;
  });
}

// Helper 5: Draw an image (or crop it to [ymin, xmin, ymax, xmax]) and return JPEG base64
function makeJpegBase64(img, box) {
  var width = img.naturalWidth || img.width || 640;
  var height = img.naturalHeight || img.height || 480;

  var cropX = 0;
  var cropY = 0;
  var cropW = width;
  var cropH = height;

  if (box && box.length === 4) {
    var ymin = Number(box[0]) / 1000;
    var xmin = Number(box[1]) / 1000;
    var ymax = Number(box[2]) / 1000;
    var xmax = Number(box[3]) / 1000;

    if (ymax > ymin && xmax > xmin) {
      cropX = Math.floor(xmin * width);
      cropY = Math.floor(ymin * height);
      cropW = Math.floor((xmax - xmin) * width);
      cropH = Math.floor((ymax - ymin) * height);
    }
  }

  if (cropW < 20 || cropH < 20) {
    cropX = 0;
    cropY = 0;
    cropW = width;
    cropH = height;
  }

  var canvas = document.createElement('canvas');
  canvas.width = cropW;
  canvas.height = cropH;
  var ctx = canvas.getContext('2d');
  ctx.drawImage(img, cropX, cropY, cropW, cropH, 0, 0, cropW, cropH);

  var dataUrl = canvas.toDataURL('image/jpeg', 0.85);
  return dataUrl.split(',')[1];
}

// Helper 6: Check photo safety, identify objects (AI-04), and crop to the objects (AI-05)
async function scanAndCropImage(imageObj) {
  if (!imageObj || !imageObj.previewUrl) {
    return { ok: true, objects: [], croppedBase64: '', mimeType: '' };
  }

  if (imageObj.source === 'sample') {
    return {
      ok: true,
      objects: ['paper cups', 'rolled socks', 'cardboard'],
      croppedBase64: '',
      mimeType: ''
    };
  }

  try {
    var img = await loadHtmlImage(imageObj.previewUrl);
    var fullBase64 = makeJpegBase64(img, null);

    var identifyPrompt =
      'Look at this image for a children offline play website. ' +
      '1) Check if it has personal info (human faces, ID cards, phone numbers, addresses, school logos) or unsafe items (weapons, knives, alcohol, chemicals). ' +
      '2) List up to 5 everyday household objects or craft materials you see. If none are visible, set "objects" to []. ' +
      '3) Give one box [ymin, xmin, ymax, xmax] with numbers from 0 to 1000 covering the main objects. ' +
      'Reply with ONLY valid JSON: ' +
      '{"safe": true, "reason": "", "objects": ["item1", "item2"], "box": [100, 100, 900, 900]}';

    var aiResult = await askKidventureAI(identifyPrompt, '', fullBase64, 'image/jpeg');
    if (!aiResult.ok) {
      return { ok: false, error: aiResult.error };
    }

    var info = aiResult.data;
    if (info && info.safe === false) {
      var reason = info.reason;
      if (!reason) {
        reason = 'Please take a photo of everyday objects without faces, personal info, or unsafe items!';
      }
      return { ok: false, error: reason };
    }

    if (!info || !info.objects || info.objects.length === 0) {
      return {
        ok: false,
        error: 'We could not spot any everyday objects in that photo. Please try a clearer picture!'
      };
    }

    var croppedBase64 = makeJpegBase64(img, info.box);
    return {
      ok: true,
      objects: info.objects,
      croppedBase64: croppedBase64,
      mimeType: 'image/jpeg'
    };
  } catch (err) {
    return {
      ok: false,
      error: 'Could not read that picture. Please try uploading a JPG or PNG image!'
    };
  }
}

// Helper 7: Scan and crop 1 to 3 photos and combine all identified objects
async function scanAndCropImages(imagesList) {
  if (!imagesList || imagesList.length === 0) {
    return { ok: true, objects: [], croppedBase64: '', mimeType: '' };
  }

  var allObjects = [];
  var firstCroppedBase64 = '';
  var firstMimeType = '';

  for (var i = 0; i < imagesList.length; i++) {
    var result = await scanAndCropImage(imagesList[i]);
    if (!result.ok) {
      return { ok: false, error: result.error };
    }

    if (result.objects) {
      for (var j = 0; j < result.objects.length; j++) {
        if (allObjects.indexOf(result.objects[j]) === -1) {
          allObjects.push(result.objects[j]);
        }
      }
    }

    if (!firstCroppedBase64 && result.croppedBase64) {
      firstCroppedBase64 = result.croppedBase64;
      firstMimeType = result.mimeType;
    }
  }

  return {
    ok: true,
    objects: allObjects,
    croppedBase64: firstCroppedBase64,
    mimeType: firstMimeType
  };
}

// Returns clear developmental and difficulty criteria for each Kidventure age group
function getAgeCriteria(ageGroup) {
  if (ageGroup === '9-10') {
    return (
      'Age 9-10 (Clever Builders): Require 2-step planning, logical reasoning, or solving a clear constraint ' +
      '(such as limited materials, stability, or clue deduction). Include a meaningful strategic twist—not a babyish or repetitive task.'
    );
  }
  if (ageGroup === '11-12' || ageGroup === '6-12') {
    return (
      'Age 11-12 (Master Solvers): Require multi-step critical thinking, engineering/strategy trade-offs ' +
      '(e.g., speed vs. balance, weight vs. strength), or team problem-solving with a real challenge constraint.'
    );
  }
  return (
    'Age 6-8 (Early Explorers): Focus on 1-step cause-and-effect, simple sorting/matching, basic balance, or playful observation. ' +
    'Keep to 1 simple goal with no complicated scoring.'
  );
}