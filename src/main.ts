import "./style.css";

let curX = 0;
let curY = 0;
let tgX = 0;
let tgY = 0;

document.addEventListener("DOMContentLoaded", () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }
  const interBubble = document.querySelector<HTMLDivElement>(".interactive");
  console.log(interBubble);

  function move() {
    if (interBubble === null) {
      return;
    }

    curX += (tgX - curX) / 20;
    curY += (tgY - curY) / 20;
    interBubble.style.translate = `${Math.round(curX)}px ${Math.round(curY)}px`;

    requestAnimationFrame(() => {
      move();
    });
  }

  window.addEventListener("mousemove", (event) => {
    tgX = event.clientX;
    tgY = event.clientY;
  });

  move();
});
