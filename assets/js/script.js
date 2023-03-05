var startBtn = document.getElementById('start');
var resetBtn = document.getElementById('reset');
var timeCounter = document.getElementById('time');
var questionsEl = document.getElementById('questions');
var choicesEl = document.getElementById('choices');
var highScoreEl = document.getElementById('highscore');
var submits = document.getElementById('submit');
var playerNameEl = document.getElementById('playername');
var submissionEl = document.getElementById('submission');
var starter = document.getElementById('btn')
var currentQuestion = 0;
var time = questions.length * 15;
var timerset;


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

function startGame () {
   
    starter.setAttribute('class','hide');
    questionsEl.remove('class');
    timerset = setInterval(timeStart, 1000);
    timeCounter.textContent = time;
  
}

function timeStart (){
  time--;
  timeCounter.textContent = time;
  if (time <= 0){
    quizEnds()
  }
}

function quizEnds(){
  questionsEl.setAttribute('class', 'hide')
  highScoreEl.removeAttribute('class')
}

startBtn.onclick = startGame


