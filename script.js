const card = document.querySelector(".card");

let startX = 0;
let currentX = 0;
let isDragging = false;

card.addEventListener("mousedown", startDrag);
card.addEventListener("touchstart", startDrag);

document.addEventListener("mousemove", drag);
document.addEventListener("touchmove", drag);

document.addEventListener("mouseup", endDrag);
document.addEventListener("touchend", endDrag);

function startDrag(e) {
  isDragging = true;
  startX = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
}

function drag(e) {
  if (!isDragging) return;

  currentX = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
  let moveX = currentX - startX;

  card.style.transform = translateX(${moveX}px) rotate(${moveX * 0.05}deg);
}

function endDrag() {
  if (!isDragging) return;
  isDragging = false;

  let moveX = currentX - startX;

  if (moveX > 100) {
    alert("❤️ Você curtiu!");
  } else if (moveX < -100) {
    alert("❌ Você não curtiu!");
  }

  card.style.transform = "translateX(0px)";
}
