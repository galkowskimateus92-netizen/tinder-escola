document.addEventListener("DOMContentLoaded", function () {

  const card = document.querySelector(".card");

  let startX = 0;
  let moveX = 0;
  let isDragging = false;

  card.addEventListener("pointerdown", (e) => {
    isDragging = true;
    startX = e.clientX;
    card.style.transition = "none";
  });

  document.addEventListener("pointermove", (e) => {
    if (!isDragging) return;

    moveX = e.clientX - startX;
    card.style.transform =
      translateX(${moveX}px) rotate(${moveX * 0.05}deg);
  });

  document.addEventListener("pointerup", () => {
    if (!isDragging) return;
    isDragging = false;

    card.style.transition = "0.3s ease";

    if (moveX > 120) {
      card.style.transform = "translateX(500px)";
      setTimeout(() => {
        alert("❤️ Você curtiu!");
        resetCard();
      }, 300);
    } 
    else if (moveX < -120) {
      card.style.transform = "translateX(-500px)";
      setTimeout(() => {
        alert("❌ Você não curtiu!");
        resetCard();
      }, 300);
    } 
    else {
      resetCard();
    }
  });

  function resetCard() {
    card.style.transform = "translateX(0px)";
    moveX = 0;
  }

});
