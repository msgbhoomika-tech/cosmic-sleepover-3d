// ==========================================
// 1. DATABASE OF SLEEPY BOTS (ALL 12 NASA SPACECRAFT + TELEMETRY + GRAVITY + AUDIO)
// ==========================================
const BOT_DATABASE = {
  moon: [
    {
      id: 'apollo11',
      zoneLabel: 'The Moon',
      launchYear: 1969,
      gravityRatio: 0.16,
      distanceFromEarth: '384,400 km (1.28 light-sec)',
      radioQuote: "Houston, Tranquility Base here. The Eagle has landed!",
      shape: 'apollo_lander',
      spiritType: 'eagle',
      spiritName: 'Golden Lunar Eagle 🦅',
      spiritEmoji: '🦅',
      name: 'Apollo 11 Eagle Lander',
      nasaSearchQuery: 'Apollo 11 Lunar Module Eagle Moon',
      foodName: 'Solar Photon Pops',
      foodIcon: '☀️',
      bodyColor: 0xffd166,
      accentColor: 0xd9ed92,
      pos: [-7, 2.2, 2],
      sizeEmojis: '🧒 🆚 🏠',
      sizeDesc: '7 meters tall — as tall as a 2-story house!',
      thankYou: "Yaaawn... BEEP-BOOP! Thank you so much for brushing off my moon dust, feeding me warm Solar Photon Pops, and unlocking my Golden Lunar Eagle spirit!",
      about: "I'm the Apollo 11 Lunar Module Eagle! In July 1969, I carried Neil Armstrong and Buzz Aldrin safely onto the Moon's Sea of Tranquility. My gold descent stage still rests peacefully right here!",
      quiz: {
        q: "Where did Apollo 11 Eagle land on the Moon?",
        options: ["Sea of Tranquility", "Olympus Mons", "Tycho Crater"],
        correctIndex: 0
      },
      qa: {
        scary: "When we were descending to the Moon, our computer flashed '1202 Program Alarm' and we had less than 30 seconds of landing fuel left—but Armstrong steered us safely over a boulder field!",
        view: "I see the bright blue Earth hanging motionless in a pitch-black sky above the grey craters of the Sea of Tranquility!",
        spirit: "Just like a Golden Eagle swooping down onto a mountain peak, I glided across the lunar sky and landed softly with the callsign 'The Eagle has landed!'"
      },
      nssdca: {
        id: '1969-059C',
        launch: 'July 16, 1969 (Landed July 20)',
        location: 'Sea of Tranquility, The Moon',
        duration: '21 hours, 36 minutes on surface',
        discovery: 'First human lunar landing & 21.5 kg of Moon rocks returned',
        status: 'Descent stage resting peacefully on the Moon'
      },
      nasaUrl: "https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059C",
      imageUrl: "https://images-assets.nasa.gov/image/as11-40-5927/as11-40-5927~medium.jpg"
    },
    {
      id: 'lrv',
      zoneLabel: 'The Moon',
      launchYear: 1971,
      gravityRatio: 0.16,
      distanceFromEarth: '384,400 km (1.28 light-sec)',
      radioQuote: "Apollo 15 Rover rolling across Hadley Rille at 13 kilometers per hour!",
      shape: 'moon_buggy',
      spiritType: 'rabbit',
      spiritName: 'Cosmic Moon Bunny 🐇',
      spiritEmoji: '🐇',
      name: 'Lunar Roving Vehicle',
      nasaSearchQuery: 'Apollo 15 Lunar Roving Vehicle',
      foodName: 'Silver-Zinc Juice',
      foodIcon: '🔋',
      bodyColor: 0xf8f9fa,
      accentColor: 0xffb703,
      pos: [7, 2.5, 1],
      sizeEmojis: '🧒 🆚 🚙',
      sizeDesc: '3 meters long — about the size of a compact golf buggy!',
      thankYou: "Vroom-beep! My wire-mesh wheels feel bouncy again! Thanks for the Silver-Zinc Juice boost and awakening my Cosmic Moon Bunny spirit!",
      about: "I'm NASA's Moon Buggy! Astronauts drove me across lunar craters during Apollo 15, 16, and 17 so they could collect ancient Moon rocks from miles away!",
      quiz: {
        q: "How many Apollo missions drove a Lunar Roving Vehicle?",
        options: ["1 Mission", "3 Missions", "7 Missions"],
        correctIndex: 1
      },
      qa: {
        scary: "On Apollo 17, a hammer accidentally knocked off my rear fender, showering astronauts with sticky grey moon dust until they taped spare maps onto me!",
        view: "I'm parked near Hadley Rille and Taurus-Littrow, watching my dusty tire tracks stay preserved in the Moon's soil for millions of years!",
        spirit: "In Moon gravity (1/6th of Earth's), every bump over a crater made me hop like a joyful Cosmic Moon Bunny!"
      },
      nssdca: {
        id: '1971-063D',
        launch: 'July 26, 1971 (Apollo 15)',
        location: 'Hadley-Apennine, The Moon',
        duration: '3 days of active lunar surface drives',
        discovery: 'Enabled discovery of the 4.1-billion-year-old Genesis Rock',
        status: 'Parked on the lunar surface'
      },
      nasaUrl: "https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063D",
      imageUrl: "https://images-assets.nasa.gov/image/as15-88-11901/as15-88-11901~medium.jpg"
    },
    {
      id: 'alsep',
      zoneLabel: 'The Moon',
      launchYear: 1969,
      gravityRatio: 0.16,
      distanceFromEarth: '384,400 km (1.28 light-sec)',
      radioQuote: "Laser return pulse locked! Round-trip light travel time: 2.56 seconds.",
      shape: 'alsep_mirror',
      spiritType: 'firefly',
      spiritName: 'Starlight Firefly ✨',
      spiritEmoji: '🪲',
      name: 'ALSEP Laser Mirror',
      nasaSearchQuery: 'Apollo 11 Laser Ranging Retroreflector',
      foodName: 'Starlight Beam Drops',
      foodIcon: '✨',
      bodyColor: 0x90e0ef,
      accentColor: 0xff9f1c,
      pos: [-5.5, -2.5, 3],
      sizeEmojis: '🧒 🆚 💼',
      sizeDesc: '46 cm wide — the size of a carry-on suitcase!',
      thankYou: "Ping! Ping! My retroreflector mirrors are sparkling! Thank you for cleaning me and awakening my Starlight Firefly spirit!",
      about: "I'm the Apollo Lunar Surface Experiments Package! Scientists on Earth still shoot laser beams at my mirrors today to measure how the Moon slowly drifts 3.8 cm farther from Earth every year!",
      quiz: {
        q: "How much farther does the Moon drift from Earth each year?",
        options: ["3.8 centimeters", "3.8 kilometers", "0 centimeters"],
        correctIndex: 0
      },
      qa: {
        scary: "Surviving 2-week lunar nights where temperatures plunge to minus 173 degrees Celsius without any heaters!",
        view: "Every few weeks, I catch bright green laser pulses beamed all the way from observatories on Earth and bounce them right back!",
        spirit: "Because I flash green laser light back across 384,400 km of dark space, I'm a glowing Starlight Firefly!"
      },
      nssdca: {
        id: '1969-059C-LRRR',
        launch: 'July 20, 1969',
        location: 'Mare Tranquillitatis, The Moon',
        duration: '57+ years and still active!',
        discovery: 'Measured Moon recession rate (3.8 cm/yr) & tested General Relativity',
        status: 'STILL ACTIVE! Bouncing Earth lasers today'
      },
      nasaUrl: "https://science.nasa.gov/mission/apollo/apollo-lunar-surface-experiments-package/",
      imageUrl: "https://images-assets.nasa.gov/image/as11-40-5952/as11-40-5952~medium.jpg"
    },
    {
      id: 'surveyor3',
      zoneLabel: 'The Moon',
      launchYear: 1967,
      gravityRatio: 0.16,
      distanceFromEarth: '384,400 km (1.28 light-sec)',
      radioQuote: "Surface sampler trench complete. Lunar soil bearing strength confirmed!",
      shape: 'surveyor_tripod',
      spiritType: 'frog',
      spiritName: 'Lunar Leap-Frog 🐸',
      spiritEmoji: '🐸',
      name: 'Surveyor 3 Hopper',
      nasaSearchQuery: 'Surveyor 3 Apollo 12 Moon',
      foodName: 'Regolith Crunchies',
      foodIcon: '🍪',
      bodyColor: 0xe0aaff,
      accentColor: 0x06d6a0,
      pos: [6, -2.2, 2.5],
      sizeEmojis: '🧒 🆚 🦒',
      sizeDesc: '3.3 meters tall — taller than a basketball hoop!',
      thankYou: "Boing-boing! What a cozy nap! Thanks for the Regolith Crunchies and awakening my Lunar Leap-Frog spirit!",
      about: "I landed on the Moon in 1967 and dug little trenches with my robotic scoop arm to prove the lunar soil was firm enough for astronauts to walk on safely!",
      quiz: {
        q: "Which Apollo astronauts later landed right next to Surveyor 3?",
        options: ["Apollo 8", "Apollo 12", "Apollo 17"],
        correctIndex: 1
      },
      qa: {
        scary: "When I landed, my engines didn't shut off right away so I bounced twice across the crater slope before settling down!",
        view: "Two years after I landed, Apollo 12 astronauts Pete Conrad and Alan Bean landed right beside me and came over to say hi!",
        spirit: "With my three springy tripod legs and two surprise bounces on landing, I'm the Moon's first Leap-Frog!"
      },
      nssdca: {
        id: '1967-035A',
        launch: 'April 17, 1967',
        location: 'Oceanus Procellarum, The Moon',
        duration: '14 Earth days of active surface operations',
        discovery: 'Confirmed lunar soil could support Apollo astronaut landings',
        status: 'Visited by Apollo 12 crew in Nov 1969'
      },
      nasaUrl: "https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1967-035A",
      imageUrl: "https://images-assets.nasa.gov/image/as12-48-7136/as12-48-7136~medium.jpg"
    }
  ],
  mars: [
    {
      id: 'ingenuity',
      zoneLabel: 'Mars',
      launchYear: 2020,
      gravityRatio: 0.38,
      distanceFromEarth: '225,000,000 km (12.5 light-min)',
      radioQuote: "Altimeter data confirms Ingenuity has performed its first flight on Mars!",
      shape: 'ingenuity_heli',
      spiritType: 'hummingbird',
      spiritName: 'Martian Hummingbird 🐦',
      spiritEmoji: '🐦',
      name: 'Ingenuity Helicopter',
      nasaSearchQuery: 'Ingenuity Mars Helicopter flight',
      foodName: 'Thin-Air Fizz Fuel',
      foodIcon: '🚁',
      bodyColor: 0x8d99ae,
      accentColor: 0xf4a261,
      pos: [-7, 2.2, 2],
      sizeEmojis: '🧒 🆚 🧻',
      sizeDesc: 'Tissue-box body with 1.2-meter (4 ft) rotor blades!',
      thankYou: "Whirrr-beep! Thanks for dusting off my carbon-fiber rotor blades and unlocking my Martian Hummingbird spirit!",
      about: "I'm Ingenuity, the first aircraft to fly on another planet! Even though Mars has super thin air, I completed 72 flights instead of 5 and scouted paths for Perseverance!",
      quiz: {
        q: "How many flights did Ingenuity complete on Mars?",
        options: ["5 Flights", "25 Flights", "72 Flights"],
        correctIndex: 2
      },
      qa: {
        scary: "During Flight 6, a navigation camera glitch made me tilt wildly back and forth, but my flight software kept me steady until touchdown!",
        view: "I'm resting on 'Valinor Hills' in Jezero Crater, looking out across ancient river delta sand ripples!",
        spirit: "To fly in Mars's 1% thin air, my blades spun at 2,537 RPM—hovering just like a super-fast Martian Hummingbird!"
      },
      nssdca: {
        id: '2020-052A-HEL',
        launch: 'July 30, 2020 (First Flight: April 19, 2021)',
        location: 'Jezero Crater, Mars',
        duration: '72 flights over nearly 3 Earth years',
        discovery: 'Proved powered aerodynamic flight is possible on Mars',
        status: 'Retired in Jan 2024 after rotor tip damage'
      },
      nasaUrl: "https://science.nasa.gov/mission/mars-2020-perseverance/ingenuity-mars-helicopter/",
      imageUrl: "https://images-assets.nasa.gov/image/PIA24648/PIA24648~medium.jpg"
    },
    {
      id: 'opportunity',
      zoneLabel: 'Mars',
      launchYear: 2003,
      gravityRatio: 0.38,
      distanceFromEarth: '225,000,000 km (12.5 light-min)',
      radioQuote: "Opportunity rover odometer passes 42.195 kilometers — a full Martian marathon!",
      shape: 'opportunity_rover',
      spiritType: 'hound',
      spiritName: 'Faithful Rover Hound 🐕',
      spiritEmoji: '🐕',
      name: 'Opportunity Rover',
      nasaSearchQuery: 'Opportunity Mars Exploration Rover',
      foodName: 'Solar Berry Smoothie',
      foodIcon: '🥤',
      bodyColor: 0xffb703,
      accentColor: 0x219ebc,
      pos: [7, 2.2, 1.5],
      sizeEmojis: '🧒 🆚 🚗',
      sizeDesc: '1.5m tall × 2.3m wide — about the size of a bumper car!',
      thankYou: "Beep-boop! My solar wings are clean again! Thank you for wiping away the 2018 Mars dust storm and awakening my Faithful Rover Hound spirit!",
      about: "I'm Opportunity! I was only supposed to work on Mars for 90 days, but I explored for nearly 15 years and drove a full marathon across the Red Planet finding proof of ancient water!",
      quiz: {
        q: "How long was Opportunity originally planned to last on Mars?",
        options: ["90 Days", "5 Years", "15 Years"],
        correctIndex: 0
      },
      qa: {
        scary: "In June 2018, a planet-wide dust storm turned daytime into pitch darkness on Mars, blocking sunlight from reaching my solar panels.",
        view: "I'm parked inside Perseverance Valley on the rim of giant Endeavour Crater, surrounded by rusty red pebbles!",
        spirit: "I loyally sniffed out water-formed rocks ('blueberries') for 15 years and ran 45.16 km—just like a Faithful Rover Hound!"
      },
      nssdca: {
        id: '2003-032A',
        launch: 'July 7, 2003 (Landed Jan 25, 2004)',
        location: 'Meridiani Planum / Endeavour Crater, Mars',
        duration: '14 years, 136 days (5,111 Martian sols)',
        discovery: 'Found hematite spheres & clay minerals proving ancient liquid water',
        status: 'Mission concluded Feb 2019 after 2018 global dust storm'
      },
      nasaUrl: "https://science.nasa.gov/mission/mer-opportunity/",
      imageUrl: "https://images-assets.nasa.gov/image/PIA04413/PIA04413~medium.jpg"
    },
    {
      id: 'insight',
      zoneLabel: 'Mars',
      launchYear: 2018,
      gravityRatio: 0.38,
      distanceFromEarth: '225,000,000 km (12.5 light-min)',
      radioQuote: "Seismic event detected! First ever marsquake recorded on Elysium Planitia.",
      shape: 'insight_lander',
      spiritType: 'mole',
      spiritName: 'Listening Star-Mole 🐹',
      spiritEmoji: '🐹',
      name: 'InSight Mars Listener',
      nasaSearchQuery: 'InSight Mars Lander',
      foodName: 'Seismic Honey Drops',
      foodIcon: '🍯',
      bodyColor: 0xf48c06,
      accentColor: 0x4cc9f0,
      pos: [-5.5, -2.4, 2.5],
      sizeEmojis: '🧒 🆚 🏓',
      sizeDesc: '6 meters wide with solar fans — wider than 2 ping-pong tables!',
      thankYou: "Shhh... rumble-beep! Thank you for waking me gently and awakening my Listening Star-Mole spirit!",
      about: "I'm InSight! With my round fan-like solar panels and copper seismometer dome, I listened to Mars's heartbeat and detected over 1,300 marsquakes!",
      quiz: {
        q: "What did InSight measure beneath the surface of Mars?",
        options: ["Marsquakes", "Ocean waves", "Volcanic lava"],
        correctIndex: 0
      },
      qa: {
        scary: "When a huge magnitude-4.7 marsquake shook the ground beneath me in 2022, my seismometer recorded vibrations rippling around Mars for hours!",
        view: "I'm sitting on the flat volcanic plains of Elysium Planitia with my two round solar fans dusted in cinnamon-red sand.",
        spirit: "Because I pressed my super-sensitive ear onto the ground to feel underground rumbles, I'm a Listening Star-Mole!"
      },
      nssdca: {
        id: '2018-042A',
        launch: 'May 5, 2018 (Landed Nov 26, 2018)',
        location: 'Elysium Planitia, Mars',
        duration: '4 Earth years (1,440 sols)',
        discovery: 'Detected 1,319 marsquakes & mapped Mars crust, mantle, and liquid core',
        status: 'Retired Dec 2022 due to dust accumulation on solar panels'
      },
      nasaUrl: "https://science.nasa.gov/mission/insight/",
      imageUrl: "https://images-assets.nasa.gov/image/PIA22743/PIA22743~medium.jpg"
    },
    {
      id: 'sojourner',
      zoneLabel: 'Mars',
      launchYear: 1996,
      gravityRatio: 0.38,
      distanceFromEarth: '225,000,000 km (12.5 light-min)',
      radioQuote: "All six wheels on Martian soil! Pathfinder airbag deployment successful.",
      shape: 'sojourner_mini',
      spiritType: 'turtle',
      spiritName: 'Tiny Mars Turtle 🐢',
      spiritEmoji: '🐢',
      name: 'Tiny Sojourner Rover',
      nasaSearchQuery: 'Sojourner rover Mars Pathfinder',
      foodName: 'Microwatt Muffins',
      foodIcon: '🧁',
      bodyColor: 0x48cae4,
      accentColor: 0xf72585,
      pos: [6, -2.2, 2],
      sizeEmojis: '🧒 🆚 📻',
      sizeDesc: '65 cm long — just the size of a kitchen microwave oven!',
      thankYou: "Squeak-beep! I'm microwave-sized, so that brush felt like a giant massage! Thanks for awakening my Tiny Mars Turtle spirit!",
      about: "I'm Sojourner—the very first wheeled rover to roll on Mars back in 1997! I was only the size of a microwave oven, and I analyzed Martian rocks like 'Barnacle Bill'!",
      quiz: {
        q: "What everyday appliance was Sojourner the same size as?",
        options: ["A microwave oven", "A refrigerator", "A school bus"],
        correctIndex: 0
      },
      qa: {
        scary: "Rolling down the steep airbag ramp off my Pathfinder lander onto rocky Martian soil for the very first time!",
        view: "I'm right beside my Carl Sagan Memorial Station lander in Ares Vallis, surrounded by flood-carved rocks!",
        spirit: "With my flat solar shell on top and slow, careful 1-centimeter-per-second pace, I'm the original Tiny Mars Turtle!"
      },
      nssdca: {
        id: '1996-068A-ROV',
        launch: 'Dec 4, 1996 (Landed July 4, 1997)',
        location: 'Ares Vallis, Mars',
        duration: '83 Martian sols (12x longer than planned!)',
        discovery: 'First mobile rover on Mars; proved Mars once had warm, wet conditions',
        status: 'Resting in Ares Vallis since Sept 1997'
      },
      nasaUrl: "https://science.nasa.gov/mission/mars-pathfinder/",
      imageUrl: "https://images-assets.nasa.gov/image/PIA01120/PIA01120~medium.jpg"
    }
  ],
  deepspace: [
    {
      id: 'pioneer10',
      zoneLabel: 'Deep Space',
      launchYear: 1972,
      gravityRatio: 0.02,
      distanceFromEarth: '20.4 Billion km (18.9 light-hours)',
      radioQuote: "Deep Space Network locking onto 8-watt Pioneer 10 carrier wave from beyond Pluto!",
      shape: 'pioneer_dish',
      spiritType: 'whale',
      spiritName: 'Cosmic Voyager Whale 🐋',
      spiritEmoji: '🐋',
      name: 'Pioneer 10 Voyager',
      nasaSearchQuery: 'Pioneer 10 spacecraft Jupiter',
      foodName: 'Plutonium Star-Pellets',
      foodIcon: '🌟',
      bodyColor: 0xffd166,
      accentColor: 0xf8f9fa,
      pos: [-7, 2.2, 2],
      sizeEmojis: '🧒 🆚 📡',
      sizeDesc: '2.7-meter wide dish — wider than a giant trampoline!',
      thankYou: "Beeeep... hello from interstellar space! Thank you for polishing my huge white dish and awakening my Cosmic Voyager Whale spirit!",
      about: "I'm Pioneer 10! Launched in 1972, I was the first spacecraft to fly past Jupiter and I carry a golden greeting card from Earth as I drift toward the stars!",
      quiz: {
        q: "Which giant planet was Pioneer 10 the first spacecraft to visit?",
        options: ["Saturn", "Jupiter", "Neptune"],
        correctIndex: 1
      },
      qa: {
        scary: "Flying through Jupiter's intense radiation belts—it was 10,000 times stronger than Earth's, but my circuits survived!",
        view: "Out here beyond Neptune, the Sun looks like just another super-bright star in an endless ocean of constellations.",
        spirit: "Gliding silently through the vast deep-space ocean carrying a golden message plaque, I'm a Cosmic Voyager Whale!"
      },
      nssdca: {
        id: '1972-012A',
        launch: 'March 2, 1972',
        location: 'Interstellar Space (Heading toward Aldebaran)',
        duration: '30+ years of active deep-space telemetry',
        discovery: 'First spacecraft to cross the Asteroid Belt & fly past Jupiter',
        status: 'Last signal received Jan 2003; still coasting through the stars'
      },
      nasaUrl: "https://science.nasa.gov/mission/pioneer-10/",
      imageUrl: "https://images-assets.nasa.gov/image/72-H-1371/72-H-1371~medium.jpg"
    },
    {
      id: 'kepler',
      zoneLabel: 'Deep Space',
      launchYear: 2009,
      gravityRatio: 0.02,
      distanceFromEarth: '151,000,000 km (8.4 light-min)',
      radioQuote: "Photometer transit confirmed! New Earth-sized exoplanet detected in habitable zone.",
      shape: 'kepler_telescope',
      spiritType: 'owl',
      spiritName: 'Stargazer Space Owl 🦉',
      spiritEmoji: '🦉',
      name: 'Kepler Planet Hunter',
      nasaSearchQuery: 'Kepler Space Telescope spacecraft',
      foodName: 'Exoplanet Jellybeans',
      foodIcon: '🪐',
      bodyColor: 0xadb5bd,
      accentColor: 0x00bbf9,
      pos: [7, 2.2, 1.5],
      sizeEmojis: '🧒 🆚 🚌',
      sizeDesc: '4.7 meters long — as big as a yellow school bus!',
      thankYou: "Blink-blink! My space telescope barrel is wide open! Thanks for the Exoplanet Jellybeans and awakening my Stargazer Space Owl spirit!",
      about: "I'm the Kepler Space Telescope! By watching tiny dips in starlight, I discovered over 2,700 exoplanets—proving there are more planets than stars in our galaxy!",
      quiz: {
        q: "Over how many exoplanets did Kepler discover?",
        options: ["27", "270", "Over 2,700"],
        correctIndex: 2
      },
      qa: {
        scary: "When two of my four reaction wheels stopped spinning, engineers used sunlight pressure itself to keep me balanced for my K2 mission!",
        view: "I'm drifting peacefully in a safe Earth-trailing orbit around the Sun, surrounded by millions of twinkling stars.",
        spirit: "Staring unblinkingly into the night sky with a giant telescope eye to spot hidden worlds makes me a Stargazer Space Owl!"
      },
      nssdca: {
        id: '2009-011A',
        launch: 'March 7, 2009',
        location: 'Earth-Trailing Heliocentric Orbit',
        duration: '9 years, 7 months',
        discovery: 'Confirmed 2,778 exoplanets across the Milky Way',
        status: 'Retired & safely deactivated in Oct 2018'
      },
      nasaUrl: "https://science.nasa.gov/mission/kepler/",
      imageUrl: "https://images-assets.nasa.gov/image/PIA18904/PIA18904~medium.jpg"
    },
    {
      id: 'dawn',
      zoneLabel: 'Deep Space',
      launchYear: 2007,
      gravityRatio: 0.03,
      distanceFromEarth: '413,000,000 km (23 light-min)',
      radioQuote: "Xenon ion thruster firing smoothly. Entering low-altitude orbit over Ceres!",
      shape: 'dawn_wings',
      spiritType: 'moth',
      spiritName: 'Ion-Glow Moon Moth 🦋',
      spiritEmoji: '🦋',
      name: 'Dawn Asteroid Explorer',
      nasaSearchQuery: 'Dawn spacecraft Ceres Vesta',
      foodName: 'Ion Xenon Popsicles',
      foodIcon: '🧊',
      bodyColor: 0xc77dff,
      accentColor: 0x00f5d4,
      pos: [-5.5, -2.3, 2.5],
      sizeEmojis: '🧒 🆚 ✈️',
      sizeDesc: '19.7-meter wingspan — wider than a passenger jet wing!',
      thankYou: "Zzzzzap-beep! My blue ion engine loves Ion Xenon Popsicles! Thanks for awakening my Ion-Glow Moon Moth spirit!",
      about: "I'm Dawn! With my extra-long solar wings and futuristic blue ion propulsion engine, I orbited both giant asteroid Vesta and dwarf planet Ceres!",
      quiz: {
        q: "Which two Asteroid Belt worlds did Dawn orbit?",
        options: ["Vesta & Ceres", "Phobos & Deimos", "Europa & Titan"],
        correctIndex: 0
      },
      qa: {
        scary: "Navigating around mysterious bright white salt spots inside Occator Crater on dwarf planet Ceres!",
        view: "I'm silently orbiting dwarf planet Ceres in the Asteroid Belt, watching its icy craters turn below me.",
        spirit: "With my extra-wide solar wings and glowing blue xenon ion tail, I flutter between worlds like an Ion-Glow Moon Moth!"
      },
      nssdca: {
        id: '2007-043A',
        launch: 'Sept 27, 2007',
        location: 'Orbiting Dwarf Planet Ceres (Asteroid Belt)',
        duration: '11 years',
        discovery: 'First spacecraft to orbit two extraterrestrial bodies (Vesta & Ceres)',
        status: 'In a stable planetary-protection orbit around Ceres since Nov 2018'
      },
      nasaUrl: "https://science.nasa.gov/mission/dawn/",
      imageUrl: "https://images-assets.nasa.gov/image/PIA19048/PIA19048~medium.jpg"
    },
    {
      id: 'near',
      zoneLabel: 'Deep Space',
      launchYear: 1996,
      gravityRatio: 0.01,
      distanceFromEarth: '316,000,000 km (17.5 light-min)',
      radioQuote: "Touchdown confirmed on Asteroid 433 Eros! Telemetry still transmitting from the surface.",
      shape: 'near_petals',
      spiritType: 'barnacle',
      spiritName: 'Asteroid Star-Crab 🦀',
      spiritEmoji: '🦀',
      name: 'NEAR Shoemaker',
      nasaSearchQuery: 'NEAR Shoemaker spacecraft Eros',
      foodName: 'Asteroid Dust Donuts',
      foodIcon: '🍩',
      bodyColor: 0xf77f00,
      accentColor: 0x4cc9f0,
      pos: [6, -2.1, 2],
      sizeEmojis: '🧒 🆚 🚐',
      sizeDesc: '2.7 meters tall — the size of a camper van!',
      thankYou: "Boop-boop! Resting on asteroid 433 Eros was comfy, but I'm so happy you awakened my Asteroid Star-Crab spirit!",
      about: "I'm NEAR Shoemaker! With my four solar petals and top dish, I was the first spacecraft ever to orbit an asteroid and gently touch down on 433 Eros!",
      quiz: {
        q: "Which asteroid did NEAR Shoemaker land on?",
        options: ["433 Eros", "Bennu", "Ryugu"],
        correctIndex: 0
      },
      qa: {
        scary: "I wasn't even built with landing legs! I had to touch down at a super gentle walking speed of 1.5 meters per second on my solar panel tips!",
        view: "I'm perched right on the peanut-shaped asteroid 433 Eros as it tumbles through space!",
        spirit: "Clinging onto a tumbling space rock with my four solar-petal legs makes me a cozy Asteroid Star-Crab!"
      },
      nssdca: {
        id: '1996-008A',
        launch: 'Feb 17, 1996 (Landed Feb 12, 2001)',
        location: 'Surface of Asteroid 433 Eros',
        duration: '5 years (including 1 year orbiting Eros)',
        discovery: 'First spacecraft to orbit and soft-land on an asteroid',
        status: 'Resting on Asteroid 433 Eros since Feb 2001'
      },
      nasaUrl: "https://science.nasa.gov/mission/near-shoemaker/",
      imageUrl: "https://images-assets.nasa.gov/image/PIA03149/PIA03149~medium.jpg"
    }
  ]
};

