const envelope = document.getElementById("envelope");
const card = document.getElementById("card");
const container = document.getElementById("envelopeContainer");

envelope.addEventListener("click", () => {
  envelope.classList.add("open");
  setTimeout(() => {
    container.style.display = "none";
    card.style.display = "block";
    startDecorations();
  }, 2200);
});

function startDecorations() {
  const colors = ["#ff4d6d", "#ffbe0b", "#3a86ff", "#8338ec", "#06d6a0"];
  for (let i = 0; i < 8; i++) {
    let balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.background =
      colors[Math.floor(Math.random() * colors.length)];
    balloon.style.animationDuration = 6 + Math.random() * 4 + "s";
    document.body.appendChild(balloon);
  }
  for (let i = 0; i < 80; i++) {
    let confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.background =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = 3 + Math.random() * 5 + "s";
    confetti.style.opacity = Math.random();
    document.body.appendChild(confetti);
  }
  const smiles = ["😊", "😄", "😁", "😆"];
  for (let i = 0; i < 20; i++) {
    let smile = document.createElement("div");
    smile.className = "smiley";
    smile.innerText = smiles[Math.floor(Math.random() * smiles.length)];
    smile.style.left = Math.random() * 100 + "vw";
    smile.style.animationDuration = 4 + Math.random() * 5 + "s";
    document.body.appendChild(smile);
  }
  for (let i = 0; i < 15; i++) {
    let clown = document.createElement("div");
    clown.className = "clown";
    clown.innerText = "🤡";
    clown.style.left = Math.random() * 100 + "vw";
    clown.style.top = Math.random() * 100 + "vh";
    document.body.appendChild(clown);
  }
}