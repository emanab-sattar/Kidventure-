// Key name used to save all created accounts on this browser
var PROFILES_STORAGE_KEY = 'kv_profiles';

// Six friendly animal characters parents can pick for their child
var AVATAR_LIST = [
  { id: 'owl', label: 'Owl', bgClass: 'avatar-bg-owl' },
  { id: 'bunny', label: 'Bunny', bgClass: 'avatar-bg-bunny' },
  { id: 'fox', label: 'Fox', bgClass: 'avatar-bg-fox' },
  { id: 'bear', label: 'Bear', bgClass: 'avatar-bg-bear' },
  { id: 'cat', label: 'Cat', bgClass: 'avatar-bg-cat' },
  { id: 'panda', label: 'Panda', bgClass: 'avatar-bg-panda' }
];

// Three simple security questions for adults in case they forget their password
var SECURITY_QUESTIONS = [
  'What city were you born in?',
  "What was your first pet's name?",
  "What's your mother's name?"
];

// Gets all saved user accounts stored on this browser
function getAllProfiles() {
  try {
    var savedText = localStorage.getItem(PROFILES_STORAGE_KEY);
    return savedText ? JSON.parse(savedText) : {};
  } catch (error) {
    return {};
  }
}

// Saves a full user account both as the active login and inside the saved accounts list
function saveFullAccount(user) {
  saveUser(user);
  try {
    var profiles = getAllProfiles();
    if (user && user.username) {
      profiles[user.username.toLowerCase()] = user;
      localStorage.setItem(PROFILES_STORAGE_KEY, JSON.stringify(profiles));
    }
  } catch (error) {}
}

// Finds a saved user account by typing their username
function findProfileByUsername(username) {
  var cleanUsername = String(username || '').trim().toLowerCase();
  if (!cleanUsername) return null;
  var profiles = getAllProfiles();
  return profiles[cleanUsername] || null;
}

// Updates a user's password after they answer their security question
function updatePasswordForUsername(username, newPassword) {
  var cleanUsername = String(username || '').trim().toLowerCase();
  if (!cleanUsername) return false;
  try {
    var profiles = getAllProfiles();
    var account = profiles[cleanUsername];
    if (!account) return false;
    account.password = newPassword;
    profiles[cleanUsername] = account;
    localStorage.setItem(PROFILES_STORAGE_KEY, JSON.stringify(profiles));

    var currentUser = getCurrentUser();
    if (currentUser && currentUser.username && currentUser.username.toLowerCase() === cleanUsername) {
      currentUser.password = newPassword;
      saveUser(currentUser);
    }
    return true;
  } catch (error) {
    return false;
  }
}

// Deletes a user's account and clears all saved adventures from this browser
function deleteProfileByUsername(username) {
  clearAdventures();
  clearCurrentUser();
  clearActivityChoice();
  try {
    if (username) {
      var cleanName = String(username).trim().toLowerCase();
      var profiles = getAllProfiles();
      delete profiles[cleanName];
      localStorage.setItem(PROFILES_STORAGE_KEY, JSON.stringify(profiles));
      localStorage.removeItem(ADVENTURES_STORAGE_KEY + '_' + cleanName);
    }
  } catch (error) {}
}

// Helper: checks if one letter is inside an allowed text list
function isLetterInList(letter, allowedList) {
  return allowedList.indexOf(letter) !== -1;
}

// Helper: checks if a word looks like a website name (like .com or www. or http://)
function looksLikeWebsite(text) {
  var lower = text.toLowerCase();
  if (lower.indexOf('http://') === 0 || lower.indexOf('https://') === 0 || lower.indexOf('www.') === 0) {
    return true;
  }
  var letters = 'abcdefghijklmnopqrstuvwxyz';
  for (var i = 0; i < lower.length - 2; i++) {
    if (lower[i] === '.' && isLetterInList(lower[i + 1], letters) && isLetterInList(lower[i + 2], letters)) {
      return true;
    }
  }
  return false;
}

