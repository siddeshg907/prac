// const btn=document.getElementById("btn")
// const audio=document.getElementById("audio")
// const dot=document.getElementById("dot")
// const body=document.body
// btn.addEventListener('click',MyFunction)
// btn.addEventListener('click',MyFunctiontwo)
// btn.addEventListener('click',MyFunctionthree)

// function cursorM(e){
//   dot.style.top=e.clientY+"px"
//   dot.style.left=e.clientX+"px"
//   dot.style.bottom=e.clientY+"px"
//   dot.style.right=e.clientX+"px"
// }

// dot.addEventListener('mousemove',cursorM)

// function MyFunction(e){

//   audio.play()
//   console.log(e.target)
//   console.log("Button Clicked")
// }
// function MyFunctiontwo(){
//   console.log("Button Clicked 1")
// }
// function MyFunctionthree(){
//   console.log("Button Clicked 2")
// }

// btn.removeEventListener('click',MyFunctiontwo)
 


const moles = document.querySelectorAll('.mole');
const scoreDisplay = document.getElementById('score');
const winMessage = document.getElementById('win-message');
const restartBtn = document.getElementById('restart-btn');

let score = 0;
let gameInterval;

function startGame() {
  score = 0;
  scoreDisplay.textContent = score;
  winMessage.style.display = 'none';
  restartBtn.style.display = 'none';

  gameInterval = setInterval(randomMole, 1000);
}
function randomMole() {
  moles.forEach(mole => mole.classList.remove('active'));
  const index = Math.floor(Math.random() * moles.length);
  moles[index].classList.add('active');
}
moles.forEach(mole => {
  mole.addEventListener('click', () => {
    if (mole.classList.contains('active')) {
      score++;
      scoreDisplay.textContent = score;
      if (score >= 5) stopGame();
    }
  });
});
function stopGame() {
  clearInterval(gameInterval);
  moles.forEach(mole => mole.classList.remove('active'));
  winMessage.style.display = 'block';
  restartBtn.style.display = 'inline-block';
}
restartBtn.addEventListener('click', () => {
  startGame();
});


startGame();



