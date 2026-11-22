# Kidventure

SWE 401 Software Engineering Project, Abu Dhabi University (Fall 2026)  
GitHub Repository: https://github.com/emanab-sattar/Kidventure-

## Team Members

* **Ommefarwa (1100761)** 
* **Islam El Rashid (1101604)**
* **Eman Abdul Sattar (1088952)**

## Problem

Children aged 6 to 12 spend too much time passively staring at screens instead of playing, building, and solving problems in the real world. Kidventure turns short screen moments into safe, real-world games and building challenges using everyday things around the house, without storing personal child data.

## Key Features

* **AI Game Inventor (`game-inventor.html`):** Children upload or take up to 3 photos of everyday objects (or type/speak ideas) to get a custom offline game made for their age group, with an option to change the rules.
* **AI Young Inventors Lab (`young-inventors.html`):** Live AI creates a real-world building challenge for the child's age group. Kids build offline, share up to 3 photos and an explanation, receive mentor feedback from Hoot the Owl, and send test updates.
* **Career Quest (`career-quest.html`):** Children pick a career (Doctor, Engineer, Astronaut, or Scientist) and play a 2-scene interactive story with branching choices and optional notes.
* **Break the Bricks! Waiting Game (`adventures.js`):** A built-in canvas mini-game that keeps kids entertained with no ads while the AI prepares their game or challenge.
* **Adult-Managed Accounts & Safety Checks (`register.html`, `login.html`, `forgot-password.html`, `profile.html`):** Parents or educators manage accounts with 8+ character passwords and any changes to the profile are password-protected.
* **Per-User Progress & Activity History (`progress.html`):** Saves completed missions under each username (so logging out hides all saved progress), tracks five skills (Think, Create, Move, Team Up, Feel & Grow), and opens a detail popup when clicking any finished mission without saving photos or voice recordings.

## Technologies

* **HTML5, CSS3, and Plain JavaScript:** 
* **Browser Storage (`localStorage` and `sessionStorage`):** 
* **Vercel Serverless Function (`api/generate.js`):** 
* **Google Gemini and Groq APIs:** 

## Prerequisites

* An up-to date web browser (Google Chrome, Microsoft Edge, or Safari) with JavaScript turned on
* An internet connection (for Google Fonts and the live AI backend)
* Optional (only for camera/voice testing): permission for browser camera and microphone access

## Installation

1. Download or clone the repository: https://github.com/emanab-sattar/Kidventure-.git
  
2. Keep all 16 HTML, CSS, and JS files together with the `images/` folder in the same project directory.

## Configuration

* **Frontend:** `adventures.js` is already set up to call the live AI endpoint at `https://kidventure-three.vercel.app/api/generate`, so no keys or code edits are needed to test the site.
* **Backend (only if deploying your own copy of `api/generate.js` on Vercel):** Add `GEMINI_API_KEY` and `GROQ_API_KEY` inside your Vercel project's **Environment Variables** settings.

## How to Run

1. Open the project folder and double-click `index.html` to launch the website in your browser.

## How to Test

1. **Accounts & Logout Privacy:**
   * Open `register.html` and test invalid inputs (such as a short password or an email as a username) to confirm red error messages appear.
   * Create an account, finish any activity, then click **Log out** and open `progress.html` to confirm saved missions are hidden until you log back in.
2. **AI Game Inventor (`game-inventor.html`):**
   * Upload 1 to 3 photos (or pick the sample picture), type optional notes, and click **Create My Game**.
   * Test **Modify Game**, click **I Played This Offline!**, and check that unsafe words (like `knife`) or phone numbers are blocked.
3. **AI Young Inventors Lab (`young-inventors.html`):**
   * Play **Break the Bricks!** while the challenge loads, upload a photo or write an explanation, submit to view Hoot's feedback, send a test reply, and click **I Built This Offline!**.
4. **Career Quest (`career-quest.html`):**
   * Pick a career, choose answers for Scene 1 and Scene 2 (with optional notes), view the mission outcome, and click **Complete Mission**.
5. **Activity History & Profile (`progress.html` & `profile.html`):**
   * On `progress.html`, click each completed mission to confirm the popup displays the full saved details.
   * On `profile.html`, test changing the nickname or avatar and deleting the account using your password.