// Checks that the username is at least 4 letters long and is not an email or website
function checkUsernameError(rawUsername) {
  var username = String(rawUsername || '').trim();
  var hasAtSymbol = username.indexOf('@') !== -1;

  if (hasAtSymbol || looksLikeWebsite(username)) {
    return 'Do not enter an email address or website domain (like @gmail.com or .com). Create a plain username without "@" or domains instead (for example: sunny_kid).';
  }
  if (username.length < 4) {
    return 'Username must be at least 4 characters long (for example: sunny_kid).';
  }

  var allowedChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-';
  for (var i = 0; i < username.length; i++) {
    if (!isLetterInList(username[i], allowedChars)) {
      return 'Use only letters, numbers, underscores (_), or hyphens (-) for your username. Emails, spaces, and "@" are not allowed.';
    }
  }
  return '';
}

// Checks that the password has at least 5 characters, 1 number, and 1 special symbol
function checkPasswordError(rawPassword) {
  var password = String(rawPassword || '');
  var numbers = '0123456789';
  var lettersAndSpaces = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 \t\n';
  var hasNumber = false;
  var hasSymbol = false;

  for (var i = 0; i < password.length; i++) {
    var ch = password[i];
    if (isLetterInList(ch, numbers)) {
      hasNumber = true;
    } else if (!isLetterInList(ch, lettersAndSpaces)) {
      hasSymbol = true;
    }
  }

  if (password.length < 8 || !hasNumber || !hasSymbol) {
    return 'Password must be at least 8 characters and include at least 1 number and 1 special character.';
  }
  return '';
}

// Checks that a child's adventure nickname is 2 to 20 safe characters
function checkNicknameError(rawNickname) {
  var nickname = String(rawNickname || '').trim();
  if (nickname.length < 2) {
    return 'Please choose an adventure nickname with at least 2 characters.';
  }
  if (nickname.length > 20) {
    return 'Please keep the adventure nickname under 20 characters.';
  }

  var allowedChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 _-';
  for (var i = 0; i < nickname.length; i++) {
    if (!isLetterInList(nickname[i], allowedChars)) {
      return 'Use only letters, numbers, spaces, hyphens, or underscores for your nickname.';
    }
  }
  return '';
}

// Shows the chosen animal character picture at the requested pixel size
function buildAvatarSvg(animalName, sizePixels, isBlinking) {
  var allowedAnimals = ['owl', 'bunny', 'fox', 'bear', 'cat', 'panda'];
  var safeAnimal = allowedAnimals.indexOf(animalName) !== -1 ? animalName : 'owl';
  var size = sizePixels || 64;
  var imageFile = isBlinking
    ? './images/avatar-' + safeAnimal + '-blink.svg'
    : './images/avatar-' + safeAnimal + '.svg';
  return '<img src="' + imageFile + '" alt="' + safeAnimal + ' avatar" width="' + size + '" height="' + size + '" class="avatar-picture" />';
}

// Places an animal character picture inside a box and makes it blink every few seconds
function showAvatar(box, animalName, sizePixels, shouldBlink) {
  if (!box) return;
  if (box._blinkTimer) {
    clearTimeout(box._blinkTimer);
    box._blinkTimer = null;
  }
  if (box._unblinkTimer) {
    clearTimeout(box._unblinkTimer);
    box._unblinkTimer = null;
  }

  var currentAnimal = animalName || 'owl';
  var size = sizePixels || 64;
  var blinkEnabled = shouldBlink !== false;
  var isBlinking = false;

  function drawAvatar() {
    box.innerHTML = buildAvatarSvg(currentAnimal, size, isBlinking);
  }

  function blinkEveryFewSeconds() {
    if (!blinkEnabled) return;
    box._blinkTimer = setTimeout(function () {
      if (!document.body.contains(box)) return;
      isBlinking = true;
      drawAvatar();
      box._unblinkTimer = setTimeout(function () {
        if (!document.body.contains(box)) return;
        isBlinking = false;
        drawAvatar();
        blinkEveryFewSeconds();
      }, 150);
    }, 4200);
  }

  drawAvatar();
  blinkEveryFewSeconds();
}
