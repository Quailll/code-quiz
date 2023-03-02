var startBtn = document.getElementById('start');
var resetBtn = document.getElementById('reset');
var timerCount = document.getElementById('time');
var submitLs = document.getElementById('submit');
var choicePicked = document.getElementById('choices');
var currentQuestion = 0
var answers = true
var timer;

var questions = [{
    
    title: "For gitbash or terminal what how do you navigate between directories? ",
    choices: ["mkdir","cd","mv","ls"],
    answer: "cd",
  },
  {
    title: "What are in the box element?",
    choices: ["padding","margin","border","all of the above"],
    answer: "all of the above",
  },
  {
    title: "Which one is a commonly used data type that is used?",
    choices: ["strings","tag","flex","href"],
    answer: "strings",
  }

]

function startGame (){
  var gameStart = document.getElementById('beginning');
  gameStart.setAttribute('class','hide')
  choicePicked.removeAttribute('class');
  timer = setInterval(clockTick, 1000);
  
}

function countDown(){
  time
}

/*startBtn.addEventListener('click', function(){ 
  })
resetBtn.addEventListener('click', function(){
  console.log('reset button was clicked')
});
submitLs.addEventListener('click', function(){
  console.log('submit was just clicked')
});*/