const SHOOTING_STAR_FACTS = [
  "🌠 Wish Granted! Did you know a day on Venus is longer than a full year on Venus?",
  "🌠 Star Fact! Footprints left by Apollo astronauts on the Moon will last millions of years because there's no wind!",
  "🌠 Cosmic Secret! Olympus Mons on Mars is 3 times taller than Mount Everest!",
  "🌠 Space Fact! More than 1 million Earths could fit inside the Sun!",
  "🌠 Galaxy Fact! Neutron stars can spin up to 600 times per second!"
];

// ==========================================
// 2. MULTI-LANGUAGE DICTIONARY (EN / HI / KN / ES)
// ==========================================
const LANG_LIST = ['EN', 'HI', 'KN', 'ES'];
let currentLangIndex = 0;

const I18N = {
  EN: {
    introTitle: "BEEP-BOOP! Hi Space Explorer!",
    startBtn: "🚀 YES, LET'S LAUNCH INTO SPACE!",
    galaxyTitle: "🛸 COSMIC SLEEPOVER 3D",
    speechLang: "en-US"
  },
  HI: {
    introTitle: "बीप-बूप! नमस्ते अंतरिक्ष यात्री!",
    startBtn: "🚀 हाँ, चलो अंतरिक्ष में चलें!",
    galaxyTitle: "🛸 कॉस्मिक स्लीपओवर 3D",
    speechLang: "hi-IN"
  },
  KN: {
    introTitle: "ಬೀಪ್-ಬೂಪ್! ನಮಸ್ಕಾರ ಬಾಹ್ಯಾಕಾಶ ಯಾತ್ರಿ!",
    startBtn: "🚀 ಹೌದು, ಬಾಹ್ಯಾಕಾಶಕ್ಕೆ ಹಾರೋಣ!",
    galaxyTitle: "🛸 ಕಾಸ್ಮಿಕ್ ಸ್ಲೀಪ್‌ಓವರ್ 3D",
    speechLang: "kn-IN"
  },
  ES: {
    introTitle: "¡BIP-BUP! ¡Hola Explorador Espacial!",
    startBtn: "🚀 ¡SÍ, DESPEGUEMOS AL ESPACIO!",
    galaxyTitle: "🛸 PIJAMADA CÓSMICA 3D",
    speechLang: "es-ES"
  }
};

