// js/entry.js

const magicalEmojis = ["🪄", "🔮", "📜", "🧙‍♀️", "🧹", "🦉"];
const muggleEmojis = [
  "🍎", "📱", "🚗", "🛏️", "🖊️", "📦", "🕶️", "💼", "🎧", "🎮",
  "🥤", "📷", "📺", "⏰", "🎒", "📁"
];

let selectedEmoji = null;
let correctEmoji = null;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function generateEmojiSet() {
  const container = document.getElementById("emoji-container");
  container.innerHTML = "";
  const emojis = [];

  // 选出一个魔法 emoji
  correctEmoji = magicalEmojis[Math.floor(Math.random() * magicalEmojis.length)];
  emojis.push(correctEmoji);

  // 加入 9 个麻瓜 emoji
  while (emojis.length < 10) {
    const muggle = muggleEmojis[Math.floor(Math.random() * muggleEmojis.length)];
    if (!emojis.includes(muggle)) emojis.push(muggle);
  }

  shuffle(emojis);

  emojis.forEach(e => {
    const span = document.createElement("span");
    span.classList.add("emoji");
    span.textContent = e;
    span.onclick = () => {
      document.querySelectorAll(".emoji").forEach(el => el.classList.remove("selected"));
      span.classList.add("selected");
      selectedEmoji = e;
    };
    container.appendChild(span);
  });
}

function checkAnswer() {
  const msg = document.getElementById("message");
  if (selectedEmoji === correctEmoji) {
    msg.textContent = "✅ Welcome home!";
    msg.style.color = "lightgreen";
    setTimeout(() => window.location.href = "dashboard.html", 1000);
  } else {
    msg.textContent = "❌ Oops! 麻瓜不能进哦！";
    msg.style.color = "tomato";
  }
}

window.onload = generateEmojiSet;
