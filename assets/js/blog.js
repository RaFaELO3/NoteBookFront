const prev = document.querySelector(".fa-arrow-left");
const next = document.querySelector(".fa-arrow-right");
const cards = document.querySelectorAll(".slider_card");
const slider = document.querySelector(".slides");
let box = document.querySelector(".slider_card");

let counter = 0;

prev.addEventListener("click", () => {
  counter--;
  slider_loop();
  console.log(counter);
});

next.addEventListener("click", () => {
  counter++;
  slider_loop();
  console.log(counter);
});

function slider_loop() {
  if (counter >= cards.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = cards.length - 1;
  }
  slider.style.left = `${-counter * box.offsetWidth}px`;
}

window.onresize = function () {
    slider.style.left = 0;
    counter = 0;
}
