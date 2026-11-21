// Names used to save account info and adventure history on this browser
var USER_STORAGE_KEY = 'kv_user';
var ADVENTURES_STORAGE_KEY = 'kv_adventures';
var SAVED_ACTIVITY_KEY = 'kv_pending_feature';

// List of the 3 activity pages and their file names
var ACTIVITY_NAMES = ['game-inventor', 'creative-mission', 'career-explorer'];

var ACTIVITY_TITLES = {
  'game-inventor': 'AI Game Inventor',
  'creative-mission': 'AI Young Inventors Lab',
  'career-explorer': 'AI Career Quest'
};

var ACTIVITY_FILES = {
  'game-inventor': './game-inventor.html',
  'creative-mission': './young-inventors.html',
  'career-explorer': './career-quest.html'
};

// Friendly messages shown when a child clicks Hoot the Owl
var OWL_MESSAGES = [
  "Whooo's ready for an adventure?",
  "Pick up something nearby, like cups, socks, or a box, and let's invent a game!",
  "Remember: no photos or voices are ever saved here.",
  "Step away from the screen and build something amazing!"
];

// List of small button and menu icon file names
var SMALL_ICON_NAMES = [
  'arrow-left', 'arrow-right', 'camera', 'check', 'chevron-left',
  'circle-alert', 'circle-check', 'circle-question-mark', 'compass',
  'eye-off', 'eye', 'facebook', 'instagram', 'lightbulb', 'lock',
  'log-in', 'log-out', 'mail', 'menu', 'mic', 'pencil', 'phone',
  'refresh-cw', 'rotate-ccw', 'shield-alert', 'shield-check',
  'sparkles', 'square', 'star', 'trash-2', 'twitter', 'upload',
  'user', 'user-check', 'x'
];

// Makes text safe to put inside HTML so special symbols do not break the page
function makeTextSafe(text) {
  if (text === null || text === undefined) {
    return '';
  }
  return String(text)
    .split('&').join('&amp;')
    .split('<').join('&lt;')
    .split('>').join('&gt;')
    .split('"').join('&quot;')
    .split("'").join('&#39;');
}

// Shows a small icon image by its name
function drawSmallIcon(iconName, sizeClass) {
  var safeName = SMALL_ICON_NAMES.indexOf(iconName) !== -1 ? iconName : 'star';
  var iconClass = sizeClass || 'small-icon';
  return '<img src="./images/icon-' + makeTextSafe(safeName) + '.svg" alt="" class="' + makeTextSafe(iconClass) + '" />';
}

// Reads the chosen activity name from the page web address (after ?feature=)
function getFeatureFromAddress() {
  var query = window.location.search;
  if (!query || query.indexOf('?') === -1) {
    return '';
  }
  var parts = query.slice(1).split('&');
  for (var i = 0; i < parts.length; i++) {
    var pair = parts[i].split('=');
    if (pair[0] === 'feature' && pair[1]) {
      return decodeURIComponent(pair[1]);
    }
  }
  return '';
}

// Gets the signed-in user saved on this browser
function getCurrentUser() {
  try {
    var savedText = localStorage.getItem(USER_STORAGE_KEY);
    return savedText ? JSON.parse(savedText) : null;
  } catch (error) {
    return null;
  }
}

// Saves the signed-in user on this browser
function saveUser(user) {
  try {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
  } catch (error) {}
}

// Logs out the user by removing their saved login info
function clearCurrentUser() {
  try {
    localStorage.removeItem(USER_STORAGE_KEY);
  } catch (error) {}
}

// Gets the list of finished adventures saved on this browser
function getSavedAdventures() {
  try {
    var savedText = localStorage.getItem(ADVENTURES_STORAGE_KEY);
    var list = savedText ? JSON.parse(savedText) : [];
    if (!list || list.length === undefined) {
      return [];
    }
    return list;
  } catch (error) {
    return [];
  }
}

