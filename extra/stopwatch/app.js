const timerButton = document.getElementById("button");
const timertext = document.getElementById("text");
let isTicking = false;
let timeAmount = 0;
let timer;

timerButton.addEventListener("click", function () {
  isTicking = !isTicking;

  if (isTicking) {
    timer = setInterval(function () {
      timeAmount++;
      timertext.textContent = `Timer Started: ${timeAmount}`;
      console.log(timeAmount);
    }, 1000);
  } else if (!isTicking) {
    clearInterval(timer);
    timertext.textContent = `Timer Stopped: ${timeAmount}`;
  }
});