function cycleLanguage() {
  currentLangIndex = (currentLangIndex + 1) % LANG_LIST.length;
  const code = LANG_LIST[currentLangIndex];
  const dict = I18N[code];
  document.getElementById('lang-btn').textContent = `🌐 ${code}`;
  document.getElementById('intro-title').textContent = dict.introTitle;
  document.getElementById('start-btn').textContent = dict.startBtn;
  if (appMode === 'GALAXY') {
    document.getElementById('hud-zone-title').textContent = dict.galaxyTitle;
  }
  playSoundEffect('feed');
}

function toggleAccessibility() {
  document.body.classList.toggle('easy-read-mode');
  playSoundEffect('feed');
}

// ==========================================
// 3. PURE WEB AUDIO SYNTH & HISTORIC NASA RADIO AUDIO
// ==========================================
let audioCtx = null;
let audioEnabled = true;
let bgmInterval = null;

function ensureAudioCtx() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function playSoundEffect(type) {
  if (!audioEnabled) return;
  try {
    ensureAudioCtx();
    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    if (type === 'brush') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(520 + Math.random() * 180, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
      osc.start(now);
      osc.stop(now + 0.09);
    } else if (type === 'feed') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(340, now);
      osc.frequency.exponentialRampToValueAtTime(680, now + 0.14);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      osc.start(now);
      osc.stop(now + 0.15);
    } else if (type === 'quindar') {
      // Classic NASA Apollo 2525 Hz / 2475 Hz Quindar radio beep!
      osc.type = 'sine';
      osc.frequency.setValueAtTime(2525, now);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      osc.start(now);
      osc.stop(now + 0.26);
    } else if (type === 'wakeup') {
      const notes = [523.25, 659.25, 783.99, 1046.5, 1318.5];
      notes.forEach((freq, idx) => {
        const o = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        o.type = 'sine';
        o.frequency.setValueAtTime(freq, now + idx * 0.09);
        g.gain.setValueAtTime(0.11, now + idx * 0.09);
        g.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.09 + 0.35);
        o.connect(g);
        g.connect(audioCtx.destination);
        o.start(now + idx * 0.09);
        o.stop(now + idx * 0.09 + 0.36);
      });
    }
  } catch (e) {}
}

function playHistoricNasaAudio() {
  if (!selectedBotObj) return;
  playSoundEffect('quindar');
  setTimeout(() => {
    speakText(selectedBotObj.data.radioQuote, 0.95);
  }, 300);
}

function startAmbientSpacePad() {
  if (bgmInterval) return;
  const chords = [
    [261.63, 329.63, 392.0],
    [220.0, 261.63, 329.63],
    [174.61, 220.0, 261.63],
    [196.0, 246.94, 293.66]
  ];
  let step = 0;
  bgmInterval = setInterval(() => {
    if (!audioEnabled) return;
    try {
      ensureAudioCtx();
      const now = audioCtx.currentTime;
      const chord = chords[step % chords.length];
      step++;
      chord.forEach((freq) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.022, now + 0.8);
        gain.gain.exponentialRampToValueAtTime(0.0008, now + 3.4);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 3.5);
      });
    } catch (e) {}
  }, 3600);
}

function toggleSpaceAudio() {
  audioEnabled = !audioEnabled;
  const btn = document.getElementById('audio-toggle-btn');
  btn.textContent = audioEnabled ? '🔊' : '🔇';
  if (audioEnabled) {
    ensureAudioCtx();
    startAmbientSpacePad();
  } else if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

// ==========================================
// 4. LOCALSTORAGE PROGRESS SAVE & UI REFERENCES
// ==========================================
const STORAGE_KEY = 'cosmic_sleepover_progress_v2';
const awakenedBotIds = new Set();
const earnedStarIds = new Set();

function loadSavedProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    (data.awakened || []).forEach(id => awakenedBotIds.add(id));
    (data.stars || []).forEach(id => earnedStarIds.add(id));
  } catch (e) {}
  updateHudCounters();
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      awakened: Array.from(awakenedBotIds),
      stars: Array.from(earnedStarIds)
    }));
  } catch (e) {}
  updateHudCounters();
}

function updateHudCounters() {
  const totalBots = BOT_DATABASE.moon.length + BOT_DATABASE.mars.length + BOT_DATABASE.deepspace.length;
  document.getElementById('awakened-count').textContent = awakenedBotIds.size;
  document.getElementById('stars-count').textContent = earnedStarIds.size;
  document.getElementById('passport-btn').innerHTML = `🏅 <span id="awakened-count">${awakenedBotIds.size}</span>/${totalBots} • ⭐ <span id="stars-count">${earnedStarIds.size}</span>`;
}

function resetAllProgress() {
  awakenedBotIds.clear();
  earnedStarIds.clear();
  saveProgress();
  openPassportModal();
  if (appMode === 'ZONE' && currentZoneId) {
    enterPlanetZone(currentZoneId);
  }
}

let appMode = 'GALAXY';
let currentZoneId = null;
let selectedBotObj = null;
let roverCamActive = false;
let weatherActive = false;
let isSpeakingNow = false;

let careStep = 1;
let activeTool = null;
let cleanProgress = 0;
let feedProgress = 0;

const introOverlay = document.getElementById('intro-overlay');
const hudZoneTitle = document.getElementById('hud-zone-title');
const backMapBtn = document.getElementById('back-map-btn');
const weatherBtn = document.getElementById('weather-btn');
const timelineBar = document.getElementById('timeline-bar');
const navPad = document.getElementById('nav-pad');
const carePanel = document.getElementById('care-panel');
const storyModal = document.getElementById('story-modal');
const passportModal = document.getElementById('passport-modal');
const builderModal = document.getElementById('builder-modal');
const selfieModal = document.getElementById('selfie-modal');
const toolCursor = document.getElementById('tool-cursor');
const botLabelsContainer = document.getElementById('bot-labels-container');
const ogPicWrapper = document.getElementById('og-pic-wrapper');
const ogPicImg = document.getElementById('og-pic-img');
const ogPicCaption = document.getElementById('og-pic-caption');