// Adds a newly finished adventure to the top of the list
function saveNewAdventure(adventureItem) {
  var list = getSavedAdventures();
  list.unshift(adventureItem);
  try {
    localStorage.setItem(ADVENTURES_STORAGE_KEY, JSON.stringify(list));
  } catch (error) {}
  return list;
}

// Clears all saved adventures from this browser
function clearAdventures() {
  try {
    localStorage.setItem(ADVENTURES_STORAGE_KEY, JSON.stringify([]));
  } catch (error) {}
}

// Checks if the visitor already picked an activity before signing in
function getSavedActivityChoice() {
  try {
    var fromAddress = getFeatureFromAddress();
    if (fromAddress && ACTIVITY_NAMES.indexOf(fromAddress) !== -1) {
      return fromAddress;
    }
    var fromTab = sessionStorage.getItem(SAVED_ACTIVITY_KEY);
    if (fromTab && ACTIVITY_NAMES.indexOf(fromTab) !== -1) {
      return fromTab;
    }
    return null;
  } catch (error) {
    return null;
  }
}

// Remembers which activity was clicked before signing in
function saveActivityChoice(activityName) {
  try {
    if (activityName && ACTIVITY_NAMES.indexOf(activityName) !== -1) {
      sessionStorage.setItem(SAVED_ACTIVITY_KEY, activityName);
    } else {
      sessionStorage.removeItem(SAVED_ACTIVITY_KEY);
    }
  } catch (error) {}
}

// Forgets the remembered activity choice
function clearActivityChoice() {
  try {
    sessionStorage.removeItem(SAVED_ACTIVITY_KEY);
  } catch (error) {}
}

// Opens an activity page if signed in, or sends visitors to create an account first
function openActivity(activityName) {
  if (ACTIVITY_NAMES.indexOf(activityName) === -1) return;
  var user = getCurrentUser();
  if (!user) {
    saveActivityChoice(activityName);
    window.location.href = './register.html?feature=' + encodeURIComponent(activityName);
    return;
  }
  window.location.href = ACTIVITY_FILES[activityName];
}

// Sends visitors to sign up if they open an activity page without signing in
function requireSignedInUser(activityName) {
  var user = getCurrentUser();
  if (!user) {
    if (activityName) {
      saveActivityChoice(activityName);
      window.location.href = './register.html?feature=' + encodeURIComponent(activityName);
    } else {
      window.location.href = './register.html';
    }
    return null;
  }
  return user;
}

// Shows Hoot the Owl (switches between open eyes and blinking picture)
function buildOwlSvg(isBlinking, isBouncing) {
  var imageFile = isBlinking ? './images/hoot-owl-blink.svg' : './images/hoot-owl.svg';
  var pictureClass = isBouncing ? 'owl-picture owl-bouncing' : 'owl-picture';
  return '<img src="' + imageFile + '" alt="Hoot the Owl" class="' + pictureClass + '" />';
}

