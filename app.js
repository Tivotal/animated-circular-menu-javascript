/* Created by Tivotal */

let parts = document.querySelectorAll(".sec");
let contents = document.querySelectorAll(".content");

let deviation = 0;

if ((parts.length / 2) % 2 != 0) {
  deviation = 360 / parts.length / 2;
}

parts.forEach((part, index) => {
  let angle = (360 / parts.length) * (index + 1) - deviation;
  let skewVal = 360 / parts.length - 90;

  part.style.transform = `rotate(${angle}deg) skew(${skewVal}deg)`;

  let conAngle = angle + Math.abs(skewVal) + (90 - Math.abs(skewVal)) / 2;

  contents[
    index
  ].style.transform = `rotateZ(${conAngle}deg) translateY(-140px) rotate(-${conAngle}deg)`;
});

let btn = document.querySelector(".btn");
let menu = document.querySelector(".menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    btn.innerHTML = `<i class="fas fa-times"></i>`;
  } else {
    btn.innerHTML = `<i class="fas fa-bars"></i>`;
  }
});