async function loadRealNasaPhoto(botData) {
  ogPicImg.dataset.retried = 'false';
  ogPicImg.src = botData.imageUrl;

  ogPicImg.onerror = async () => {
    if (ogPicImg.dataset.retried === 'false') {
      ogPicImg.dataset.retried = 'true';
      try {
        const res = await fetch(
          `https://images-api.nasa.gov/search?q=${encodeURIComponent(botData.nasaSearchQuery)}&media_type=image`
        );
        const json = await res.json();
        const items = json?.collection?.items || [];
        for (const item of items) {
          const thumb = item?.links?.find(l => l.rel === 'preview')?.href;
          if (thumb) {
            botData.imageUrl = thumb;
            ogPicImg.src = thumb;
            return;
          }
        }
      } catch (err) {}
    }

    ogPicImg.src = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#100c2a"/>
        <circle cx="150" cy="85" r="38" fill="#7cf3ff" opacity="0.25"/>
        <text x="150" y="92" font-size="34" text-anchor="middle">🛰️</text>
        <text x="150" y="140" font-family="sans-serif" font-size="14" fill="#ffd86b" text-anchor="middle">NASA Spacecraft Archive</text>
      </svg>`
    );
  };
}

function speakText(text, pitch = 1.35) {
  if (!audioEnabled) return;
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = I18N[LANG_LIST[currentLangIndex]].speechLang;
    msg.pitch = pitch;
    msg.rate = 1.04;
    msg.onstart = () => { isSpeakingNow = true; };
    msg.onend = () => { isSpeakingNow = false; };
    msg.onerror = () => { isSpeakingNow = false; };
    window.speechSynthesis.speak(msg);
  }
}

window.addEventListener('load', () => {
  loadSavedProgress();
  setTimeout(() => {
    speakText("Beep-boop! Hi Space Explorer! I'm Astro-Pip! Are you ready to fly into 3D space and wake up NASA's sleepy robots?", 1.45);
  }, 400);
});

// ==========================================
// 5. THREE.JS 3D SCENE SETUP & SHOOTING STARS
// ==========================================
const canvas = document.getElementById('space-canvas');
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x04030c, 0.01);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 22);

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

scene.add(new THREE.AmbientLight(0x99aaff, 1.05));
const sunLight = new THREE.PointLight(0xfff2cc, 2.3, 140);
sunLight.position.set(15, 20, 25);
scene.add(sunLight);

const rimLight = new THREE.PointLight(0xff5ea8, 1.5, 100);
rimLight.position.set(-20, -10, 12);
scene.add(rimLight);

// Starfield
const starGeo = new THREE.BufferGeometry();
const starCount = 2500;
const starPos = new Float32Array(starCount * 3);
const starColors = new Float32Array(starCount * 3);
const palette = [new THREE.Color(0xffffff), new THREE.Color(0x7cf3ff), new THREE.Color(0xffd86b), new THREE.Color(0xff77c8)];

for (let i = 0; i < starCount; i++) {
  starPos[i * 3] = (Math.random() - 0.5) * 160;
  starPos[i * 3 + 1] = (Math.random() - 0.5) * 120;
  starPos[i * 3 + 2] = (Math.random() - 0.5) * 140 - 20;
  const col = palette[Math.floor(Math.random() * palette.length)];
  starColors[i * 3] = col.r;
  starColors[i * 3 + 1] = col.g;
  starColors[i * 3 + 2] = col.b;
}
starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));
const starField = new THREE.Points(starGeo, new THREE.PointsMaterial({ size: 0.38, vertexColors: true }));
scene.add(starField);

// Shooting Stars
const shootingStars = [];
function spawnShootingStar() {
  const starGroup = new THREE.Group();
  const head = new THREE.Mesh(
    new THREE.SphereGeometry(0.28, 10, 10),
    new THREE.MeshBasicMaterial({ color: 0xffd86b })
  );
  head.userData.isShootingStar = true;
  const tail = new THREE.Mesh(
    new THREE.ConeGeometry(0.18, 2.6, 8),
    new THREE.MeshBasicMaterial({ color: 0x7cf3ff, transparent: true, opacity: 0.65 })
  );
  tail.rotation.z = Math.PI / 2;
  tail.position.x = 1.3;
  starGroup.add(head, tail);

  starGroup.position.set(22, 6 + Math.random() * 8, -4 - Math.random() * 6);
  starGroup.rotation.z = 0.28;
  scene.add(starGroup);
  shootingStars.push({ group: starGroup, head, speedX: -0.26, speedY: -0.08 });
}

setInterval(() => {
  if (shootingStars.length < 2) spawnShootingStar();
}, 6500);

let wishToastTimer = null;
function triggerWishEvent() {
  playSoundEffect('wakeup');
  triggerSparkleBurst(new THREE.Vector3(0, 2, 6));
  const fact = SHOOTING_STAR_FACTS[Math.floor(Math.random() * SHOOTING_STAR_FACTS.length)];
  const toast = document.getElementById('wish-toast');
  toast.textContent = fact;
  toast.classList.remove('hidden');
  speakText(fact.replace(/🌠/g, ''), 1.4);

  clearTimeout(wishToastTimer);
  wishToastTimer = setTimeout(() => {
    toast.classList.add('hidden');
  }, 5500);
}

// ==========================================
// 6. GALAXY MAP GROUP & TIMELINE FILTER
// ==========================================
const galaxyGroup = new THREE.Group();
scene.add(galaxyGroup);

const clickablePlanets = [];
const galaxyOrbiters = [];

function createMiniCraft(bodyColor, panelColor) {
  const craft = new THREE.Group();
  craft.add(new THREE.Mesh(
    new THREE.BoxGeometry(0.55, 0.4, 0.55),
    new THREE.MeshStandardMaterial({ color: bodyColor, roughness: 0.3, metalness: 0.5 })
  ));
  const visor = new THREE.Mesh(new THREE.SphereGeometry(0.14, 10, 10), new THREE.MeshBasicMaterial({ color: 0x7cf3ff }));
  visor.position.set(0, 0.05, 0.28);
  craft.add(visor);
  craft.add(new THREE.Mesh(
    new THREE.BoxGeometry(1.4, 0.05, 0.35),
    new THREE.MeshStandardMaterial({ color: panelColor, roughness: 0.2, metalness: 0.7 })
  ));
  return craft;
}

function createPlanetZone({ id, name, position, radius, color, emissive, ringColor, craftColors }) {
  const group = new THREE.Group();
  group.position.copy(position);

  const planetMesh = new THREE.Mesh(
    new THREE.SphereGeometry(radius, 36, 36),
    new THREE.MeshStandardMaterial({ color, emissive, emissiveIntensity: 0.25, roughness: 0.65 })
  );
  planetMesh.userData = { zoneId: id, name };
  group.add(planetMesh);
  clickablePlanets.push(planetMesh);

  const halo = new THREE.Mesh(
    new THREE.SphereGeometry(radius * 1.15, 24, 24),
    new THREE.MeshBasicMaterial({ color: ringColor, transparent: true, opacity: 0.15, side: THREE.BackSide })
  );
  group.add(halo);

  craftColors.forEach((c, idx) => {
    const orbitRadius = radius + 1.4 + idx * 0.75;
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(orbitRadius - 0.04, orbitRadius + 0.04, 64),
      new THREE.MeshBasicMaterial({ color: ringColor, side: THREE.DoubleSide, transparent: true, opacity: 0.35 })
    );
    ring.rotation.x = Math.PI / 2.4;
    group.add(ring);

    const mesh = createMiniCraft(c[0], c[1]);
    group.add(mesh);
    galaxyOrbiters.push({
      mesh,
      radius: orbitRadius,
      angle: idx * 2.1,
      speed: 0.012 + idx * 0.004,
      tilt: idx % 2 === 0 ? 0.35 : -0.35
    });
  });

  galaxyGroup.add(group);
  return planetMesh;
}

const moonPlanet = createPlanetZone({
  id: 'moon',
  name: '🌙 The Moon Sanctuary',
  position: new THREE.Vector3(-11, 2.5, 0),
  radius: 2.6,
  color: 0xd8dee9,
  emissive: 0x3b4252,
  ringColor: 0x7cf3ff,
  craftColors: [[0xffd86b, 0x4cc9f0], [0xffffff, 0xf72585]]
});

const marsPlanet = createPlanetZone({
  id: 'mars',
  name: '🔴 Mars Red Sand Dunes',
  position: new THREE.Vector3(0, -1.5, 2),
  radius: 3.1,
  color: 0xff6b4a,
  emissive: 0x6e1400,
  ringColor: 0xff9f1c,
  craftColors: [[0xffd166, 0x118ab2], [0x06d6a0, 0xffffff], [0xef476f, 0xffd166]]
});

const deepPlanet = createPlanetZone({
  id: 'deepspace',
  name: '🌌 Deep Space & Asteroids',
  position: new THREE.Vector3(11.5, 3, -1),
  radius: 2.8,
  color: 0x9b5de5,
  emissive: 0x3c096c,
  ringColor: 0xff77c8,
  craftColors: [[0x00bbf9, 0xfee440], [0xf15bb5, 0x00f5d4]]
});

function filterByTimeline(maxYear) {
  const yr = parseInt(maxYear, 10);
  document.getElementById('timeline-year-label').textContent = `LAUNCHED UP TO ${yr}`;

  ['moon', 'mars', 'deepspace'].forEach((zoneKey) => {
    const count = BOT_DATABASE[zoneKey].filter(b => b.launchYear <= yr).length;
    const tag = document.getElementById(`label-${zoneKey}`);
    tag.style.opacity = count > 0 ? '1' : '0.35';
    tag.querySelector('span').textContent = `${count} Bots Launched by ${yr}`;
  });
}

function resetTimelineFilter() {
  document.getElementById('timeline-slider').value = 2026;
  document.getElementById('timeline-year-label').textContent = 'ALL YEARS (1967 – 2026)';
  ['moon', 'mars', 'deepspace'].forEach((zoneKey) => {
    const count = BOT_DATABASE[zoneKey].length;
    const tag = document.getElementById(`label-${zoneKey}`);
    tag.style.opacity = '1';
    tag.querySelector('span').textContent = `Click to Explore (${count} Bots)`;
  });
}

// ==========================================
// 7. ZONE TERRAIN, WEATHER PARTICLES & CUSTOM 3D BOTS
// ==========================================
const zoneInteriorGroup = new THREE.Group();
zoneInteriorGroup.visible = false;
scene.add(zoneInteriorGroup);

let zoneBots = [];
let sparkleBursts = [];
let weatherParticles = null;

function buildZoneEnvironment(zoneId) {
  const envGroup = new THREE.Group();

  if (zoneId === 'moon') {
    // Lunar regolith horizon floor with craters
    const floor = new THREE.Mesh(
      new THREE.CylinderGeometry(24, 24, 1, 36),
      new THREE.MeshStandardMaterial({ color: 0x4a4e69, roughness: 0.95 })
    );
    floor.position.y = -6.8;
    envGroup.add(floor);

    for (let i = 0; i < 12; i++) {
      const crater = new THREE.Mesh(
        new THREE.TorusGeometry(0.6 + Math.random() * 1.1, 0.14, 8, 20),
        new THREE.MeshStandardMaterial({ color: 0x6c757d })
      );
      crater.rotation.x = Math.PI / 2;
      crater.position.set((Math.random() - 0.5) * 26, -6.25, (Math.random() - 0.5) * 14);
      envGroup.add(crater);
    }
  } else if (zoneId === 'mars') {
    // Red Martian sand dunes horizon
    const floor = new THREE.Mesh(
      new THREE.CylinderGeometry(24, 24, 1, 36),
      new THREE.MeshStandardMaterial({ color: 0x9e2a2b, roughness: 0.9 })
    );
    floor.position.y = -6.8;
    envGroup.add(floor);

    for (let i = 0; i < 10; i++) {
      const boulder = new THREE.Mesh(
        new THREE.DodecahedronGeometry(0.45 + Math.random() * 0.7, 0),
        new THREE.MeshStandardMaterial({ color: 0xbc4749, roughness: 0.95 })
      );
      boulder.position.set((Math.random() - 0.5) * 26, -6.1, (Math.random() - 0.5) * 14);
      envGroup.add(boulder);
    }
  } else {
    // Deep space floating asteroids
    for (let i = 0; i < 16; i++) {
      const rock = new THREE.Mesh(
        new THREE.DodecahedronGeometry(0.25 + Math.random() * 0.45, 0),
        new THREE.MeshStandardMaterial({ color: 0x5e548e, roughness: 0.85 })
      );
      rock.position.set((Math.random() - 0.5) * 28, (Math.random() - 0.5) * 14, -4 - Math.random() * 8);
      envGroup.add(rock);
    }
  }

  // Swirling Weather Dust/Sparkle Cloud (Toggled by Weather FX button)
  const wCount = 450;
  const wGeo = new THREE.BufferGeometry();
  const wPos = new Float32Array(wCount * 3);
  for (let i = 0; i < wCount; i++) {
    wPos[i * 3] = (Math.random() - 0.5) * 32;
    wPos[i * 3 + 1] = (Math.random() - 0.5) * 18;
    wPos[i * 3 + 2] = (Math.random() - 0.5) * 16;
  }
  wGeo.setAttribute('position', new THREE.BufferAttribute(wPos, 3));
  const wColor = zoneId === 'mars' ? 0xff7b54 : zoneId === 'moon' ? 0xcfe3ff : 0xe0aaff;
  weatherParticles = new THREE.Points(
    wGeo,
    new THREE.PointsMaterial({ color: wColor, size: 0.22, transparent: true, opacity: 0.65 })
  );
  weatherParticles.visible = weatherActive;
  envGroup.add(weatherParticles);

  zoneInteriorGroup.add(envGroup);
}

function toggleZoneWeather() {
  weatherActive = !weatherActive;
  if (weatherParticles) weatherParticles.visible = weatherActive;
  weatherBtn.textContent = weatherActive ? '🌪️ Weather FX: ON' : '🌪️ Weather FX: OFF';
  playSoundEffect('feed');
}

function buildSpiritAnimalMesh(spiritType) {
  const spiritGroup = new THREE.Group();
  spiritGroup.visible = false;

  const glowPink = new THREE.MeshStandardMaterial({ color: 0xff77c8, emissive: 0xff2a85, emissiveIntensity: 0.45, roughness: 0.3 });
  const glowCyan = new THREE.MeshStandardMaterial({ color: 0x7cf3ff, emissive: 0x00b4d8, emissiveIntensity: 0.45, roughness: 0.3 });
  const glowGold = new THREE.MeshStandardMaterial({ color: 0xffd86b, emissive: 0xff9f1c, emissiveIntensity: 0.45, roughness: 0.3 });

  if (spiritType === 'hound') {
    const earGeo = new THREE.BoxGeometry(0.24, 0.58, 0.14);
    const earL = new THREE.Mesh(earGeo, glowGold);
    earL.position.set(-0.62, 0.85, 0.42);
    earL.rotation.z = 0.35;
    const earR = new THREE.Mesh(earGeo, glowGold);
    earR.position.set(0.62, 0.85, 0.42);
    earR.rotation.z = -0.35;
    const tail = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.65, 10), glowGold);
    tail.position.set(0, 0.2, -0.85);
    tail.rotation.x = -0.7;
    spiritGroup.add(earL, earR, tail);
  } else if (spiritType === 'rabbit') {
    const earGeo = new THREE.CylinderGeometry(0.11, 0.14, 0.85, 12);
    const earL = new THREE.Mesh(earGeo, glowPink);
    earL.position.set(-0.32, 0.92, 0.45);
    earL.rotation.z = 0.15;
    const earR = new THREE.Mesh(earGeo, glowPink);
    earR.position.set(0.32, 0.92, 0.45);
    earR.rotation.z = -0.15;
    const tail = new THREE.Mesh(new THREE.SphereGeometry(0.24, 12, 12), new THREE.MeshBasicMaterial({ color: 0xffffff }));
    tail.position.set(0, -0.05, -0.95);
    spiritGroup.add(earL, earR, tail);
  } else if (spiritType === 'hummingbird' || spiritType === 'eagle' || spiritType === 'owl' || spiritType === 'moth' || spiritType === 'firefly') {
    const wingMat = spiritType === 'moth' || spiritType === 'firefly' ? glowCyan : glowGold;
    const wingGeo = new THREE.BoxGeometry(1.15, 0.55, 0.06);
    const wingL = new THREE.Mesh(wingGeo, wingMat);
    wingL.position.set(-1.1, 0.25, -0.15);
    wingL.rotation.y = 0.3;
    wingL.rotation.z = 0.25;
    const wingR = new THREE.Mesh(wingGeo, wingMat);
    wingR.position.set(1.1, 0.25, -0.15);
    wingR.rotation.y = -0.3;
    wingR.rotation.z = -0.25;
    spiritGroup.add(wingL, wingR);
  } else if (spiritType === 'whale') {
    const finGeo = new THREE.BoxGeometry(0.95, 0.12, 0.45);
    const finL = new THREE.Mesh(finGeo, glowCyan);
    finL.position.set(-1.05, -0.2, 0.2);
    finL.rotation.z = -0.35;
    const finR = new THREE.Mesh(finGeo, glowCyan);
    finR.position.set(1.05, -0.2, 0.2);
    finR.rotation.z = 0.35;
    spiritGroup.add(finL, finR);
  } else {
    const earGeo = new THREE.SphereGeometry(0.24, 12, 12);
    const earL = new THREE.Mesh(earGeo, glowPink);
    earL.position.set(-0.55, 0.52, 0.35);
    const earR = new THREE.Mesh(earGeo, glowPink);
    earR.position.set(0.55, 0.52, 0.35);
    spiritGroup.add(earL, earR);
  }

  const halo = new THREE.Mesh(
    new THREE.TorusGeometry(0.38, 0.04, 8, 24),
    new THREE.MeshBasicMaterial({ color: 0xffd86b })
  );
  halo.rotation.x = Math.PI / 2;
  halo.position.set(0, 1.45, 0);
  spiritGroup.add(halo);

  return spiritGroup;
}

function triggerSparkleBurst(worldPos) {
  const count = 45;
  const geo = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const velocities = [];

  for (let i = 0; i < count; i++) {
    positions[i * 3] = worldPos.x;
    positions[i * 3 + 1] = worldPos.y;
    positions[i * 3 + 2] = worldPos.z;
    velocities.push({
      x: (Math.random() - 0.5) * 0.18,
      y: (Math.random() - 0.5) * 0.18 + 0.04,
      z: (Math.random() - 0.5) * 0.18
    });
  }
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const mat = new THREE.PointsMaterial({ color: 0xffd86b, size: 0.28, transparent: true, opacity: 1 });
  const points = new THREE.Points(geo, mat);
  scene.add(points);
  sparkleBursts.push({ points, velocities, life: 1.0 });
}

function attachCuteAnimeFace(parentGroup, facePos, faceScale = 1) {
  const faceGroup = new THREE.Group();
  faceGroup.position.copy(facePos);
  faceGroup.scale.setScalar(faceScale);

  const cheekGeo = new THREE.CircleGeometry(0.14, 14);
  const cheekMat = new THREE.MeshBasicMaterial({ color: 0xff5ea8 });
  const cheekL = new THREE.Mesh(cheekGeo, cheekMat);
  cheekL.position.set(-0.42, -0.08, 0.02);
  const cheekR = new THREE.Mesh(cheekGeo, cheekMat);
  cheekR.position.set(0.42, -0.08, 0.02);
  faceGroup.add(cheekL, cheekR);

  const sleepyEyes = new THREE.Group();
  const arcGeo = new THREE.TorusGeometry(0.15, 0.035, 8, 16, Math.PI);
  const sleepyMat = new THREE.MeshBasicMaterial({ color: 0x7cf3ff });
  const sEyeL = new THREE.Mesh(arcGeo, sleepyMat);
  sEyeL.rotation.z = Math.PI;
  sEyeL.position.set(-0.26, 0.08, 0.02);
  const sEyeR = new THREE.Mesh(arcGeo, sleepyMat);
  sEyeR.rotation.z = Math.PI;
  sEyeR.position.set(0.26, 0.08, 0.02);
  sleepyEyes.add(sEyeL, sEyeR);
  faceGroup.add(sleepyEyes);

  const awakeEyes = new THREE.Group();
  awakeEyes.visible = false;

  [-0.26, 0.26].forEach((xPos) => {
    const eyeSocket = new THREE.Group();
    eyeSocket.position.set(xPos, 0.08, 0.02);

    const iris = new THREE.Mesh(
      new THREE.CircleGeometry(0.19, 20),
      new THREE.MeshBasicMaterial({ color: 0x160d3a })
    );
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.16, 0.20, 20),
      new THREE.MeshBasicMaterial({ color: 0x9d4edd })
    );
    ring.position.z = 0.005;

    const sparkleBig = new THREE.Mesh(
      new THREE.CircleGeometry(0.065, 12),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    sparkleBig.position.set(-0.06, 0.06, 0.01);

    const sparkleSmall = new THREE.Mesh(
      new THREE.CircleGeometry(0.03, 10),
      new THREE.MeshBasicMaterial({ color: 0x7cf3ff })
    );
    sparkleSmall.position.set(0.06, -0.05, 0.01);

    eyeSocket.add(iris, ring, sparkleBig, sparkleSmall);
    awakeEyes.add(eyeSocket);
  });

  const smile = new THREE.Mesh(
    new THREE.TorusGeometry(0.09, 0.026, 8, 16, Math.PI),
    new THREE.MeshBasicMaterial({ color: 0xffd86b })
  );
  smile.rotation.z = Math.PI;
  smile.position.set(0, -0.08, 0.02);
  awakeEyes.add(smile);

  faceGroup.add(awakeEyes);
  parentGroup.add(faceGroup);

  return { sleepyEyes, awakeEyes };
}

function addWheels(group, positions, wheelRadius = 0.24) {
  const wheelGeo = new THREE.CylinderGeometry(wheelRadius, wheelRadius, 0.2, 16);
  const wheelMat = new THREE.MeshStandardMaterial({ color: 0x22223b, roughness: 0.7 });
  const hubMat = new THREE.MeshStandardMaterial({ color: 0xffd166, metalness: 0.6 });
  positions.forEach(([x, y, z]) => {
    const wGroup = new THREE.Group();
    const tire = new THREE.Mesh(wheelGeo, wheelMat);
    tire.rotation.z = Math.PI / 2;
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(wheelRadius * 0.45, wheelRadius * 0.45, 0.22, 12), hubMat);
    hub.rotation.z = Math.PI / 2;
    wGroup.add(tire, hub);
    wGroup.position.set(x, y, z);
    group.add(wGroup);
  });
}

function addLanderLegs(group, legAngles, radiusTop, radiusBot, height, footColor = 0xffd166) {
  const legMat = new THREE.MeshStandardMaterial({ color: 0x4a4e69, metalness: 0.6 });
  const footMat = new THREE.MeshStandardMaterial({ color: footColor, roughness: 0.4 });
  legAngles.forEach((ang) => {
    const legGroup = new THREE.Group();
    const strut = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, height, 8), legMat);
    strut.position.set((radiusTop + radiusBot) / 2, -height / 2, 0);
    strut.rotation.z = 0.35;

    const foot = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 0.08, 12), footMat);
    foot.position.set(radiusBot, -height + 0.05, 0);

    legGroup.add(strut, foot);
    legGroup.rotation.y = ang;
    group.add(legGroup);
  });
}

function buildSpecificCraftGeometry(botData, index) {
  const modelGroup = new THREE.Group();
  const animatedParts = {};
  const mainMat = new THREE.MeshStandardMaterial({ color: botData.bodyColor, roughness: 0.35, metalness: 0.45 });
  const accentMat = new THREE.MeshStandardMaterial({ color: botData.accentColor, roughness: 0.3, metalness: 0.5 });
  const solarMat = new THREE.MeshStandardMaterial({ color: 0x1d3557, roughness: 0.2, metalness: 0.8 });
  const darkVisorMat = new THREE.MeshStandardMaterial({ color: 0x100c2a, roughness: 0.2 });

  let facePos = new THREE.Vector3(0, 0.1, 0.72);
  let faceScale = 1.0;

  switch (botData.shape) {
    case 'ingenuity_heli': {
      const head = new THREE.Mesh(new THREE.BoxGeometry(1.15, 0.78, 0.95), mainMat);
      head.position.set(0, 0.15, 0);
      modelGroup.add(head);

      const visor = new THREE.Mesh(new THREE.BoxGeometry(0.96, 0.56, 0.08), darkVisorMat);
      visor.position.set(0, 0.15, 0.49);
      modelGroup.add(visor);

      const coreBox = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.52, 0.62), accentMat);
      coreBox.position.set(0, -0.45, 0);
      modelGroup.add(coreBox);

      const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.95, 10), new THREE.MeshStandardMaterial({ color: 0x2b2d42 }));
      mast.position.set(0, 0.85, 0);
      modelGroup.add(mast);

      const topSolar = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.06, 0.45), solarMat);
      topSolar.position.set(0, 1.32, 0);
      modelGroup.add(topSolar);

      const bladeMat = new THREE.MeshStandardMaterial({ color: 0x3d405b, roughness: 0.3 });
      const rotorTop = new THREE.Mesh(new THREE.BoxGeometry(2.7, 0.04, 0.22), bladeMat);
      rotorTop.position.set(0, 0.98, 0);
      const rotorBot = new THREE.Mesh(new THREE.BoxGeometry(2.7, 0.04, 0.22), bladeMat);
      rotorBot.position.set(0, 0.78, 0);
      rotorBot.rotation.y = Math.PI / 2;
      modelGroup.add(rotorTop, rotorBot);
      animatedParts.rotorTop = rotorTop;
      animatedParts.rotorBot = rotorBot;

      addLanderLegs(modelGroup, [0.7, 2.4, 3.8, 5.5], 0.35, 0.95, 1.15, 0x8d99ae);

      facePos.set(0, 0.15, 0.54);
      faceScale = 0.85;
      break;
    }

    case 'apollo_lander': {
      const descent = new THREE.Mesh(new THREE.CylinderGeometry(1.05, 1.05, 0.65, 8), mainMat);
      descent.position.set(0, -0.35, 0);
      modelGroup.add(descent);

      const ascent = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.88, 0.72, 8), accentMat);
      ascent.position.set(0, 0.35, 0);
      modelGroup.add(ascent);

      const visor = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.52, 0.1), darkVisorMat);
      visor.position.set(0, 0.35, 0.72);
      modelGroup.add(visor);

      const dish = new THREE.Mesh(new THREE.ConeGeometry(0.25, 0.25, 12), new THREE.MeshStandardMaterial({ color: 0xffffff }));
      dish.position.set(0, 0.88, 0);
      modelGroup.add(dish);

      addLanderLegs(modelGroup, [0, Math.PI / 2, Math.PI, Math.PI * 1.5], 0.8, 1.35, 0.95, 0xffd166);

      facePos.set(0, 0.35, 0.78);
      faceScale = 0.85;
      break;
    }

    case 'moon_buggy': {
      const chassis = new THREE.Mesh(new THREE.BoxGeometry(1.35, 0.32, 1.7), mainMat);
      chassis.position.set(0, -0.3, 0);
      modelGroup.add(chassis);

      const consoleBox = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.65, 0.65), accentMat);
      consoleBox.position.set(0, 0.18, 0.45);
      modelGroup.add(consoleBox);

      const visor = new THREE.Mesh(new THREE.BoxGeometry(0.92, 0.46, 0.08), darkVisorMat);
      visor.position.set(0, 0.18, 0.79);
      modelGroup.add(visor);

      [-0.3, 0.3].forEach((sx) => {
        const seat = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.55, 0.12), new THREE.MeshStandardMaterial({ color: 0x4cc9f0 }));
        seat.position.set(sx, 0.12, -0.35);
        modelGroup.add(seat);
      });

      const umbrella = new THREE.Mesh(new THREE.ConeGeometry(0.45, 0.22, 14, 1, true), new THREE.MeshStandardMaterial({ color: 0xffd86b, side: THREE.DoubleSide }));
      umbrella.position.set(0.45, 0.78, 0.55);
      umbrella.rotation.x = 0.5;
      modelGroup.add(umbrella);

      addWheels(modelGroup, [[-0.75, -0.55, 0.6], [0.75, -0.55, 0.6], [-0.75, -0.55, -0.6], [0.75, -0.55, -0.6]], 0.3);

      facePos.set(0, 0.18, 0.84);
      faceScale = 0.8;
      break;
    }

    case 'alsep_mirror': {
      const base = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.9, 1.0), mainMat);
      base.position.set(0, -0.1, 0);
      modelGroup.add(base);

      const mirrorFrame = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.65, 0.15), accentMat);
      mirrorFrame.position.set(0, 0.62, -0.1);
      mirrorFrame.rotation.x = -0.45;
      const mirrorGlass = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.5, 0.17), new THREE.MeshBasicMaterial({ color: 0xffffff }));
      mirrorGlass.position.copy(mirrorFrame.position);
      mirrorGlass.rotation.copy(mirrorFrame.rotation);
      modelGroup.add(mirrorFrame, mirrorGlass);

      const visor = new THREE.Mesh(new THREE.BoxGeometry(1.05, 0.62, 0.1), darkVisorMat);
      visor.position.set(0, -0.1, 0.51);
      modelGroup.add(visor);

      facePos.set(0, -0.1, 0.57);
      faceScale = 0.88;
      break;
    }

    case 'surveyor_tripod': {
      const core = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.75, 0.85, 6), mainMat);
      core.position.set(0, 0.05, 0);
      modelGroup.add(core);

      const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1.0, 8), new THREE.MeshStandardMaterial({ color: 0xffffff }));
      mast.position.set(0, 0.85, -0.2);
      const panel = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.45, 0.06), solarMat);
      panel.position.set(0, 1.25, -0.2);
      panel.rotation.x = 0.4;
      modelGroup.add(mast, panel);

      const arm = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.1, 0.12), accentMat);
      arm.position.set(0.85, -0.15, 0.35);
      arm.rotation.y = -0.4;
      modelGroup.add(arm);

      const visor = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.55, 0.1), darkVisorMat);
      visor.position.set(0, 0.05, 0.68);
      modelGroup.add(visor);

      addLanderLegs(modelGroup, [0.5, 2.6, 4.7], 0.6, 1.15, 0.9, 0x06d6a0);

      facePos.set(0, 0.05, 0.74);
      faceScale = 0.82;
      break;
    }

    case 'opportunity_rover': {
      const body = new THREE.Mesh(new THREE.BoxGeometry(1.15, 0.55, 1.25), mainMat);
      body.position.set(0, -0.2, 0);
      modelGroup.add(body);

      const wings = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.08, 1.35), solarMat);
      wings.position.set(0, 0.1, -0.05);
      modelGroup.add(wings);

      const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 0.75, 10), new THREE.MeshStandardMaterial({ color: 0xffffff }));
      neck.position.set(0, 0.45, 0.38);
      const camHead = new THREE.Mesh(new THREE.BoxGeometry(1.05, 0.58, 0.52), accentMat);
      camHead.position.set(0, 0.88, 0.42);
      const visor = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.44, 0.08), darkVisorMat);
      visor.position.set(0, 0.88, 0.69);
      modelGroup.add(neck, camHead, visor);

      addWheels(modelGroup, [
        [-0.78, -0.62, 0.55], [0.78, -0.62, 0.55],
        [-0.84, -0.62, 0.0],  [0.84, -0.62, 0.0],
        [-0.78, -0.62, -0.55],[0.78, -0.62, -0.55]
      ], 0.23);

      facePos.set(0, 0.88, 0.74);
      faceScale = 0.78;
      break;
    }

    case 'insight_lander': {
      const deck = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.85, 0.45, 16), mainMat);
      deck.position.set(0, 0.0, 0);
      modelGroup.add(deck);

      const fanGeo = new THREE.CylinderGeometry(0.78, 0.78, 0.06, 10);
      const fanL = new THREE.Mesh(fanGeo, solarMat);
      fanL.position.set(-1.35, 0.12, 0);
      const fanR = new THREE.Mesh(fanGeo, solarMat);
      fanR.position.set(1.35, 0.12, 0);
      modelGroup.add(fanL, fanR);

      const dome = new THREE.Mesh(new THREE.SphereGeometry(0.32, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2), accentMat);
      dome.position.set(-0.25, 0.22, -0.15);
      modelGroup.add(dome);

      const visor = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.46, 0.1), darkVisorMat);
      visor.position.set(0, 0.02, 0.82);
      modelGroup.add(visor);

      addLanderLegs(modelGroup, [0.5, 2.6, 4.7], 0.65, 1.05, 0.85, 0xffd166);

      facePos.set(0, 0.02, 0.88);
      faceScale = 0.8;
      break;
    }

    case 'sojourner_mini': {
      const box = new THREE.Mesh(new THREE.BoxGeometry(1.15, 0.58, 1.35), mainMat);
      box.position.set(0, -0.05, 0);
      const topSolar = new THREE.Mesh(new THREE.BoxGeometry(1.22, 0.08, 1.42), solarMat);
      topSolar.position.set(0, 0.28, 0);
      modelGroup.add(box, topSolar);

      const visor = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.44, 0.08), darkVisorMat);
      visor.position.set(0, -0.05, 0.69);
      modelGroup.add(visor);

      addWheels(modelGroup, [
        [-0.68, -0.45, 0.48], [0.68, -0.45, 0.48],
        [-0.72, -0.45, 0.0],  [0.72, -0.45, 0.0],
        [-0.68, -0.45, -0.48],[0.68, -0.45, -0.48]
      ], 0.2);

      facePos.set(0, -0.05, 0.74);
      faceScale = 0.82;
      break;
    }

    case 'pioneer_dish': {
      const dish = new THREE.Mesh(
        new THREE.ConeGeometry(1.35, 0.45, 24, 1, true),
        new THREE.MeshStandardMaterial({ color: 0xf8f9fa, side: THREE.DoubleSide, roughness: 0.3 })
      );
      dish.position.set(0, 0.25, -0.35);
      dish.rotation.x = -Math.PI / 2.2;
      modelGroup.add(dish);

      const hexBody = new THREE.Mesh(new THREE.CylinderGeometry(0.68, 0.68, 0.65, 6), mainMat);
      hexBody.position.set(0, -0.1, 0.3);
      modelGroup.add(hexBody);

      const boom = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.6, 8), new THREE.MeshStandardMaterial({ color: 0x7cf3ff }));
      boom.position.set(1.15, -0.1, 0.2);
      boom.rotation.z = Math.PI / 2;
      modelGroup.add(boom);

      const visor = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.48, 0.1), darkVisorMat);
      visor.position.set(0, -0.1, 0.88);
      modelGroup.add(visor);

      facePos.set(0, -0.1, 0.94);
      faceScale = 0.82;
      break;
    }

    case 'kepler_telescope': {
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.68, 0.72, 1.55, 16), mainMat);
      barrel.position.set(0, 0.05, 0);
      modelGroup.add(barrel);

      const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.72, 0.35, 16), accentMat);
      cap.position.set(0, 0.92, 0);
      cap.rotation.z = 0.25;
      modelGroup.add(cap);

      const solarWrap = new THREE.Mesh(new THREE.BoxGeometry(1.85, 0.85, 0.08), solarMat);
      solarWrap.position.set(0, -0.25, -0.55);
      modelGroup.add(solarWrap);

      const visor = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.56, 0.1), darkVisorMat);
      visor.position.set(0, 0.1, 0.68);
      modelGroup.add(visor);

      facePos.set(0, 0.1, 0.74);
      faceScale = 0.85;
      break;
    }

    case 'dawn_wings': {
      const bus = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.95, 0.95), mainMat);
      modelGroup.add(bus);

      const longWingGeo = new THREE.BoxGeometry(1.55, 0.55, 0.06);
      const wingL = new THREE.Mesh(longWingGeo, solarMat);
      wingL.position.set(-1.35, 0, 0);
      const wingR = new THREE.Mesh(longWingGeo, solarMat);
      wingR.position.set(1.35, 0, 0);
      modelGroup.add(wingL, wingR);

      const thruster = new THREE.Mesh(new THREE.SphereGeometry(0.24, 12, 12), new THREE.MeshBasicMaterial({ color: 0x00f5d4 }));
      thruster.position.set(0, -0.58, 0);
      modelGroup.add(thruster);

      const visor = new THREE.Mesh(new THREE.BoxGeometry(0.82, 0.56, 0.1), darkVisorMat);
      visor.position.set(0, 0.05, 0.48);
      modelGroup.add(visor);

      facePos.set(0, 0.05, 0.54);
      faceScale = 0.78;
      break;
    }

    default: {
      const octBody = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.75, 0.9, 8), mainMat);
      modelGroup.add(octBody);

      [0, Math.PI / 2, Math.PI, Math.PI * 1.5].forEach((ang) => {
        const petalHolder = new THREE.Group();
        const petal = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.06, 0.95), solarMat);
        petal.position.set(0, 0.35, 0.95);
        petal.rotation.x = 0.25;
        petalHolder.add(petal);
        petalHolder.rotation.y = ang + 0.4;
        modelGroup.add(petalHolder);
      });

      const topDish = new THREE.Mesh(new THREE.ConeGeometry(0.55, 0.25, 16, 1, true), new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.DoubleSide }));
      topDish.position.set(0, 0.62, 0);
      topDish.rotation.x = Math.PI;
      modelGroup.add(topDish);

      const visor = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.52, 0.1), darkVisorMat);
      visor.position.set(0, -0.05, 0.72);
      modelGroup.add(visor);

      facePos.set(0, -0.05, 0.78);
      faceScale = 0.82;
      break;
    }
  }

  modelGroup.traverse((child) => {
    if (child.isMesh) {
      child.userData.botIndex = index;
    }
  });

  const { sleepyEyes, awakeEyes } = attachCuteAnimeFace(modelGroup, facePos, faceScale);
  const spiritGroup = buildSpiritAnimalMesh(botData.spiritType);
  modelGroup.add(spiritGroup);

  return { modelGroup, sleepyEyes, awakeEyes, animatedParts, spiritGroup };
}

function buildCuteSleeping3DBot(botData, index) {
  const rootGroup = new THREE.Group();
  rootGroup.position.set(botData.pos[0], botData.pos[1], botData.pos[2]);

  const spinGroup = new THREE.Group();
  rootGroup.add(spinGroup);

  const { modelGroup, sleepyEyes, awakeEyes, animatedParts, spiritGroup } = buildSpecificCraftGeometry(botData, index);
  spinGroup.add(modelGroup);

  // 3D Sound-Wave Visualizer Ring (Pulses while speaking!)
  const voiceRing = new THREE.Mesh(
    new THREE.RingGeometry(1.55, 1.68, 48),
    new THREE.MeshBasicMaterial({ color: 0x7cf3ff, side: THREE.DoubleSide, transparent: true, opacity: 0.75 })
  );
  voiceRing.visible = false;
  rootGroup.add(voiceRing);

  // 3D Earth-Finder Compass Pointer
  const compassGroup = new THREE.Group();
  const arrowCone = new THREE.Mesh(
    new THREE.ConeGeometry(0.14, 0.35, 10),
    new THREE.MeshBasicMaterial({ color: 0x7cf3ff })
  );
  arrowCone.position.set(1.5, 1.1, 0.3);
  arrowCone.rotation.z = -0.6;
  compassGroup.add(arrowCone);
  rootGroup.add(compassGroup);

  const alreadyAwake = awakenedBotIds.has(botData.id);
  if (alreadyAwake) {
    sleepyEyes.visible = false;
    awakeEyes.visible = true;
    spiritGroup.visible = true;
  }

  const blanket = new THREE.Mesh(
    new THREE.CylinderGeometry(0.95, 1.05, 0.72, 20, 1, false, 0, Math.PI * 1.3),
    new THREE.MeshStandardMaterial({ color: 0xff4d8d, roughness: 0.85 })
  );
  blanket.rotation.y = Math.PI * 0.85;
  blanket.position.set(0, -0.35, -0.05);
  blanket.visible = !alreadyAwake;
  spinGroup.add(blanket);

  const dirtSpecs = [];
  const dirtMat = new THREE.MeshStandardMaterial({ color: 0x6b4f3a, roughness: 1 });
  for (let d = 0; d < 18; d++) {
    const speck = new THREE.Mesh(new THREE.DodecahedronGeometry(0.13, 0), dirtMat);
    const angle = (d / 18) * Math.PI * 2;
    speck.position.set(
      Math.cos(angle) * 0.85,
      (Math.random() - 0.3) * 0.85,
      Math.sin(angle) * 0.75
    );
    speck.visible = !alreadyAwake;
    spinGroup.add(speck);
    dirtSpecs.push(speck);
  }

  const zzzGroup = new THREE.Group();
  const zMat = new THREE.MeshBasicMaterial({ color: 0x7cf3ff, transparent: true, opacity: 0.85 });
  const z1 = new THREE.Mesh(new THREE.SphereGeometry(0.14, 10, 10), zMat);
  z1.position.set(0.85, 0.95, 0.3);
  const z2 = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 10), zMat);
  z2.position.set(1.2, 1.35, 0.3);
  zzzGroup.add(z1, z2);
  zzzGroup.visible = !alreadyAwake;
  rootGroup.add(zzzGroup);

  const labelEl = document.createElement('div');
  labelEl.className = 'bot-float-tag';
  const hasStar = earnedStarIds.has(botData.id);
  labelEl.innerHTML = alreadyAwake
    ? `${botData.spiritEmoji} ${botData.name} ${hasStar ? '⭐' : ''}<br><span>${botData.spiritName}</span>`
    : `💤 ${botData.name}<br><span>Click to Wake Up!</span>`;
  labelEl.addEventListener('click', (e) => {
    e.stopPropagation();
    focusOnBot(index);
  });
  botLabelsContainer.appendChild(labelEl);

  zoneInteriorGroup.add(rootGroup);

  return {
    data: botData,
    rootGroup,
    spinGroup,
    voiceRing,
    sleepyEyes,
    awakeEyes,
    spiritGroup,
    spiritActive: alreadyAwake,
    animatedParts,
    blanket,
    dirtSpecs,
    zzzGroup,
    labelEl,
    isAwake: alreadyAwake,
    floatPhase: index * 1.7,
    bounceVelocity: 0,
    bounceOffset: 0
  };
}

// ==========================================
// 8. ENTERING & EXITING PLANET ZONES
// ==========================================
const targetCamPos = new THREE.Vector3(0, 1.5, 22);
const targetLookAt = new THREE.Vector3(0, 0, 0);

function enterPlanetZone(zoneId) {
  appMode = 'ZONE';
  currentZoneId = zoneId;
  selectedBotObj = null;
  roverCamActive = false;

  galaxyGroup.visible = false;
  document.getElementById('label-moon').classList.add('hidden');
  document.getElementById('label-mars').classList.add('hidden');
  document.getElementById('label-deepspace').classList.add('hidden');
  navPad.classList.add('hidden');
  timelineBar.classList.add('hidden');
  ogPicWrapper.classList.add('hidden');
  backMapBtn.classList.remove('hidden');
  weatherBtn.classList.remove('hidden');

  while (zoneInteriorGroup.children.length > 0) {
    zoneInteriorGroup.remove(zoneInteriorGroup.children[0]);
  }
  botLabelsContainer.innerHTML = '';
  zoneBots = [];

  buildZoneEnvironment(zoneId);

  const zoneNames = {
    moon: '🌙 THE MOON — SLEEPING ROBOTS',
    mars: '🔴 MARS — SLEEPING ROBOTS',
    deepspace: '🌌 DEEP SPACE — SLEEPING ROBOTS'
  };
  hudZoneTitle.textContent = zoneNames[zoneId];

  const list = BOT_DATABASE[zoneId];
  list.forEach((botData, idx) => {
    zoneBots.push(buildCuteSleeping3DBot(botData, idx));
  });

  zoneInteriorGroup.visible = true;
  targetCamPos.set(0, 0.5, 15);
  targetLookAt.set(0, 0, 0);
}

function returnToGalaxyMap() {
  appMode = 'GALAXY';
  currentZoneId = null;
  selectedBotObj = null;
  roverCamActive = false;
  activeTool = null;
  toolCursor.classList.add('hidden');
  ogPicWrapper.classList.add('hidden');

  zoneInteriorGroup.visible = false;
  botLabelsContainer.innerHTML = '';
  carePanel.classList.add('hidden');
  backMapBtn.classList.add('hidden');
  weatherBtn.classList.add('hidden');

  galaxyGroup.visible = true;
  document.getElementById('label-moon').classList.remove('hidden');
  document.getElementById('label-mars').classList.remove('hidden');
  document.getElementById('label-deepspace').classList.remove('hidden');
  navPad.classList.remove('hidden');
  timelineBar.classList.remove('hidden');

  hudZoneTitle.textContent = I18N[LANG_LIST[currentLangIndex]].galaxyTitle;
  targetCamPos.set(0, 1.5, 22);
  targetLookAt.set(0, 0, 0);
}

// ==========================================
// 9. ZOOMING INTO A BOT + GRAVITY SIMULATOR + ROVER CAM
// ==========================================
function focusOnBot(index) {
  appMode = 'BOT_FOCUS';
  selectedBotObj = zoneBots[index];
  roverCamActive = false;
  document.getElementById('rover-cam-btn').textContent = '👁️ Rover Cam: OFF';

  zoneBots.forEach(b => b.labelEl.classList.add('hidden'));

  const p = selectedBotObj.rootGroup.position;
  targetCamPos.set(p.x, p.y + 0.1, p.z + 4.4);
  targetLookAt.set(p.x, p.y - 0.35, p.z);

  loadRealNasaPhoto(selectedBotObj.data);
  ogPicCaption.textContent = `Real ${selectedBotObj.data.name}`;
  document.getElementById('telemetry-strip').textContent = `📡 ${selectedBotObj.data.distanceFromEarth}`;
  document.getElementById('size-visual-emojis').textContent = selectedBotObj.data.sizeEmojis;
  document.getElementById('size-compare-text').textContent = selectedBotObj.data.sizeDesc;
  document.getElementById('size-compare-box').classList.add('hidden');
  ogPicWrapper.classList.remove('hidden');

  document.getElementById('care-bot-name').textContent = selectedBotObj.data.name;
  document.getElementById('food-icon').textContent = selectedBotObj.data.foodIcon;
  document.getElementById('food-name').textContent = `2. ${selectedBotObj.data.foodName}`;

  const spiritToggleBtn = document.getElementById('spirit-toggle-btn');
  const reopenStoryBtn = document.getElementById('reopen-story-btn');

  if (selectedBotObj.isAwake) {
    document.getElementById('bot-status-badge').textContent = `${selectedBotObj.data.spiritEmoji} SPIRIT FORM: ${selectedBotObj.data.spiritName.toUpperCase()}`;
    document.getElementById('step-instruction').textContent = 'Awake! Drag/scroll 360°, test planet gravity, switch to Rover Cam, or reopen its story!';
    document.getElementById('care-progress-fill').style.width = '100%';
    spiritToggleBtn.classList.remove('hidden');
    spiritToggleBtn.textContent = selectedBotObj.spiritActive ? `${selectedBotObj.data.spiritEmoji} Spirit: ON` : '🤖 Bot: ON';
    reopenStoryBtn.classList.remove('hidden');
    reopenCurrentStory();
  } else {
    spiritToggleBtn.classList.add('hidden');
    reopenStoryBtn.classList.add('hidden');
    resetCareSteps();
  }

  carePanel.classList.remove('hidden');
}

function testGravityBounce() {
  if (!selectedBotObj) return;
  selectedBotObj.bounceVelocity = 0.24;
  playSoundEffect('feed');
  const gPct = Math.round(selectedBotObj.data.gravityRatio * 100);
  document.getElementById('gravity-readout').textContent =
    `🪐 Testing ${selectedBotObj.data.zoneLabel} Gravity (${gPct}% of Earth's pull) — watch how slowly it floats down!`;
}

function toggleRoverCam() {
  if (!selectedBotObj) return;
  roverCamActive = !roverCamActive;
  const btn = document.getElementById('rover-cam-btn');
  btn.textContent = roverCamActive ? '👁️ Rover Cam: ON' : '👁️ Rover Cam: OFF';
  const p = selectedBotObj.rootGroup.position;

  if (roverCamActive) {
    // First-person POV looking out from behind the bot's visor!
    targetCamPos.set(p.x, p.y + 0.35, p.z + 0.55);
    targetLookAt.set(p.x + Math.sin(selectedBotObj.spinGroup.rotation.y) * 8, p.y - 0.4, p.z + 8);
  } else {
    targetCamPos.set(p.x, p.y + 0.1, p.z + 4.4);
    targetLookAt.set(p.x, p.y - 0.35, p.z);
  }
  playSoundEffect('feed');
}

function toggleSizeBox() {
  document.getElementById('size-compare-box').classList.toggle('hidden');
  playSoundEffect('feed');
}

function toggleSpiritForm() {
  if (!selectedBotObj || !selectedBotObj.isAwake) return;
  selectedBotObj.spiritActive = !selectedBotObj.spiritActive;
  selectedBotObj.spiritGroup.visible = selectedBotObj.spiritActive;
  const btn = document.getElementById('spirit-toggle-btn');
  btn.textContent = selectedBotObj.spiritActive
    ? `${selectedBotObj.data.spiritEmoji} Spirit: ON`
    : '🤖 Bot: ON';
  playSoundEffect('feed');
}

function reopenCurrentStory() {
  if (!selectedBotObj) return;
  populateStoryModal(selectedBotObj.data);
  storyModal.classList.remove('hidden');
}

function exitBotFocus() {
  appMode = 'ZONE';
  selectedBotObj = null;
  roverCamActive = false;
  activeTool = null;
  toolCursor.classList.add('hidden');
  carePanel.classList.add('hidden');
  ogPicWrapper.classList.add('hidden');

  zoneBots.forEach(b => b.labelEl.classList.remove('hidden'));
  targetCamPos.set(0, 0.5, 15);
  targetLookAt.set(0, 0, 0);
}

function resetCareSteps() {
  careStep = 1;
  activeTool = null;
  cleanProgress = 0;
  feedProgress = 0;
  toolCursor.classList.add('hidden');

  document.getElementById('bot-status-badge').textContent = '💤 SLEEPING SOUNDLY';
  document.getElementById('care-progress-fill').style.width = '0%';
  document.getElementById('step-instruction').textContent = 'Step 1: Click the Space Brush below, then rub your mouse over the bot to clean off the dust!';

  const bBtn = document.getElementById('tool-brush');
  const fBtn = document.getElementById('tool-food');
  const wBtn = document.getElementById('tool-wand');

  bBtn.className = 'tool-btn active-step';
  bBtn.disabled = false;
  document.getElementById('brush-sub').textContent = 'Click to pick up!';

  fBtn.className = 'tool-btn locked';
  fBtn.disabled = true;
  document.getElementById('food-sub').textContent = 'Locked (Clean first)';

  wBtn.className = 'tool-btn locked';
  wBtn.disabled = true;
  document.getElementById('wand-sub').textContent = 'Locked (Feed first)';
}

function selectTool(tool) {
  if (!selectedBotObj || selectedBotObj.isAwake) return;

  if (tool === 'brush' && careStep === 1) {
    activeTool = 'brush';
    toolCursor.textContent = '🧹';
    toolCursor.classList.remove('hidden');
    document.getElementById('tool-brush').classList.add('selected-tool');
    document.getElementById('brush-sub').textContent = 'Scrub over the 3D bot!';
  } else if (tool === 'food' && careStep === 2) {
    activeTool = 'food';
    toolCursor.textContent = selectedBotObj.data.foodIcon;
    toolCursor.classList.remove('hidden');
    document.getElementById('tool-food').classList.add('selected-tool');
    document.getElementById('food-sub').textContent = 'Click/tap the bot to feed!';
  } else if (tool === 'wand' && careStep === 3) {
    activeTool = 'wand';
    toolCursor.textContent = '🪄';
    toolCursor.classList.remove('hidden');
    document.getElementById('tool-wand').classList.add('selected-tool');
    document.getElementById('wand-sub').textContent = 'Tap the bot to wake up!';
  }
}

let lastBrushSoundTime = 0;

function applyCareAction(amount = 14) {
  if (!selectedBotObj || !activeTool) return;

  selectedBotObj.spinGroup.rotation.z = (Math.random() - 0.5) * 0.25;

  if (careStep === 1 && activeTool === 'brush') {
    const now = Date.now();
    if (now - lastBrushSoundTime > 160) {
      playSoundEffect('brush');
      lastBrushSoundTime = now;
    }

    cleanProgress = Math.min(100, cleanProgress + amount);
    document.getElementById('care-progress-fill').style.width = `${cleanProgress * 0.33}%`;

    const totalDirt = selectedBotObj.dirtSpecs.length;
    const remaining = Math.ceil(((100 - cleanProgress) / 100) * totalDirt);
    selectedBotObj.dirtSpecs.forEach((speck, idx) => {
      speck.visible = idx < remaining;
    });

    if (cleanProgress >= 100) {
      careStep = 2;
      activeTool = null;
      toolCursor.classList.add('hidden');
      const bBtn = document.getElementById('tool-brush');
      bBtn.className = 'tool-btn done-step';
      document.getElementById('brush-sub').textContent = 'Sparkling Clean! ✔';

      const fBtn = document.getElementById('tool-food');
      fBtn.disabled = false;
      fBtn.className = 'tool-btn active-step';
      document.getElementById('food-sub').textContent = 'Unlocked! Click to pick up';
      document.getElementById('step-instruction').textContent = `Step 2: Great job! Now pick up ${selectedBotObj.data.foodName} and feed the bot!`;
    }
  }
  else if (careStep === 2 && activeTool === 'food') {
    playSoundEffect('feed');
    feedProgress = Math.min(100, feedProgress + 35);
    document.getElementById('care-progress-fill').style.width = `${33 + feedProgress * 0.33}%`;

    if (feedProgress >= 100) {
      careStep = 3;
      activeTool = null;
      toolCursor.classList.add('hidden');
      const fBtn = document.getElementById('tool-food');
      fBtn.className = 'tool-btn done-step';
      document.getElementById('food-sub').textContent = 'Full Energy! ✔';

      const wBtn = document.getElementById('tool-wand');
      wBtn.disabled = false;
      wBtn.className = 'tool-btn active-step';
      document.getElementById('wand-sub').textContent = 'Unlocked! Click to pick up';
      document.getElementById('step-instruction').textContent = 'Step 3: Energy at 100%! Pick up the Boop Wand and touch the bot to wake it up!';
    }
  }
  else if (careStep === 3 && activeTool === 'wand') {
    wakeUpSelectedBot();
  }
}

function wakeUpSelectedBot() {
  careStep = 4;
  activeTool = null;
  toolCursor.classList.add('hidden');
  selectedBotObj.isAwake = true;
  selectedBotObj.spiritActive = true;

  awakenedBotIds.add(selectedBotObj.data.id);
  saveProgress();

  selectedBotObj.sleepyEyes.visible = false;
  selectedBotObj.awakeEyes.visible = true;
  selectedBotObj.spiritGroup.visible = true;
  selectedBotObj.blanket.visible = false;
  selectedBotObj.zzzGroup.visible = false;
  selectedBotObj.spinGroup.rotation.z = 0;
  const hasStar = earnedStarIds.has(selectedBotObj.data.id);
  selectedBotObj.labelEl.innerHTML = `${selectedBotObj.data.spiritEmoji} ${selectedBotObj.data.name} ${hasStar ? '⭐' : ''}<br><span>${selectedBotObj.data.spiritName}</span>`;

  playSoundEffect('wakeup');
  triggerSparkleBurst(selectedBotObj.rootGroup.position);

  const wBtn = document.getElementById('tool-wand');
  wBtn.className = 'tool-btn done-step';
  document.getElementById('wand-sub').textContent = 'Awakened! ✔';
  document.getElementById('bot-status-badge').textContent = `${selectedBotObj.data.spiritEmoji} SPIRIT FORM: ${selectedBotObj.data.spiritName.toUpperCase()}`;
  document.getElementById('care-progress-fill').style.width = '100%';
  document.getElementById('step-instruction').textContent = `🎉 Woah! ${selectedBotObj.data.name} transformed into ${selectedBotObj.data.spiritName}!`;

  const spiritToggleBtn = document.getElementById('spirit-toggle-btn');
  spiritToggleBtn.classList.remove('hidden');
  spiritToggleBtn.textContent = `${selectedBotObj.data.spiritEmoji} Spirit: ON`;
  document.getElementById('reopen-story-btn').classList.remove('hidden');

  populateStoryModal(selectedBotObj.data);
  setTimeout(() => {
    storyModal.classList.remove('hidden');
    replayBotVoice();
  }, 750);
}

// ==========================================
// 10. STORY MODAL, CUSTOM AI CHAT, QUIZ, POSTCARD, SELFIE & TEACHER SHEET
// ==========================================
function populateStoryModal(botData) {
  document.getElementById('story-spirit-badge').textContent = `✨ SPIRIT ANIMAL: ${botData.spiritName.toUpperCase()} ✨`;
  document.getElementById('story-bot-title').textContent = botData.name;
  document.getElementById('story-thankyou').textContent = `"${botData.thankYou}"`;
  document.getElementById('story-about').textContent = botData.about;

  const hasStar = earnedStarIds.has(botData.id);
  document.getElementById('quiz-star-badge').textContent = hasStar ? '⭐ Gold Star Earned!' : '☆ Earn a Gold Star';
  document.getElementById('quiz-question-text').textContent = botData.quiz.q;
  const feedbackEl = document.getElementById('quiz-feedback-text');
  feedbackEl.classList.add('hidden');

  const optsRow = document.getElementById('quiz-options-row');
  optsRow.innerHTML = '';
  botData.quiz.options.forEach((optText, idx) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-opt-btn';
    if (hasStar && idx === botData.quiz.correctIndex) btn.classList.add('correct');
    btn.textContent = optText;
    btn.onclick = () => handleQuizAnswer(idx, btn);
    optsRow.appendChild(btn);
  });

  document.getElementById('data-nssdca-id').textContent = botData.nssdca.id;
  document.getElementById('data-launch').textContent = botData.nssdca.launch;
  document.getElementById('data-location').textContent = botData.nssdca.location;
  document.getElementById('data-duration').textContent = botData.nssdca.duration;
  document.getElementById('data-discovery').textContent = botData.nssdca.discovery;
  document.getElementById('data-status').textContent = botData.nssdca.status;

  document.getElementById('ask-answer-box').classList.add('hidden');
  document.getElementById('custom-ai-question').value = '';
  switchStoryTab('story');

  const nasaLinkEl = document.getElementById('nasa-official-link');
  nasaLinkEl.href = botData.nasaUrl;
  nasaLinkEl.textContent = `🛰️ Explore ${botData.name} on NASA.gov ➔`;
}

function handleQuizAnswer(chosenIndex, clickedBtn) {
  if (!selectedBotObj) return;
  const botData = selectedBotObj.data;
  const feedbackEl = document.getElementById('quiz-feedback-text');

  if (chosenIndex === botData.quiz.correctIndex) {
    clickedBtn.classList.add('correct');
    earnedStarIds.add(botData.id);
    saveProgress();
    playSoundEffect('wakeup');
    document.getElementById('quiz-star-badge').textContent = '⭐ Gold Star Earned!';
    feedbackEl.style.color = '#06d6a0';
    feedbackEl.textContent = '🎉 Spot on! You earned a Gold Star for your Sanctuary Passport!';
    feedbackEl.classList.remove('hidden');
    selectedBotObj.labelEl.innerHTML = `${botData.spiritEmoji} ${botData.name} ⭐<br><span>${botData.spiritName}</span>`;
  } else {
    clickedBtn.classList.add('wrong');
    feedbackEl.style.color = '#ff77c8';
    feedbackEl.textContent = '💫 Almost! Check the story above and try another answer!';
    feedbackEl.classList.remove('hidden');
  }
}

function switchStoryTab(tab) {
  const isStory = tab === 'story';
  document.getElementById('tab-story-btn').classList.toggle('active', isStory);
  document.getElementById('tab-data-btn').classList.toggle('active', !isStory);
  document.getElementById('tab-content-story').classList.toggle('hidden', !isStory);
  document.getElementById('tab-content-data').classList.toggle('hidden', isStory);
}

function askBotQuestion(qKey) {
  if (!selectedBotObj) return;
  const answer = selectedBotObj.data.qa[qKey];
  const box = document.getElementById('ask-answer-box');
  box.textContent = `💬 "${answer}"`;
  box.classList.remove('hidden');
  speakText(answer, 1.38);
}

function askCustomAiQuestion() {
  if (!selectedBotObj) return;
  const input = document.getElementById('custom-ai-question').value.trim();
  if (!input) return;

  const q = input.toLowerCase();
  const bot = selectedBotObj.data;
  let reply = "";

  if (q.includes('water') || q.includes('ice')) {
    reply = `Great question! Here on ${bot.zoneLabel}, NASA instruments discovered frozen water ice in shadowed craters and ancient river minerals—proving water shaped this world!`;
  } else if (q.includes('cold') || q.includes('hot') || q.includes('temp') || q.includes('weather')) {
    reply = `Out here at ${bot.nssdca.location}, temperatures swing wildly between freezing cosmic nights and intense solar radiation—that's why my gold thermal blankets and heaters are so important!`;
  } else if (q.includes('how far') || q.includes('distance') || q.includes('earth')) {
    reply = `Right now I am ${bot.distanceFromEarth} away from Earth! Radio signals travel at the speed of light to reach NASA's Deep Space Network.`;
  } else if (q.includes('spirit') || q.includes('animal')) {
    reply = bot.qa.spirit;
  } else {
    reply = `Beep-boop! From my post at ${bot.nssdca.location}, my biggest achievement was: ${bot.nssdca.discovery}. Tap the Official NASA Page link below to inspect my full mission logs!`;
  }

  const box = document.getElementById('ask-answer-box');
  box.textContent = `🤖 ${bot.name}: "${reply}"`;
  box.classList.remove('hidden');
  speakText(reply, 1.38);
}

function replayBotVoice() {
  if (!selectedBotObj) return;
  const fullSpeech = `${selectedBotObj.data.thankYou} ${selectedBotObj.data.about}`;
  speakText(fullSpeech, 1.38);
}

function closeStoryAndKeepExploring() {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  storyModal.classList.add('hidden');
}

// BUILD-YOUR-OWN 13TH CUSTOM ROVER SANDBOX
function openBuilderModal() {
  builderModal.classList.remove('hidden');
}
function closeBuilderModal() {
  builderModal.classList.add('hidden');
}

function launchCustom13thBot() {
  const nameInput = document.getElementById('custom-bot-name').value.trim() || 'Astro-Explorer XIII';
  const zoneId = document.getElementById('custom-bot-zone').value;
  const shape = document.getElementById('custom-bot-shape').value;
  const spiritType = document.getElementById('custom-bot-spirit').value;

  const spiritMap = {
    hound: { name: 'Cosmic Hound 🐕', emoji: '🐕' },
    rabbit: { name: 'Lunar Bunny 🐇', emoji: '🐇' },
    eagle: { name: 'Solar Eagle 🦅', emoji: '🦅' },
    whale: { name: 'Star Whale 🐋', emoji: '🐋' }
  };

  const newBot = {
    id: 'custom_' + Date.now(),
    zoneLabel: zoneId === 'moon' ? 'The Moon' : zoneId === 'mars' ? 'Mars' : 'Deep Space',
    launchYear: 2026,
    gravityRatio: zoneId === 'moon' ? 0.16 : zoneId === 'mars' ? 0.38 : 0.02,
    distanceFromEarth: 'Custom Student Mission (2026)',
    radioQuote: `${nameInput} reporting from ${zoneId.toUpperCase()}! All custom systems nominal.`,
    shape,
    spiritType,
    spiritName: spiritMap[spiritType].name,
    spiritEmoji: spiritMap[spiritType].emoji,
    name: nameInput,
    nasaSearchQuery: 'NASA spacecraft rover',
    foodName: 'Supernova Star-Cookies',
    foodIcon: '🍪',
    bodyColor: 0xff77c8,
    accentColor: 0x7cf3ff,
    pos: [0, 2.6, 2.5],
    sizeEmojis: '🧒 🆚 🚀',
    sizeDesc: 'Custom student-engineered NASA explorer!',
    thankYou: `BEEP-BOOP! I'm ${nameInput}, the custom spacecraft YOU designed! Thanks for launching me and waking me up!`,
    about: `Built in the NASA Spacecraft Design Lab for 2026 exploration, I combine custom solar arrays, deep-space sensors, and the ${spiritMap[spiritType].name} spirit!`,
    quiz: {
      q: `Who engineered ${nameInput} in the Design Lab?`,
      options: ["You, the Space Explorer!", "Martian Penguins", "Saturn's Rings"],
      correctIndex: 0
    },
    qa: {
      scary: "Launching through Earth's atmosphere at 28,000 kilometers per hour—what a thrill!",
      view: "I'm floating right beside NASA's legendary spacecraft in 3D space!",
      spirit: `You paired my chassis with the ${spiritMap[spiritType].name} spirit!`
    },
    nssdca: {
      id: '2026-CUSTOM-13',
      launch: 'November 2026 (Student Design Lab)',
      location: `${zoneId.toUpperCase()} Sanctuary`,
      duration: 'Active 2026 Student Mission',
      discovery: 'Custom student-engineered spacecraft prototype',
      status: 'Active & Exploring!'
    },
    nasaUrl: "https://www.nasa.gov/missions/",
    imageUrl: "https://images-assets.nasa.gov/image/PIA24648/PIA24648~medium.jpg"
  };

  BOT_DATABASE[zoneId].push(newBot);
  closeBuilderModal();
  enterPlanetZone(zoneId);
  playSoundEffect('wakeup');
}

// WEBCAM SPACE SELFIE BOOTH
let webcamStream = null;
async function openSelfieModal() {
  if (!selectedBotObj) return;
  document.getElementById('selfie-bot-name').textContent = selectedBotObj.data.name;
  document.getElementById('selfie-overlay-badge').textContent =
    `${selectedBotObj.data.spiritEmoji} ${selectedBotObj.data.spiritName}`;
  selfieModal.classList.remove('hidden');

  try {
    webcamStream = await navigator.mediaDevices.getUserMedia({ video: true });
    document.getElementById('selfie-video').srcObject = webcamStream;
  } catch (err) {
    // Works even if laptop has no webcam or permission denied
  }
}

function closeSelfieModal() {
  selfieModal.classList.add('hidden');
  if (webcamStream) {
    webcamStream.getTracks().forEach(t => t.stop());
    webcamStream = null;
  }
}

function captureAndDownloadSelfie() {
  if (!selectedBotObj) return;
  const bot = selectedBotObj.data;
  const video = document.getElementById('selfie-video');

  const c = document.createElement('canvas');
  c.width = 640;
  c.height = 480;
  const ctx = c.getContext('2d');

  if (video && video.readyState >= 2) {
    ctx.save();
    ctx.translate(640, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video, 0, 0, 640, 480);
    ctx.restore();
  } else {
    ctx.fillStyle = '#130b36';
    ctx.fillRect(0, 0, 640, 480);
  }

  ctx.strokeStyle = '#ffd86b';
  ctx.lineWidth = 10;
  ctx.strokeRect(10, 10, 620, 460);

  ctx.fillStyle = 'rgba(16, 12, 42, 0.88)';
  ctx.fillRect(20, 390, 600, 70);
  ctx.fillStyle = '#7cf3ff';
  ctx.font = 'bold 22px sans-serif';
  ctx.fillText(`${bot.spiritEmoji} Cosmic Selfie with ${bot.name}!`, 38, 432);

  const link = document.createElement('a');
  link.download = `Cosmic-Selfie-${bot.id}.png`;
  link.href = c.toDataURL('image/png');
  link.click();
  playSoundEffect('wakeup');
}

// POSTCARD, CERTIFICATE & TEACHER WORKSHEET EXPORTS
function downloadBotPostcard() {
  if (!selectedBotObj) return;
  const bot = selectedBotObj.data;
  const explorerName = document.getElementById('guardian-name-input').value.trim() || 'Space Explorer';

  const c = document.createElement('canvas');
  c.width = 800;
  c.height = 520;
  const ctx = c.getContext('2d');

  const grad = ctx.createLinearGradient(0, 0, 800, 520);
  grad.addColorStop(0, '#160d3d');
  grad.addColorStop(1, '#31156e');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 800, 520);

  ctx.strokeStyle = '#ffd86b';
  ctx.lineWidth = 8;
  ctx.strokeRect(18, 18, 764, 484);

  ctx.strokeStyle = '#7cf3ff';
  ctx.lineWidth = 3;
  ctx.strokeRect(635, 38, 120, 95);
  ctx.fillStyle = '#7cf3ff';
  ctx.font = 'bold 16px monospace';
  ctx.textAlign = 'center';
  ctx.fillText('NASA ARCHIVE', 695, 65);
  ctx.font = '34px sans-serif';
  ctx.fillText(bot.spiritEmoji, 695, 108);

  ctx.fillStyle = 'rgba(124, 243, 255, 0.14)';
  ctx.beginPath();
  ctx.arc(170, 260, 110, 0, Math.PI * 2);
  ctx.fill();
  ctx.font = '115px sans-serif';
  ctx.fillText(bot.spiritEmoji, 170, 300);

  ctx.textAlign = 'left';
  ctx.fillStyle = '#ffd86b';
  ctx.font = 'bold 26px sans-serif';
  ctx.fillText(`GREETINGS FROM ${bot.zoneLabel.toUpperCase()}!`, 315, 175);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 30px sans-serif';
  ctx.fillText(bot.name, 315, 225);

  ctx.fillStyle = '#ff77c8';
  ctx.font = 'bold 22px sans-serif';
  ctx.fillText(`Spirit Form: ${bot.spiritName}`, 315, 265);

  ctx.fillStyle = '#cfe3ff';
  ctx.font = '18px sans-serif';
  ctx.fillText(`Awakened & befriended by: ${explorerName}`, 315, 320);
  ctx.fillText(`NSSDCA ID: ${bot.nssdca.id}`, 315, 355);
  ctx.fillText(`Cosmic Sleepover & Spirit Bots • ${new Date().toLocaleDateString()}`, 315, 425);

  const link = document.createElement('a');
  link.download = `Space-Postcard-${bot.id}.png`;
  link.href = c.toDataURL('image/png');
  link.click();
}