// Places Hoot the Owl inside a page box and makes him blink and talk when clicked
function showOwl(box, settings) {
  if (!box) return;
  var config = settings || {};
  var sizeName = config.variant || 'hero';
  var clickable = config.interactive !== false;
  var messages = config.speechMessages || OWL_MESSAGES;
  var startMessage = config.initialMessage || messages[0];
  var showBubble = Boolean(config.showBubbleByDefault);

  var sizeClass = 'owl-size-' + sizeName;
  var isBlinking = false;
  var isBouncing = false;
  var messageIndex = 0;
  var alreadyClicked = false;

  function drawOwl() {
    var message = (messageIndex === 0 && !alreadyClicked) ? startMessage : messages[messageIndex];
    var picture = buildOwlSvg(isBlinking, isBouncing);

    if (!clickable) {
      box.innerHTML = '<div class="' + sizeClass + '">' + picture + '</div>';
      return;
    }

    var bubbleHtml = showBubble
      ? '<div class="owl-bubble">' + makeTextSafe(message) + '</div>'
      : '';

    box.innerHTML =
      '<div class="owl-box">' +
        bubbleHtml +
        '<button type="button" class="owl-button ' + sizeClass + '" title="Tap Hoot the Owl for a clue">' +
          picture +
        '</button>' +
      '</div>';

    var owlButton = box.querySelector('.owl-button');
    if (owlButton) {
      owlButton.onclick = function () {
        alreadyClicked = true;
        showBubble = true;
        isBouncing = true;
        isBlinking = true;
        messageIndex = (messageIndex + 1) % messages.length;
        drawOwl();

        setTimeout(function () {
          isBlinking = false;
          drawOwl();
        }, 150);

        setTimeout(function () {
          isBouncing = false;
          drawOwl();
        }, 450);
      };
    }
  }

  function blinkEveryFewSeconds() {
    setTimeout(function () {
      if (!document.body.contains(box)) return;
      isBlinking = true;
      drawOwl();
      setTimeout(function () {
        if (!document.body.contains(box)) return;
        isBlinking = false;
        drawOwl();
        blinkEveryFewSeconds();
      }, 150);
    }, 4500);
  }

  drawOwl();
  blinkEveryFewSeconds();
}

// Shows one of the three detailed owl pictures used inside the activity cards and banners
function buildActivityOwlSvg(activityName) {
  if (activityName === 'game-inventor') {
    return '<img src="./images/owl-game-inventor.svg" alt="Hoot inventing a cup and sock game" class="activity-owl-picture" />';
  }
  if (activityName === 'creative-mission') {
    return '<img src="./images/owl-young-inventors.svg" alt="Hoot inventing with a pencil and lightbulb" class="activity-owl-picture" />';
  }
  return '<img src="./images/owl-career-quest.svg" alt="Hoot dressed as an astronaut" class="activity-owl-picture" />';
}

// Draws the three adventure cards inside the given box
function drawActivityCards(box) {
  if (!box) return;

  var cards = [
    {
      activity: 'game-inventor',
      cardColor: 'card-sand',
      tag: '01 - Invent and Play',
      title: 'AI Game Inventor',
      description: 'Turn everyday objects into exciting games! Think, plan, and make your own rules.',
      buttonClass: 'button button-sand button-wide',
      buttonText: 'Create a Game'
    },
    {
      activity: 'creative-mission',
      cardColor: 'card-peach',
      tag: '02 - Imagine and Build',
      title: 'AI Young Inventors Lab',
      description: 'Turn simple materials into amazing inventions! Imagine, experiment, and bring ideas to life.',
      buttonClass: 'button button-peach button-wide',
      buttonText: 'Try It!'
    },
    {
      activity: 'career-explorer',
      cardColor: 'card-mint',
      tag: '03 - Role-Play and Discover',
      title: 'AI Career Quest',
      description: 'Step into your dream career! Try fun missions and discover what different jobs are like.',
      buttonClass: 'button button-mint button-wide',
      buttonText: 'Explore'
    }
  ];

  var html = '<div class="three-col-grid">';
  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    html +=
      '<article class="activity-card ' + card.cardColor + '">' +
        '<div class="activity-picture-box">' + buildActivityOwlSvg(card.activity) + '</div>' +
        '<p class="activity-card-tag">' + makeTextSafe(card.tag) + '</p>' +
        '<h3 class="activity-card-title">' + makeTextSafe(card.title) + '</h3>' +
        '<p class="activity-card-text">' + makeTextSafe(card.description) + '</p>' +
        '<div class="activity-card-footer">' +
          '<button type="button" class="' + card.buttonClass + '" data-activity="' + card.activity + '">' +
            makeTextSafe(card.buttonText) +
          '</button>' +
        '</div>' +
      '</article>';
  }
  html += '</div>';
  box.innerHTML = html;

  var buttons = box.querySelectorAll('[data-activity]');
  for (var j = 0; j < buttons.length; j++) {
    buttons[j].onclick = function () {
      openActivity(this.getAttribute('data-activity'));
    };
  }
}

