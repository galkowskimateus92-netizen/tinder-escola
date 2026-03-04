document.addEventListener("DOMContentLoaded", function () {

  const card = document.querySelector(".card");
  const like = document.querySelector(".like");
  const nope = document.querySelector(".nope");

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

    if (moveX > 0) {
      like.style.opacity = Math.min(moveX / 100, 1);
      nope.style.opacity = 0;
    } else {
      nope.style.opacity = Math.min(Math.abs(moveX) / 100, 1);
      like.style.opacity = 0;
    }
  });

  document.addEventListener("pointerup", function() {
    if (!isDragging) return;

    isDragging = false;
    card.style.transition = "transform 0.3s ease";

    if (moveX > 100) {
      card.style.transform = "translateX(1000px)";
    } 
    else if (moveX < -100) {
      card.style.transform = "translateX(-1000px)";
    } 
    else {
      card.style.transform = "translateX(0px)";
    }

    like.style.opacity = 0;
    nope.style.opacity = 0;
  });

});