function downloadTeacherWorksheet() {
  const allBots = [...BOT_DATABASE.moon, ...BOT_DATABASE.mars, ...BOT_DATABASE.deepspace];
  let content = "COSMIC SLEEPOVER 3D — CLASSROOM STEM WORKSHEET & ANSWER KEY\n";
  content += "=============================================================\n\n";
  allBots.forEach((b, i) => {
    content += `${i + 1}. ${b.name} (${b.zoneLabel} | NSSDCA ID: ${b.nssdca.id})\n`;
    content += `   Key Discovery: ${b.nssdca.discovery}\n`;
    content += `   Quiz Question: ${b.quiz.q}\n`;
    content += `   Answer: ${b.quiz.options[b.quiz.correctIndex]}\n\n`;
  });

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const link = document.createElement('a');
  link.download = 'Cosmic-Sleepover-Classroom-Worksheet.txt';
  link.href = URL.createObjectURL(blob);
  link.click();
}

function openPassportModal() {
  const grid = document.getElementById('sticker-grid');
  grid.innerHTML = '';
  document.getElementById('passport-total').textContent = awakenedBotIds.size;
  document.getElementById('passport-stars').textContent = earnedStarIds.size;

  const allBots = [...BOT_DATABASE.moon, ...BOT_DATABASE.mars, ...BOT_DATABASE.deepspace];
  allBots.forEach((b) => {
    const unlocked = awakenedBotIds.has(b.id);
    const hasStar = earnedStarIds.has(b.id);
    const slot = document.createElement('div');
    slot.className = `sticker-slot ${unlocked ? 'unlocked' : ''}`;
    slot.innerHTML = `
      ${hasStar ? '<div class="gold-star-pin">⭐</div>' : ''}
      <div class="sticker-emoji">${unlocked ? b.spiritEmoji : '💤'}</div>
      <div class="sticker-title">${b.name}</div>
      <div class="sticker-spirit">${unlocked ? b.spiritName : 'Still Sleeping'}</div>
    `;
    grid.appendChild(slot);
  });

  passportModal.classList.remove('hidden');
}