// Shows the picture icon for each of the five skills
function getSkillIconSvg(skillName) {
  var allowedSkills = ['cognitive', 'creative', 'physical', 'social', 'emotional'];
  var safeSkill = allowedSkills.indexOf(skillName) !== -1 ? skillName : 'emotional';
  return '<img src="./images/skill-' + safeSkill + '.svg" alt="" class="skill-picture" />';
}

// Tracks which page is open and whether the privacy panel or mobile menu is showing
var activePageName = 'home';
var privacyPanelOpen = false;
var mobileMenuOpen = false;

// Opens the slide-out privacy side panel
function openPrivacyPanel() {
  privacyPanelOpen = true;
  drawPrivacyPanel();
}

// Closes the slide-out privacy side panel
function closePrivacyPanel() {
  privacyPanelOpen = false;
  drawPrivacyPanel();
}

// Draws the top menu bar and updates it when a user logs in or out
function drawHeader() {
  var headerElement = document.getElementById('site-header');
  if (!headerElement) return;

  var user = getCurrentUser();
  var homeClass = 'top-link' + (activePageName === 'home' ? ' active' : '');
  var activitiesClass = 'top-link' + (activePageName === 'adventures' ? ' active' : '');
  var progressClass = 'top-link' + (activePageName === 'progress' ? ' active' : '');
  var helpClass = 'top-link' + (activePageName === 'help' ? ' active' : '');

  var accountButtonsHtml = '';
  if (user) {
    var badgeIcon = (user.accountType === 'parent' && window.buildAvatarSvg)
      ? window.buildAvatarSvg(user.avatar || 'owl', 24, false)
      : drawSmallIcon('user-check', 'small-icon');

    accountButtonsHtml =
      '<a href="./profile.html" class="profile-badge-link">' +
        badgeIcon +
        '<span>' + makeTextSafe(user.nickname) + '</span>' +
      '</a>' +
      '<button type="button" id="header-logout-btn" class="logout-button">' +
        drawSmallIcon('log-out', 'small-icon') +
        '<span>Log out</span>' +
      '</button>';
  } else {
    accountButtonsHtml =
      '<a href="./login.html" class="top-link">' + drawSmallIcon('log-in', 'small-icon') + '<span>Log in</span></a>' +
      '<a href="./register.html" class="button button-yellow button-small">Sign up</a>';
  }

  var mobileAuthHtml = user
    ? '<a href="./profile.html" class="button button-white button-wide">My Profile (' + makeTextSafe(user.nickname) + ')</a>' +
      '<button type="button" id="mobile-logout-btn" class="button button-white button-wide">Log out</button>'
    : '<a href="./login.html" class="button button-white">Log in</a>' +
      '<a href="./register.html" class="button button-yellow">Sign up</a>';

  var mobilePanelHtml = mobileMenuOpen
    ? '<div class="mobile-menu-panel">' +
        '<nav class="mobile-menu-links">' +
          '<a href="./index.html" class="' + homeClass + '">Home</a>' +
          '<a href="./index.html#features" class="top-link">Adventures</a>' +
          '<a href="./progress.html" class="' + progressClass + '">My Progress</a>' +
          (user ? '<a href="./profile.html" class="top-link">My Profile</a>' : '') +
          '<a href="./help.html" class="' + helpClass + '">Help</a>' +
          '<button type="button" id="mobile-privacy-btn" class="top-link">Privacy &amp; Safety</button>' +
        '</nav>' +
        '<div class="mobile-menu-auth">' + mobileAuthHtml + '</div>' +
      '</div>'
    : '';

  headerElement.className = 'site-header';
  headerElement.innerHTML =
    '<div class="header-inner">' +
      '<a href="./index.html" class="brand-logo">Kidventure</a>' +
      '<nav class="top-links">' +
        '<a href="./index.html" class="' + homeClass + '">Home</a>' +
        '<a href="./index.html#features" class="' + activitiesClass + '">Adventures</a>' +
        '<a href="./progress.html" class="' + progressClass + '">My Progress</a>' +
        '<a href="./help.html" class="' + helpClass + '">Help</a>' +
        '<a href="./index.html#adults" class="top-link">For Adults</a>' +
      '</nav>' +
      '<div class="header-account-area">' + accountButtonsHtml + '</div>' +
      '<button type="button" id="mobile-menu-toggle" class="mobile-menu-button" aria-label="Toggle menu">' +
        drawSmallIcon(mobileMenuOpen ? 'x' : 'menu', 'medium-icon') +
      '</button>' +
    '</div>' +
    mobilePanelHtml;

  var toggleButton = document.getElementById('mobile-menu-toggle');
  if (toggleButton) {
    toggleButton.onclick = function () {
      mobileMenuOpen = !mobileMenuOpen;
      drawHeader();
    };
  }

  function signOutUser() {
    clearCurrentUser();
    clearActivityChoice();
    mobileMenuOpen = false;
    if (activePageName === 'adventures' || activePageName === 'profile') {
      window.location.href = './index.html';
    } else {
      drawHeader();
      if (window.onUserLoggedOut) {
        window.onUserLoggedOut();
      }
    }
  }

  var desktopLogoutButton = document.getElementById('header-logout-btn');
  if (desktopLogoutButton) desktopLogoutButton.onclick = signOutUser;

  var mobileLogoutButton = document.getElementById('mobile-logout-btn');
  if (mobileLogoutButton) mobileLogoutButton.onclick = signOutUser;

  var mobilePrivacyButton = document.getElementById('mobile-privacy-btn');
  if (mobilePrivacyButton) {
    mobilePrivacyButton.onclick = function () {
      mobileMenuOpen = false;
      drawHeader();
      openPrivacyPanel();
    };
  }
}

