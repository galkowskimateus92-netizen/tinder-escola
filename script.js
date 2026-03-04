document.addEventListener("DOMContentLoaded", function () {

  const card = document.querySelector(".card");

  let startX = 0;
  let moveX = 0;
  let isDragging = false;

  card.addEventListener("pointerdown", function(e) {
    isDragging = true;
    startX = e.clientX;
    card.style.transition = "none";
  });

  document.addEventListener("pointermove", function(e) {
    if (!isDragging) return;

    moveX = e.clientX - startX;
    card.style.transform =
      "translateX(" + moveX + "px) rotate(" + moveX * 0.05 + "deg)";
  });

  document.addEventListener("pointerup", function() {
    if (!isDragging) return;

    isDragging = false;
    card.style.transition = "transform 0.3s ease";
    card.style.transform = "translateX(0px)";
  });

});