function closePassportModal() {
  passportModal.classList.add('hidden');
}

function downloadGuardianCertificate() {
  const rawName = document.getElementById('guardian-name-input').value.trim();
  const explorerName = rawName || 'Cosmic Space Explorer';

  const c = document.createElement('canvas');
  c.width = 1000;
  c.height = 700;
  const ctx = c.getContext('2d');

  const grad = ctx.createLinearGradient(0, 0, 1000, 700);
  grad.addColorStop(0, '#130b36');
  grad.addColorStop(1, '#26145c');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1000, 700);

  ctx.strokeStyle = '#ffd86b';
  ctx.lineWidth = 10;
  ctx.strokeRect(28, 28, 944, 644);
  ctx.strokeStyle = '#7cf3ff';
  ctx.lineWidth = 4;
  ctx.strokeRect(44, 44, 912, 612);

  ctx.fillStyle = '#ffd86b';
  ctx.font = 'bold 28px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('🚀 COSMIC SLEEPOVER & SPIRIT BOTS SANCTUARY 🚀', 500, 115);

  ctx.fillStyle = '#7cf3ff';
  ctx.font = 'bold 46px sans-serif';
  ctx.fillText('OFFICIAL COSMIC GUARDIAN CERTIFICATE', 500, 185);

  ctx.fillStyle = '#e4e8ff';
  ctx.font = '24px sans-serif';
  ctx.fillText('This certifies that', 500, 255);

  ctx.fillStyle = '#ff77c8';
  ctx.font = 'bold 52px sans-serif';
  ctx.fillText(explorerName, 500, 325);

  ctx.fillStyle = '#ffffff';
  ctx.font = '23px sans-serif';
  ctx.fillText(`Awakened ${awakenedBotIds.size}/12 NASA Spacecraft & Earned ${earnedStarIds.size}/12 Gold Stars!`, 500, 395);

  const allBots = [...BOT_DATABASE.moon, ...BOT_DATABASE.mars, ...BOT_DATABASE.deepspace];
  const emojis = allBots.map(b => awakenedBotIds.has(b.id) ? b.spiritEmoji : '⭐').join('  ');
  ctx.font = '34px sans-serif';
  ctx.fillText(emojis, 500, 475);

  ctx.fillStyle = '#ffd86b';
  ctx.font = '20px monospace';
  ctx.fillText(`Issued by ASTRO-PIP • NASA Space Apps Edition • ${new Date().toLocaleDateString()}`, 500, 585);

  const link = document.createElement('a');
  link.download = `Cosmic-Guardian-${explorerName.replace(/\s+/g, '-')}.png`;
  link.href = c.toDataURL('image/png');
  link.click();
}

