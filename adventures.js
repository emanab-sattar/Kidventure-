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

// Shows the tap-and-find mini-game while the next activity result is being prepared
function showDiscoveryRoom(container, settings) {
  if (!container) return;
  var config = settings || {};
  var roomName = config.environment || 'playroom';
  if (roomName !== 'playroom' && roomName !== 'workshop' && roomName !== 'discovery') {
    roomName = 'playroom';
  }
  var room = DISCOVERY_ROOMS[roomName];
  var foundIds = [];

  function pickObject(objectId) {
    if (foundIds.indexOf(objectId) === -1) {
      foundIds.push(objectId);
      drawRoom();
    }
  }

  function bindRoomObjectButton(buttonElement) {
    var objectId = buttonElement.getAttribute('data-collect-id');
    buttonElement.onclick = function () {
      pickObject(objectId);
    };
  }

  function drawRoom() {
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

    var nextObject = null;
    for (var i = 0; i < DISCOVERY_OBJECTS.length; i++) {
      if (foundIds.indexOf(DISCOVERY_OBJECTS[i].id) === -1) {
        nextObject = DISCOVERY_OBJECTS[i];
        break;
      }
    }

    var hintText = 'Wonderful exploring! You found all 6 discovery objects in the room.';
    if (nextObject) {
      hintText = nextObject.hint;
    }

    var roomItemsHtml = '';
    var chipsHtml = '';
    for (var j = 0; j < DISCOVERY_OBJECTS.length; j++) {
      var item = DISCOVERY_OBJECTS[j];
      var isFound = foundIds.indexOf(item.id) !== -1;

      var objectClass = 'room-item-button room-pos-' + item.id;
      var checkBadgeHtml = '';
      var chipClass = 'room-word-button';
      var chipCheckHtml = '';

      if (isFound) {
        objectClass += ' room-item-found';
        checkBadgeHtml =
          '<span class="room-found-tick">' +
            '<img src="./images/icon-check.svg" alt="" class="room-found-icon" />' +
          '</span>';
        chipClass += ' found';
        chipCheckHtml = drawSmallIcon('check', 'small-icon');
      }

      roomItemsHtml +=
        '<button type="button" data-collect-id="' + item.id + '" aria-label="' + makeTextSafe(item.label) + '" class="' + objectClass + '">' +
          '<img src="./images/item-' + item.id + '.svg" alt="" class="room-item-picture" />' +
          checkBadgeHtml +
        '</button>';

      chipsHtml +=
        '<button type="button" data-collect-id="' + item.id + '" class="' + chipClass + '">' +
          chipCheckHtml +
          '<span>' + makeTextSafe(item.label) + '</span>' +
        '</button>';
    }

    var subtitleText = room.subtitle;
    if (config.professionNote) {
      subtitleText += ' (' + config.professionNote + ')';
    }

    var playAgainHtml = '';
    if (foundIds.length > 0) {
      playAgainHtml =
        '<button type="button" id="room-reset-btn" class="small-round-button">' +
          drawSmallIcon('rotate-ccw', 'small-icon') +
          '<span>Play Again</span>' +
        '</button>';
    }

    var continueButtonLabel = config.resultButtonLabel || 'Continue to Sample Result';

    container.innerHTML =
      '<div class="discovery-card ' + room.cardClass + '">' +
        '<div class="room-header">' +
          '<div class="room-title-row">' +
            '<div id="room-owl-box"></div>' +
            '<div>' +
              '<p class="small-label">' + makeTextSafe(config.statusLabel || '') + '</p>' +
              '<h2 class="panel-title">' + makeTextSafe(room.title) + '</h2>' +
            '</div>' +
          '</div>' +
          '<div class="room-count-badge">' +
            drawSmallIcon('sparkles', 'small-icon') +
            '<span>Found ' + foundIds.length + ' of ' + DISCOVERY_OBJECTS.length + ' objects</span>' +
          '</div>' +
        '</div>' +
        '<p class="room-subtitle">' + makeTextSafe(subtitleText) + '</p>' +
        '<div aria-live="polite" class="room-hint-bar">' +
          '<p>' + makeTextSafe(hintText) + '</p>' +
          playAgainHtml +
        '</div>' +
        '<div class="room-play-area">' +
          '<div class="room-scene ' + room.stageClass + '" role="region" aria-label="' + makeTextSafe(room.title) + '">' +
            '<div class="room-wall"></div>' +
            '<div class="room-floor"></div>' +
            '<div class="room-window">' +
              '<div class="room-sun"></div>' +
              '<div class="room-window-bar"></div>' +
            '</div>' +
            '<div class="room-decor-' + roomName + '"></div>' +
            roomItemsHtml +
          '</div>' +
          '<div class="room-word-buttons">' + chipsHtml + '</div>' +
        '</div>' +
        '<div class="room-footer">' +
          '<button type="button" id="room-back-btn" class="button button-white">' + drawSmallIcon('arrow-left', 'small-icon') + '<span>Back</span></button>' +
          '<button type="button" id="room-continue-btn" class="button ' + room.buttonClass + '"><span>' + makeTextSafe(continueButtonLabel) + '</span>' + drawSmallIcon('arrow-right', 'small-icon') + '</button>' +
        '</div>' +
      '</div>';

    showOwl(document.getElementById('room-owl-box'), { variant: 'mini', interactive: false });

    var collectButtons = container.querySelectorAll('[data-collect-id]');
    for (var k = 0; k < collectButtons.length; k++) {
      bindRoomObjectButton(collectButtons[k]);
    }

    var resetButton = document.getElementById('room-reset-btn');
    if (resetButton) {
      resetButton.onclick = function () {
        foundIds = [];
        drawRoom();
      };
    }

    var backButton = document.getElementById('room-back-btn');
    if (backButton && config.onCancelToInput) backButton.onclick = config.onCancelToInput;

    var continueButton = document.getElementById('room-continue-btn');
    if (continueButton && config.onContinueToSample) continueButton.onclick = config.onContinueToSample;
  }

  drawRoom();
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
function setupPhotoPicker(container, settings) {
  if (!container) return;
  var config = settings || {};
  var accentClass = config.buttonAccentClass || 'button-white';
  var uploadLabel = config.uploadLabel || 'Upload Image';
  var sampleLabel = config.sampleLabel || 'Use Sample Picture';

  var currentImage = config.image || null;
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

  function updateImage(nextImage) {
    currentImage = nextImage;
    if (config.onChange) config.onChange(nextImage);
    drawPicker();
  }

  function openCamera() {
    errorMessage = '';
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
    updateImage({ previewUrl: photoUrl, fileName: 'camera-photo.jpg', source: 'camera' });
  }

  function pickSamplePicture() {
    errorMessage = '';
    updateImage({
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
    if (currentImage) {
      bodyHtml =
        '<div class="photo-preview-card">' +
          '<div class="photo-image-box"><img src="' + makeTextSafe(currentImage.previewUrl) + '" alt="Preview of your everyday objects" class="photo-image"/></div>' +
          '<div class="photo-bottom-bar">' +
            '<p class="photo-filename">' + makeTextSafe(currentImage.fileName) + '</p>' +
            '<div class="photo-buttons">' +
              '<button type="button" data-action="upload" class="small-round-button">' + drawSmallIcon('upload', 'small-icon') + '<span>Upload Another</span></button>' +
              '<button type="button" data-action="open-cam" ' + disabledAttribute + ' class="small-round-button">' + drawSmallIcon('camera', 'small-icon') + '<span>Use Camera</span></button>' +
              '<button type="button" data-action="remove" class="small-round-button small-red-button">' + drawSmallIcon('trash-2', 'small-icon') + '<span>Remove Image</span></button>' +
            '</div>' +
          '</div>' +
        '</div>';
    } else {
      bodyHtml =
        '<div class="photo-empty-box">' +
          '<p class="photo-empty-title">Show What You Have Nearby</p>' +
          '<p class="photo-empty-text">Choose a JPG or PNG picture (up to 10 MB), or open your camera.</p>' +
          '<div class="photo-empty-buttons">' +
            '<button type="button" data-action="upload" class="button ' + makeTextSafe(accentClass) + '">' + drawSmallIcon('upload', 'small-icon') + '<span>' + makeTextSafe(uploadLabel) + '</span></button>' +
            '<button type="button" data-action="open-cam" ' + disabledAttribute + ' class="button button-white">' + drawSmallIcon('camera', 'small-icon') + '<span>' + cameraButtonText + '</span></button>' +
          '</div>' +
          '<div><button type="button" data-action="sample" class="text-link-button">' + makeTextSafe(sampleLabel) + '</button></div>' +
        '</div>';
    }

    container.innerHTML =
      '<div class="photo-picker">' +
        '<input type="file" accept="image/jpeg,image/png,.jpg,.jpeg,.png" class="file-hidden" aria-label="' + makeTextSafe(uploadLabel) + '"/>' +
        alertHtml +
        cameraHtml +
        bodyHtml +
      '</div>';

    var fileInput = container.querySelector('input[type="file"]');
    if (fileInput) {
      fileInput.onchange = function (event) {
        var file = event.target.files && event.target.files[0];
        event.target.value = '';
        if (!file) return;
        var problem = checkPhotoFile(file);
        if (problem) {
          errorMessage = problem;
          drawPicker();
          return;
        }
        errorMessage = '';
        var reader = new FileReader();
        reader.onload = function () {
          if (reader.result) {
            updateImage({ previewUrl: reader.result, fileName: file.name, source: 'upload' });
          }
        };
        reader.readAsDataURL(file);
      };
    }

    var uploadButtons = container.querySelectorAll('[data-action="upload"]');
    for (var i = 0; i < uploadButtons.length; i++) {
      uploadButtons[i].onclick = function () {
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

    var removeButton = container.querySelector('[data-action="remove"]');
    if (removeButton) {
      removeButton.onclick = function () {
        errorMessage = '';
        updateImage(null);
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
