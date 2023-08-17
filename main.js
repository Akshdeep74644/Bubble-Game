let scoreval = 0;
let newhit = 0;
const Getnewhit = () => {
    newhit = Math.floor(Math.floor(Math.random() * 10));
  document.getElementById("result").innerHTML = newhit;
};

const makebubble = () => {
  let bubbles = "";
  for (let i = 0; i <= 107; i++) {
    let randomNumber = Math.floor(Math.floor(Math.random() * 10));
    bubbles += `<div class="bubble">${randomNumber}</div>`;
  }
  document.getElementById("panel_bottom").innerHTML = bubbles;
};

const TimerFunction = () => {
  let timer = 60;
  const timercount = () => {
    let timerfun = setInterval(function () {
      if (timer > 0) {
        timer--;
        document.getElementById("timer").innerHTML = timer;
      } else {
        clearInterval(timerfun);
        document.getElementById('panel_bottom').innerHTML = `<h1>Game Over !</h1>`
      }
    }, 1000);
  };
  timercount();
};

const scoreincrease = () => {
  scoreval += 10;
  document.getElementById("re_score").innerHTML = scoreval;
};
const scoredecrease = () => {
  scoreval -= 10;
  document.getElementById("re_score").innerHTML = scoreval;
};

document.getElementById("panel_bottom").addEventListener("click", (dets) => {
  let guessbubble = Number(dets.target.textContent);
  if ((guessbubble === newhit)) {
      scoreincrease();
    } else {
        scoredecrease()
    }
    makebubble();
    Getnewhit();
});

Getnewhit();
makebubble();
TimerFunction();