// Draws the bottom footer with student names, links, contact info, and social links
function drawFooter() {
  var footerElement = document.getElementById('site-footer');
  if (!footerElement) return;

  footerElement.className = 'site-footer';
  footerElement.innerHTML =
    '<div class="footer-inner">' +
      '<div class="footer-grid">' +
        '<div>' +
          '<div class="footer-brand-row">' +
            '<div id="footer-owl-box"></div>' +
            '<p class="footer-brand-name">Kidventure</p>' +
          '</div>' +
          '<p class="footer-text">Games, inventions and careers built from everyday things at home. For children aged 6 to 12.</p>' +
        '</div>' +
        '<div>' +
          '<h3 class="footer-heading">Legal</h3>' +
          '<ul class="footer-list">' +
            '<li><button type="button" id="footer-privacy-btn" class="footer-link">Privacy Summary</button></li>' +
          '</ul>' +
        '</div>' +
        '<div>' +
          '<h3 class="footer-heading">Students</h3>' +
          '<ul class="footer-list">' +
            '<li>Ommefarwa (1100761)</li>' +
            '<li>Islam El Rashid (1101604)</li>' +
            '<li>Eman Abdul Sattar (1088952)</li>' +
          '</ul>' +
        '</div>' +
        '<div>' +
          '<h3 class="footer-heading">Contact Us</h3>' +
          '<ul class="footer-list">' +
            '<li><a href="tel:+97125550148" class="footer-contact-link">' + drawSmallIcon('phone', 'small-icon') + '<span>+971 2 555 0148</span></a></li>' +
            '<li><a href="mailto:hello@kidventure.app" class="footer-contact-link">' + drawSmallIcon('mail', 'small-icon') + '<span>hello@kidventure.app</span></a></li>' +
          '</ul>' +
        '</div>' +
        '<div>' +
          '<h3 class="footer-heading">Follow Us</h3>' +
          '<div class="footer-social-links">' +
            '<a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" class="social-button" aria-label="Facebook">' + drawSmallIcon('facebook', 'small-icon') + '</a>' +
            '<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" class="social-button" aria-label="Instagram">' + drawSmallIcon('instagram', 'small-icon') + '</a>' +
            '<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="social-button" aria-label="Twitter">' + drawSmallIcon('twitter', 'small-icon') + '</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="footer-bottom">' +
        '<p>&copy; 2026 Kidventure. All rights reserved.</p>' +
        '<p>SWE 401 - Student project, Abu Dhabi University</p>' +
      '</div>' +
    '</div>';

  showOwl(document.getElementById('footer-owl-box'), { variant: 'mini', interactive: false });

  var footerPrivacyButton = document.getElementById('footer-privacy-btn');
  if (footerPrivacyButton) {
    footerPrivacyButton.onclick = openPrivacyPanel;
  }
}

