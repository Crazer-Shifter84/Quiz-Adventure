const rooms = [
  {
    q: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "High Transfer Machine Language",
      "Hyperlink Text Model Language",
      "Home Tool Markup Logic"
    ],
    a: 0
  },
  {
    q: "Which keyword declares a constant in JavaScript?",
    options: ["var", "let", "const", "static"],
    a: 2
  },
  {
    q: "What symbol is used for single-line comments in JavaScript?",
    options: ["<!-- -->", "//", "#", "/* */"],
    a: 1
  },
  {
    q: "Which method converts JSON to an object?",
    options: ["JSON.stringify()", "JSON.parse()", "parse.JSON()", "Object.JSON()"],
    a: 1
  },
  {
    q: "Which company created JavaScript?",
    options: ["Microsoft", "Sun Microsystems", "Netscape", "Oracle"],
    a: 2
  }
];

let roomIndex = 0;

const roomEl = document.getElementById("room");
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const statusEl = document.getElementById("status");

function loadRoom() {
  const room = rooms[roomIndex];
  roomEl.textContent = `Room ${roomIndex + 1} of ${rooms.length}`;
  questionEl.textContent = room.q;
  choicesEl.innerHTML = "";
  statusEl.textContent = "";

  room.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => answer(i);
    choicesEl.appendChild(btn);
  });
}

function answer(choice) {
  if (choice === rooms[roomIndex].a) {
    statusEl.textContent = "✅ Correct! Moving forward.";
    roomIndex++;
  } else {
    statusEl.textContent = "❌ Wrong! Moving back.";
    roomIndex = Math.max(0, roomIndex - 1);
  }

  if (roomIndex === rooms.length) {
    questionEl.textContent = "🏆 You completed the adventure!";
    choicesEl.innerHTML = "";
    roomEl.textContent = "Adventure Complete";
    return;
  }

  setTimeout(loadRoom, 800);
}

loadRoom();