// ==========================================
// 11. CAMERA MOVEMENT, 360° BOT SPIN & INTERACTION
// ==========================================
const keys = {};
window.addEventListener('keydown', (e) => { keys[e.key.toLowerCase()] = true; });
window.addEventListener('keyup', (e) => { keys[e.key.toLowerCase()] = false; });

function moveGalaxyCamera(dx, dy) {
  targetCamPos.x = THREE.MathUtils.clamp(targetCamPos.x + dx, -18, 18);
  targetCamPos.y = THREE.MathUtils.clamp(targetCamPos.y + dy, -10, 12);
}

document.getElementById('btn-left').addEventListener('click', () => moveGalaxyCamera(-3.5, 0));
document.getElementById('btn-right').addEventListener('click', () => moveGalaxyCamera(3.5, 0));
document.getElementById('btn-up').addEventListener('click', () => moveGalaxyCamera(0, 2.8));
document.getElementById('btn-down').addEventListener('click', () => moveGalaxyCamera(0, -2.8));
document.getElementById('btn-reset').addEventListener('click', () => targetCamPos.set(0, 1.5, 22));

let isDragging = false;
let didDrag = false;
let prevMouse = { x: 0, y: 0 };
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

canvas.addEventListener('mousedown', (e) => {
  isDragging = true;
  didDrag = false;
  prevMouse = { x: e.clientX, y: e.clientY };
});

