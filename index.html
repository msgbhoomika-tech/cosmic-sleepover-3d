<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Cosmic Sleepover 3D — Spirit Bots & Space Explorer</title>
  <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@500;700&family=VT323&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
</head>
<body>

  <!-- 1. CUTE ROBOT INTRO POPUP -->
  <div id="intro-overlay" class="overlay">
    <div class="intro-card">
      <div class="antenna-dot"></div>
      <div class="cute-bot-avatar">
        <div class="bot-head">
          <div class="bot-ear left"></div>
          <div class="bot-ear right"></div>
          <div class="bot-visor">
            <div class="bot-eye left"></div>
            <div class="bot-eye right"></div>
            <div class="bot-blush left"></div>
            <div class="bot-blush right"></div>
            <div class="bot-mouth"></div>
          </div>
        </div>
      </div>
      <div class="badge">✨ TRANSMISSION INCOMING ✨</div>
      <h1 id="intro-title">BEEP-BOOP! Hi Space Explorer!</h1>
      <p id="intro-desc">
        I'm <strong>ASTRO-PIP</strong>! NASA left behind sleepy rovers, moon buggies, and deep-space probes across the galaxy. 
        Wake them up to unlock their magical <strong>Space Spirit Animals</strong>, test planet gravity, build your own 13th bot, and explore real NASA data!
      </p>
      <button id="start-btn" class="glow-btn" onclick="launchSpace()">🚀 YES, LET'S LAUNCH INTO SPACE!</button>
    </div>
  </div>

  <!-- 2. 3D SPACE CANVAS -->
  <canvas id="space-canvas"></canvas>

  <!-- 3. FLOATING 3D PLANET LABELS (Galaxy Map Mode) -->
  <div id="label-moon" class="planet-tag hidden">🌙 THE MOON<br><span>Click to Explore (4 Bots)</span></div>
  <div id="label-mars" class="planet-tag hidden">🔴 MARS<br><span>Click to Explore (4 Bots)</span></div>
  <div id="label-deepspace" class="planet-tag hidden">🌌 DEEP SPACE<br><span>Click to Explore (4 Bots)</span></div>

  <!-- 4. FLOATING SLEEPY BOT LABELS (Inside Zone Mode) -->
  <div id="bot-labels-container"></div>

  <!-- 5. CUSTOM TOOL CURSOR FOLLOWER -->
  <div id="tool-cursor" class="hidden">🧹</div>

  <!-- 5B. FLOATING "OG PIC" REAL NASA PHOTO CARD + SIZE COMPARISON + LIVE TELEMETRY -->
  <div id="og-pic-wrapper" class="og-pic-wrapper hidden">
    <div class="og-pic-card">
      <div class="og-pic-tape"></div>
      <div class="og-pic-header">📸 OG PIC • REAL NASA PHOTO</div>
      <div class="og-pic-img-box">
        <img id="og-pic-img" src="" alt="Real NASA Spacecraft Photo" />
      </div>
      <div class="og-pic-caption" id="og-pic-caption">Real NASA Spacecraft</div>
      <div class="telemetry-strip" id="telemetry-strip">📡 384,400 km from Earth</div>
      <button class="size-toggle-btn" onclick="toggleSizeBox()">📏 How Big Am I?</button>
    </div>

    <!-- Real-World Size Comparison Drawer -->
    <div id="size-compare-box" class="size-compare-box hidden">
      <div class="size-visual" id="size-visual-emojis">🧒 🆚 🚁</div>
      <div class="size-text" id="size-compare-text">Size of a tissue box!</div>
    </div>

    <svg class="og-tether-svg" viewBox="0 0 180 140">
      <line x1="20" y1="10" x2="165" y2="125" stroke="#7cf3ff" stroke-width="4" stroke-dasharray="10 8" stroke-linecap="round" />
      <circle cx="20" cy="10" r="6" fill="#ffd86b" />
      <circle cx="165" cy="125" r="7" fill="#ff5ea8" />
    </svg>
  </div>

  <!-- 5C. SHOOTING STAR WISH / TELEMETRY TOAST -->
  <div id="wish-toast" class="wish-toast hidden">🌠 Shooting Star Wish!</div>

  <!-- 6. TOP & BOTTOM HUD CONTROLS -->
  <div id="hud" class="hidden">
    <div class="top-bar">
      <button id="back-map-btn" class="mini-btn hidden" onclick="returnToGalaxyMap()">🌌 Galaxy Map</button>
      <div class="hud-title" id="hud-zone-title">🛸 COSMIC SLEEPOVER 3D</div>
      <button class="mini-btn" onclick="openBuilderModal()" title="Design your own 13th custom NASA rover!">🛠️ Build 13th Bot</button>
      <button id="weather-btn" class="mini-btn hidden" onclick="toggleZoneWeather()">🌪️ Weather FX: OFF</button>
      <button class="mini-btn" onclick="triggerWishEvent()">🌠 Star Fact</button>
      <button id="passport-btn" class="passport-pill" onclick="openPassportModal()">🏅 <span id="awakened-count">0</span>/12 • ⭐ <span id="stars-count">0</span></button>
      <button id="lang-btn" class="mini-btn" onclick="cycleLanguage()">🌐 EN</button>
      <button id="a11y-btn" class="mini-btn" onclick="toggleAccessibility()">♿ Easy Read</button>
      <button id="audio-toggle-btn" class="mini-btn" onclick="toggleSpaceAudio()">🔊</button>
    </div>

    <!-- Interactive Solar System Timeline Slider (Galaxy Map Mode) -->
    <div class="timeline-bar" id="timeline-bar">
      <span>🕰️ Mission Era Filter: <strong id="timeline-year-label">ALL YEARS (1967 – 2026)</strong></span>
      <input type="range" id="timeline-slider" min="1965" max="2026" value="2026" oninput="filterByTimeline(this.value)" />
      <button class="mini-btn" onclick="resetTimelineFilter()">Show All</button>
    </div>

    <!-- On-Screen Direction Controls (Galaxy Map Mode) -->
    <div class="nav-pad" id="nav-pad">
      <button class="dir-btn" id="btn-up" title="Fly Up (W / Up Arrow)">▲</button>
      <div class="nav-middle">
        <button class="dir-btn" id="btn-left" title="Fly Left (A / Left Arrow)">◀</button>
        <button class="dir-btn center-btn" id="btn-reset" title="Reset View">🎯</button>
        <button class="dir-btn" id="btn-right" title="Fly Right (D / Right Arrow)">▶</button>
      </div>
      <button class="dir-btn" id="btn-down" title="Fly Down (S / Down Arrow)">▼</button>
      <div class="nav-label">ARROW KEYS, DRAG, OR TAP ARROWS</div>
    </div>
  </div>

  <!-- 7. STEP-BY-STEP CARE PANEL (Shown when zoomed into a sleeping bot) -->
  <div id="care-panel" class="care-panel hidden">
    <div class="care-header">
      <div>
        <span class="sleep-badge" id="bot-status-badge">💤 SLEEPING SOUNDLY</span>
        <h2 id="care-bot-name">Apollo 11 Eagle</h2>
      </div>
      <div class="care-header-actions">
        <button class="mini-btn" onclick="testGravityBounce()" title="Drop & bounce bot under planet gravity!">🪐 Test Gravity</button>
        <button id="rover-cam-btn" class="mini-btn" onclick="toggleRoverCam()">👁️ Rover Cam: OFF</button>
        <button id="spirit-toggle-btn" class="mini-btn hidden" onclick="toggleSpiritForm()">🦊 Spirit: ON</button>
        <button id="reopen-story-btn" class="mini-btn hidden" onclick="reopenCurrentStory()">📖 Story & AI</button>
        <button class="mini-btn" onclick="exitBotFocus()">🔙 Floating Bots</button>
      </div>
    </div>

    <div class="rotate-tip" id="gravity-readout">🔄 Drag left/right or scroll wheel to inspect front, back & sides • 🧭 Cyan Arrow points to Earth!</div>

    <!-- Progress Bar -->
    <div class="progress-wrap">
      <div class="progress-label" id="step-instruction">Step 1: Pick up the Dust Brush and scrub the dirt off the bot!</div>
      <div class="progress-bar-bg">
        <div class="progress-bar-fill" id="care-progress-fill" style="width: 0%;"></div>
      </div>
    </div>

    <!-- Sequential Care Tools (Unlocked One by One) -->
    <div class="tools-row">
      <button class="tool-btn active-step" id="tool-brush" onclick="selectTool('brush')">
        <span class="tool-icon">🧹</span>
        <strong>1. Space Brush</strong>
        <small id="brush-sub">Click & scrub bot!</small>
      </button>

      <button class="tool-btn locked" id="tool-food" onclick="selectTool('food')" disabled>
        <span class="tool-icon" id="food-icon">🔋</span>
        <strong id="food-name">2. Science Snack</strong>
        <small id="food-sub">Locked (Clean first)</small>
      </button>

      <button class="tool-btn locked" id="tool-wand" onclick="selectTool('wand')" disabled>
        <span class="tool-icon">🪄</span>
        <strong>3. Boop Wand</strong>
        <small id="wand-sub">Locked (Feed first)</small>
      </button>
    </div>
  </div>

  <!-- 8. AWAKENED STORY, SPIRIT ANIMAL, AI Q&A, QUIZ, POSTCARD, NSSDCA DATA & NASA LINK MODAL -->
  <div id="story-modal" class="overlay hidden">
    <div class="story-card">
      <div class="spirit-banner" id="story-spirit-badge">✨ SPIRIT ANIMAL UNLOCKED! ✨</div>
      <h2 id="story-bot-title">Apollo 11 Eagle</h2>

      <!-- Tab Switcher: Cute Story vs Real NASA NSSDCA Data -->
      <div class="modal-tabs">
        <button class="tab-pill active" id="tab-story-btn" onclick="switchStoryTab('story')">📖 Cute Spirit Story & AI</button>
        <button class="tab-pill" id="tab-data-btn" onclick="switchStoryTab('data')">📊 Real NASA Data (NSSDCA)</button>
      </div>

      <!-- TAB 1: CUTE STORY, ASK ANYTHING AI & GOLD STAR QUIZ -->
      <div id="tab-content-story">
        <div class="story-quote" id="story-thankyou">
          "Yaaawn... BEEP-BOOP! Thank you so much for waking me up!"
        </div>
        <p id="story-about">
          Story goes here...
        </p>

        <!-- Interactive Ask-the-Bot Chips + Live Custom Question Box -->
        <div class="ask-bot-box">
          <div class="ask-label">💬 Ask me anything about my mission or click a quick chip:</div>
          <div class="ask-chips" id="ask-chips-row">
            <button class="chip-btn" onclick="askBotQuestion('scary')">😱 Scariest moment?</button>
            <button class="chip-btn" onclick="askBotQuestion('view')">🔭 What do you see now?</button>
            <button class="chip-btn" onclick="askBotQuestion('spirit')">🦊 Why this Spirit Animal?</button>
          </div>
          <div class="ai-input-row">
            <input type="text" id="custom-ai-question" placeholder="Type any space question (e.g. Is there water on Mars?)..." />
            <button class="mini-btn" onclick="askCustomAiQuestion()">🤖 Ask</button>
          </div>
          <div class="ask-answer hidden" id="ask-answer-box"></div>
        </div>

        <!-- 1-Question Mission Memory Gold Star Quiz -->
        <div class="quiz-box" id="quiz-box">
          <div class="quiz-header">
            <span>🌟 Mission Memory Bonus — Earn a Gold Star!</span>
            <span id="quiz-star-badge" class="star-status">☆ Not Earned Yet</span>
          </div>
          <div class="quiz-question" id="quiz-question-text">Question goes here?</div>
          <div class="quiz-options" id="quiz-options-row"></div>
          <div class="quiz-feedback hidden" id="quiz-feedback-text"></div>
        </div>
      </div>

      <!-- TAB 2: REAL NASA NSSDCA SCIENCE FILE -->
      <div id="tab-content-data" class="hidden">
        <div class="nssdca-grid">
          <div class="nssdca-item"><span>NSSDCA Catalog ID</span><strong id="data-nssdca-id">1969-059C</strong></div>
          <div class="nssdca-item"><span>Launch / Arrival</span><strong id="data-launch">July 16, 1969</strong></div>
          <div class="nssdca-item"><span>Cosmic Location</span><strong id="data-location">Sea of Tranquility, Moon</strong></div>
          <div class="nssdca-item"><span>Mission Duration</span><strong id="data-duration">21h 36m on Surface</strong></div>
          <div class="nssdca-item full-span"><span>Key Scientific Discovery</span><strong id="data-discovery">First human lunar landing & sample return</strong></div>
          <div class="nssdca-item full-span"><span>Current Status</span><strong id="data-status">Resting peacefully on the Moon</strong></div>
        </div>
      </div>

      <!-- CUTE BOT LOOKING RIGHT AT THE OFFICIAL NASA LINK -->
      <div class="nasa-guide-box">
        <div class="mini-look-bot" title="Look right at my official NASA file!">
          <div class="mini-bot-antenna"></div>
          <div class="mini-bot-head">
            <div class="mini-bot-visor">
              <div class="mini-bot-eye look-right"></div>
              <div class="mini-bot-eye look-right"></div>
              <div class="mini-bot-smile"></div>
            </div>
          </div>
          <div class="pointing-hand">👉</div>
        </div>

        <div class="nasa-link-content">
          <div class="nasa-prompt">Want to read my real science logs & NASA mission records?</div>
          <a id="nasa-official-link" href="https://www.nasa.gov/" target="_blank" rel="noopener noreferrer" class="nasa-btn">
            🛰️ Official NASA Page ➔
          </a>
        </div>
      </div>

      <div class="story-actions">
        <button class="mini-btn" onclick="replayBotVoice()">🔊 Voice</button>
        <button class="mini-btn" onclick="playHistoricNasaAudio()">📻 NASA Radio Audio</button>
        <button class="mini-btn" onclick="openSelfieModal()">📸 Space Selfie</button>
        <button class="mini-btn" onclick="downloadBotPostcard()">💌 Postcard</button>
        <button class="glow-btn" onclick="closeStoryAndKeepExploring()">🌟 Meet More Bots</button>
      </div>
    </div>
  </div>

  <!-- 9. COSMIC GUARDIAN STICKER PASSPORT, CERTIFICATE & TEACHER WORKSHEET MODAL -->
  <div id="passport-modal" class="overlay hidden">
    <div class="passport-card">
      <div class="badge">🏅 COSMIC GUARDIAN SANCTUARY PASSPORT</div>
      <h2>Awakened Bots: <span id="passport-total">0</span>/12 • Gold Stars: <span id="passport-stars">0</span>/12 ⭐</h2>
      <p class="passport-sub">Wake up sleepy NASA bots and pass their memory quiz to collect all 12 Spirit Stickers & Gold Stars!</p>

      <div class="sticker-grid" id="sticker-grid"></div>

      <!-- Certificate & Classroom Worksheet Generator -->
      <div class="cert-box">
        <input type="text" id="guardian-name-input" placeholder="Enter Explorer / Student Name..." maxlength="28" />
        <button class="glow-btn" onclick="downloadGuardianCertificate()">📜 Download Certificate</button>
        <button class="mini-btn" onclick="downloadTeacherWorksheet()">🍎 Export Teacher Lesson Sheet</button>
      </div>

      <div class="passport-footer-btns">
        <button class="mini-btn" onclick="closePassportModal()">✖ Close Passport</button>
        <button class="reset-btn" onclick="resetAllProgress()">🗑️ Reset Saved Progress</button>
      </div>
    </div>
  </div>

  <!-- 10. BUILD-YOUR-OWN 13TH CUSTOM ROVER SANDBOX MODAL -->
  <div id="builder-modal" class="overlay hidden">
    <div class="story-card">
      <div class="badge">🛠️ NASA SPACECRAFT DESIGN LAB</div>
      <h2>Build Your Own 13th Spirit Bot!</h2>
      <p>Mix and match spacecraft hardware, pick a destination, and launch your custom 3D bot into space!</p>

      <div class="builder-form">
        <label>
          <span>Bot Name:</span>
          <input type="text" id="custom-bot-name" placeholder="e.g. Astro-Rover X" maxlength="22" />
        </label>
        <label>
          <span>Destination Zone:</span>
          <select id="custom-bot-zone">
            <option value="moon">🌙 The Moon</option>
            <option value="mars">🔴 Mars</option>
            <option value="deepspace">🌌 Deep Space</option>
          </select>
        </label>
        <label>
          <span>Spacecraft Chassis:</span>
          <select id="custom-bot-shape">
            <option value="opportunity_rover">🚗 6-Wheel Mars Rover</option>
            <option value="ingenuity_heli">🚁 Twin-Rotor Mars Helicopter</option>
            <option value="apollo_lander">🏠 Gold Lunar Lander</option>
            <option value="kepler_telescope">🔭 Deep Space Telescope</option>
          </select>
        </label>
        <label>
          <span>Spirit Animal Companion:</span>
          <select id="custom-bot-spirit">
            <option value="hound">🐕 Cosmic Hound</option>
            <option value="rabbit">🐇 Lunar Bunny</option>
            <option value="eagle">🦅 Solar Eagle</option>
            <option value="whale">🐋 Star Whale</option>
          </select>
        </label>
      </div>

      <div class="story-actions" style="margin-top: 14px;">
        <button class="mini-btn" onclick="closeBuilderModal()">✖ Cancel</button>
        <button class="glow-btn" onclick="launchCustom13thBot()">🚀 Launch My Custom 3D Bot!</button>
      </div>
    </div>
  </div>

  <!-- 11. WEBCAM "BOT IN MY ROOM" SPACE SELFIE MODAL -->
  <div id="selfie-modal" class="overlay hidden">
    <div class="story-card">
      <div class="badge">📸 AR SPACE SELFIE BOOTH</div>
      <h2>Snap a Photo with <span id="selfie-bot-name">Your Spirit Bot</span>!</h2>
      <div class="selfie-stage">
        <video id="selfie-video" autoplay playsinline></video>
        <div class="selfie-overlay-badge" id="selfie-overlay-badge">🦅 Golden Lunar Eagle</div>
      </div>
      <div class="story-actions" style="margin-top: 12px;">
        <button class="mini-btn" onclick="closeSelfieModal()">✖ Close Camera</button>
        <button class="glow-btn" onclick="captureAndDownloadSelfie()">📸 Snap & Download Selfie!</button>
      </div>
    </div>
  </div>

  <script>
    function launchSpace() {
      document.getElementById('intro-overlay').classList.add('hidden');
      document.getElementById('hud').classList.remove('hidden');
      document.getElementById('label-moon').classList.remove('hidden');
      document.getElementById('label-mars').classList.remove('hidden');
      document.getElementById('label-deepspace').classList.remove('hidden');
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      if (typeof startAmbientSpacePad === 'function') startAmbientSpacePad();
    }
  </script>
  <script src="space.js"></script>
</body>
</html>