// Draws the slide-out privacy and child safety panel on the right side of the screen
function drawPrivacyPanel() {
  var panelBox = document.getElementById('privacy-panel');
  if (!panelBox) {
    panelBox = document.createElement('div');
    panelBox.id = 'privacy-panel';
    document.body.appendChild(panelBox);
  }

  if (!privacyPanelOpen) {
    panelBox.innerHTML =
      '<button type="button" id="open-privacy-tab-btn" class="privacy-side-button">' +
        drawSmallIcon('chevron-left', 'small-icon') +
        drawSmallIcon('shield-check', 'medium-icon') +
        '<span>Privacy</span>' +
      '</button>';
    document.getElementById('open-privacy-tab-btn').onclick = openPrivacyPanel;
    return;
  }

  panelBox.innerHTML =
    '<div id="privacy-background" class="privacy-background"></div>' +
    '<aside class="privacy-panel">' +
      '<div class="privacy-panel-header">' +
        '<div>' +
          '<h2 class="privacy-panel-title">Privacy &amp; Safety</h2>' +
          '<p class="privacy-panel-subtitle">Built for children, trusted by adults</p>' +
        '</div>' +
        '<button type="button" id="close-privacy-x-btn" class="close-circle-button" aria-label="Close">' +
          drawSmallIcon('x', 'medium-icon') +
        '</button>' +
      '</div>' +
      '<div class="privacy-panel-body">' +
        '<div class="privacy-promise-card">' +
          '<div id="privacy-owl-box"></div>' +
          '<p>Hoot\'s promise: What happens in your home stays in your home.</p>' +
        '</div>' +
        '<div class="privacy-info-card"><h3>No Photos Saved</h3><p>When you show objects to invent a game, photos are never stored or shared.</p></div>' +
        '<div class="privacy-info-card"><h3>No Voice Recordings Stored</h3><p>Voice prompts are never recorded, saved, or used to build ad profiles.</p></div>' +
        '<div class="privacy-info-card"><h3>Minimal Account Info</h3><p>Only a playful nickname, age group (6 to 8, 9 to 10, or 11 to 12), and completed adventure log are kept.</p></div>' +
        '<div class="privacy-info-card"><h3>Adult Control Anytime</h3><p>Parents or educators manage the account and can delete all data at any time.</p></div>' +
      '</div>' +
      '<div class="privacy-panel-footer">' +
        '<button type="button" id="close-privacy-done-btn" class="button button-yellow button-wide">Got It!</button>' +
      '</div>' +
    '</aside>';

  showOwl(document.getElementById('privacy-owl-box'), { variant: 'mini', interactive: false });

  document.getElementById('privacy-background').onclick = closePrivacyPanel;
  document.getElementById('close-privacy-x-btn').onclick = closePrivacyPanel;
  document.getElementById('close-privacy-done-btn').onclick = closePrivacyPanel;
}

// Loads the top bar, bottom footer, skip link, and privacy panel when a page opens
function loadHeaderAndFooter(pageName) {
  activePageName = pageName || 'home';
  var skipLinkBox = document.getElementById('skip-link');
  if (skipLinkBox) {
    skipLinkBox.outerHTML = '<a href="#main-content" class="skip-link">Skip to main content</a>';
  }
  drawHeader();
  drawFooter();
  drawPrivacyPanel();
}