window.addEventListener('mousemove', (e) => {
  if (activeTool) {
    toolCursor.style.left = `${e.clientX}px`;
    toolCursor.style.top = `${e.clientY}px`;
  }

  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

  if (appMode === 'BOT_FOCUS' && activeTool === 'brush' && selectedBotObj) {
    raycaster.setFromCamera(mouse, camera);
    const hits = raycaster.intersectObjects(selectedBotObj.spinGroup.children, true);
    if (hits.length > 0) {
      applyCareAction(4.5);
    }
  }

  if (!isDragging) return;
  const dx = e.clientX - prevMouse.x;
  const dy = e.clientY - prevMouse.y;
  if (Math.abs(dx) > 2 || Math.abs(dy) > 2) didDrag = true;

  if (appMode === 'GALAXY') {
    moveGalaxyCamera(-dx * 0.03, dy * 0.03);
  } else if (appMode === 'BOT_FOCUS' && selectedBotObj) {
    selectedBotObj.spinGroup.rotation.y += dx * 0.015;
    selectedBotObj.spinGroup.rotation.x = THREE.MathUtils.clamp(
      selectedBotObj.spinGroup.rotation.x + dy * 0.01,
      -0.6,
      0.6
    );
  }

  prevMouse = { x: e.clientX, y: e.clientY };
});

window.addEventListener('mouseup', () => { isDragging = false; });

window.addEventListener('wheel', (e) => {
  if (appMode === 'GALAXY') {
    targetCamPos.z = THREE.MathUtils.clamp(targetCamPos.z + e.deltaY * 0.01, 11, 32);
  } else if (appMode === 'BOT_FOCUS' && selectedBotObj) {
    selectedBotObj.spinGroup.rotation.y += e.deltaY * 0.004;
  }
});

canvas.addEventListener('click', (e) => {
  if (didDrag) return;
  if (
    !introOverlay.classList.contains('hidden') ||
    !storyModal.classList.contains('hidden') ||
    !passportModal.classList.contains('hidden') ||
    !builderModal.classList.contains('hidden') ||
    !selfieModal.classList.contains('hidden')
  ) return;

  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);

  const starHeads = shootingStars.map(s => s.head);
  if (starHeads.length > 0) {
    const starHits = raycaster.intersectObjects(starHeads);
    if (starHits.length > 0) {
      triggerWishEvent();
      return;
    }
  }

  if (appMode === 'GALAXY') {
    const hits = raycaster.intersectObjects(clickablePlanets);
    if (hits.length > 0) {
      enterPlanetZone(hits[0].object.userData.zoneId);
    }
  } else if (appMode === 'ZONE') {
    const botMeshes = zoneBots.map(b => b.spinGroup);
    const hits = raycaster.intersectObjects(botMeshes, true);
    if (hits.length > 0) {
      let obj = hits[0].object;
      while (obj && obj.userData.botIndex === undefined) obj = obj.parent;
      if (obj && obj.userData.botIndex !== undefined) {
        focusOnBot(obj.userData.botIndex);
      }
    }
  } else if (appMode === 'BOT_FOCUS' && selectedBotObj && activeTool) {
    const hits = raycaster.intersectObjects(selectedBotObj.spinGroup.children, true);
    if (hits.length > 0) {
      applyCareAction(35);
    }
  }
});

document.getElementById('label-moon').addEventListener('click', (e) => { e.stopPropagation(); enterPlanetZone('moon'); });
document.getElementById('label-mars').addEventListener('click', (e) => { e.stopPropagation(); enterPlanetZone('mars'); });
document.getElementById('label-deepspace').addEventListener('click', (e) => { e.stopPropagation(); enterPlanetZone('deepspace'); });

// ==========================================
// 12. PROJECT 3D POSITIONS TO 2D HTML TAGS
// ==========================================
const labelMoon = document.getElementById('label-moon');
const labelMars = document.getElementById('label-mars');
const labelDeep = document.getElementById('label-deepspace');

function projectToScreen(mesh, element, yOffset) {
  const pos = new THREE.Vector3();
  mesh.getWorldPosition(pos);
  pos.y -= yOffset;
  pos.project(camera);
  element.style.left = `${(pos.x * 0.5 + 0.5) * window.innerWidth}px`;
  element.style.top = `${(-(pos.y * 0.5) + 0.5) * window.innerHeight}px`;
}

// ==========================================
// 13. MAIN 3D ANIMATION LOOP
// ==========================================
const currentLookAt = new THREE.Vector3(0, 0, 0);
let clockTime = 0;

function animate() {
  requestAnimationFrame(animate);
  clockTime += 0.03;

  if (appMode === 'GALAXY') {
    const moveSpeed = 0.25;
    if (keys['arrowleft'] || keys['a']) moveGalaxyCamera(-moveSpeed, 0);
    if (keys['arrowright'] || keys['d']) moveGalaxyCamera(moveSpeed, 0);
    if (keys['arrowup'] || keys['w']) moveGalaxyCamera(0, moveSpeed);
    if (keys['arrowdown'] || keys['s']) moveGalaxyCamera(0, -moveSpeed);
  }

  camera.position.lerp(targetCamPos, 0.08);
  currentLookAt.lerp(targetLookAt, 0.08);
  camera.lookAt(currentLookAt);

  starField.rotation.y += 0.0004;

  // Swirl weather particles if enabled
  if (weatherParticles && weatherActive) {
    weatherParticles.rotation.y += 0.008;
  }

  // Update Shooting Stars
  for (let i = shootingStars.length - 1; i >= 0; i--) {
    const s = shootingStars[i];
    s.group.position.x += s.speedX;
    s.group.position.y += s.speedY;
    if (s.group.position.x < -25) {
      scene.remove(s.group);
      shootingStars.splice(i, 1);
    }
  }

  // Update 3D Sparkle Bursts
  for (let i = sparkleBursts.length - 1; i >= 0; i--) {
    const b = sparkleBursts[i];
    b.life -= 0.025;
    b.points.material.opacity = Math.max(0, b.life);
    const posArr = b.points.geometry.attributes.position.array;
    for (let j = 0; j < b.velocities.length; j++) {
      posArr[j * 3] += b.velocities[j].x;
      posArr[j * 3 + 1] += b.velocities[j].y;
      posArr[j * 3 + 2] += b.velocities[j].z;
    }
    b.points.geometry.attributes.position.needsUpdate = true;
    if (b.life <= 0) {
      scene.remove(b.points);
      sparkleBursts.splice(i, 1);
    }
  }

  if (appMode === 'GALAXY') {
    moonPlanet.rotation.y += 0.004;
    marsPlanet.rotation.y += 0.005;
    deepPlanet.rotation.y += 0.006;

    galaxyOrbiters.forEach((orb) => {
      orb.angle += orb.speed;
      orb.mesh.position.x = Math.cos(orb.angle) * orb.radius;
      orb.mesh.position.z = Math.sin(orb.angle) * orb.radius;
      orb.mesh.position.y = Math.sin(orb.angle) * orb.tilt * 2.2;
      orb.mesh.rotation.y = -orb.angle;
    });

    projectToScreen(moonPlanet, labelMoon, 3.3);
    projectToScreen(marsPlanet, labelMars, 3.8);
    projectToScreen(deepPlanet, labelDeep, 3.5);
  } else {
    zoneBots.forEach((bot) => {
      // Gravity bounce physics
      if (bot.bounceOffset > 0 || bot.bounceVelocity > 0) {
        bot.bounceOffset += bot.bounceVelocity;
        bot.bounceVelocity -= 0.015 * bot.data.gravityRatio;
        if (bot.bounceOffset <= 0) {
          bot.bounceOffset = 0;
          bot.bounceVelocity = 0;
        }
      }

      bot.rootGroup.position.y = bot.data.pos[1] + bot.bounceOffset + Math.sin(clockTime + bot.floatPhase) * 0.25;

      // Sound-wave visualizer ring when bot is speaking!
      if (selectedBotObj === bot && isSpeakingNow) {
        bot.voiceRing.visible = true;
        const pulse = 1 + Math.sin(clockTime * 6) * 0.14;
        bot.voiceRing.scale.set(pulse, pulse, 1);
      } else {
        bot.voiceRing.visible = false;
      }

      if (!bot.isAwake) {
        bot.spinGroup.rotation.z = Math.sin(clockTime * 0.8 + bot.floatPhase) * 0.07;
        bot.zzzGroup.position.y = Math.sin(clockTime * 1.4 + bot.floatPhase) * 0.18;
      } else {
        if (bot.animatedParts.rotorTop) {
          bot.animatedParts.rotorTop.rotation.y += 0.35;
          bot.animatedParts.rotorBot.rotation.y -= 0.35;
        }
        if (appMode === 'ZONE') {
          bot.spinGroup.rotation.y += 0.015;
        }
      }

      if (appMode === 'BOT_FOCUS' && selectedBotObj === bot) {
        bot.spinGroup.rotation.z *= 0.88;
        if (roverCamActive) {
          targetLookAt.x = bot.rootGroup.position.x + Math.sin(bot.spinGroup.rotation.y) * 8;
        }
      }

      if (appMode === 'ZONE') {
        projectToScreen(bot.rootGroup, bot.labelEl, 1.35);
      }
    });
  }

  renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();