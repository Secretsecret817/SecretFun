// ==========================
// 🧭 NAVIGATION SYSTEM
// ==========================

function showSection(sectionId) {
  document.getElementById("menu").style.display = "none";

  document.querySelectorAll(".section").forEach(section => {
    section.style.display = "none";
  });

  document.getElementById(sectionId).style.display = "block";
}

function goHome() {
  document.getElementById("menu").style.display = "block";

  document.querySelectorAll(".section").forEach(section => {
    section.style.display = "none";
  });
}


// ==========================
// 🎮 DATA STORAGE
// ==========================

const data = {


  challenges: [
    {
      him: "Set the mood in a way you know she’ll notice.",
      her: "Set the mood in a way you know he’ll notice."
    },
    {
      him: "Send her a message that builds anticipation.",
      her: "Send him a message that builds anticipation."
    },
    {
      him: "Plan something small but meaningful for later.",
      her: "Plan something small but meaningful for later."
    },
    {
      him: "Create tension without explaining what’s coming.",
      her: "Create tension without explaining what’s coming."
    },
    {
      him: "Do something that shows intention without words.",
      her: "Do something that shows intention without words."
    }
  ],

  // keep everything else the same...
  dares: [
    {
      him: "Take control and guide the pace.",
      her: "Let him take control and respond fully."
    },
    {
      him: "Focus completely on her reactions.",
      her: "React naturally without holding back."
    },
    {
      him: "Slow everything down intentionally.",
      her: "Match his pace and build tension."
    }
  ],

  kinky: [
    "Introduce a rule that must be followed.",
    "Establish control for the next few minutes.",
    "One leads, one obeys—no switching.",
    "Set a boundary and play within it.",
    "Build tension without release for a moment."
  ],

  positions: {
    him: [
      {
        name: "Top Control",
        desc: "You lead movement and pace. Stay connected through eye contact.",
        img: "images/top1.png"
      }
    ],
    her: [
      {
        name: "Guided Flow",
        desc: "You control rhythm and guide subtly.",
        img: "images/bottom1.png"
      }
    ],
    either: [
      {
        name: "Switch Flow",
        desc: "Alternate control every 60 seconds.",
        img: "images/switch1.png"
      }
    ]
  },

  roleplay: [
    {
      title: "Strangers Again",
      desc: "You’ve never met before. Start from scratch."
    },
    {
      title: "Power Exchange",
      desc: "One leads completely. One follows completely."
    },
    {
      title: "Secret Intentions",
      desc: "One of you knows more than the other."
    }
  ],

  actions: ["Kiss", "Touch", "Tease", "Guide"],
  bodyParts: ["neck", "shoulders", "hands", "back"],
  durations: ["30 seconds", "1 minute", "2 minutes"]

};


// ==========================
// 🎲 RANDOM HELPER
// ==========================

function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}


// ==========================
// 🎮 CHALLENGES
// ==========================

function getChallengeUI() {
  const role = document.getElementById("challengeRole").value;
  const challenge = getRandom(data.challenges);

  document.getElementById("challengeBox").innerText = challenge[role];
}


// ==========================
// 🔥 DARES
// ==========================

function getDareUI() {
  const role = document.getElementById("dareRole").value;
  const dare = getRandom(data.dares);

  document.getElementById("dareBox").innerText = dare[role];
}


// ==========================
// 🖤 KINKY MODE
// ==========================

function getKinkyUI() {
  const result = getRandom(data.kinky);
  document.getElementById("kinkyBox").innerText = result;
}


// ==========================
// 🎭 POSITIONS
// ==========================

function getPositionUI() {
  const role = document.getElementById("positionRole").value;
  const position = getRandom(data.positions[role]);

  document.getElementById("positionName").innerText = position.name;
  document.getElementById("positionDesc").innerText = position.desc;

  const img = document.getElementById("positionImg");

  if (position.img) {
    img.src = position.img;
    img.style.display = "block";
  } else {
    img.style.display = "none";
  }
}


// ==========================
// 🎭 ROLEPLAY
// ==========================

function getRoleplayUI() {
  const rp = getRandom(data.roleplay);

  document.getElementById("roleplayTitle").innerText = rp.title;
  document.getElementById("roleplayDesc").innerText = rp.desc;
}


// ==========================
// 🎰 SLOT MACHINE
// ==========================

function spinSlotUI() {
  const action = getRandom(data.actions);
  const part = getRandom(data.bodyParts);
  const time = getRandom(data.durations);

  const result = `${action} the ${part} for ${time}`;

  document.getElementById("slotBox").innerText = result;
}