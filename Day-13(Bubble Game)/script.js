var timer = 6;
var score = 0;
var hitrn = 0;

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}
getNewHit();

function makeBubble() {
  var clutter = "";
  for (var i = 0; i <= 168; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbdm").innerHTML = clutter;
}
makeBubble();

function runTimer() {
  var timerint = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector("#pbdm").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}
runTimer();

document.querySelector("#pbdm").addEventListener("click", function (dets) {
  // console.log(dets);
  // console.log(dets.target.textContent); output is sting
  //now output is a number
  var clickednum = Number(dets.target.textContent);
  if (clickednum === hitrn) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});
