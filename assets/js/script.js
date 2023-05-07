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
var questionTitleEl = document.getElementById('question-title');
var currentQuestion = 0;
var time = 60;
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
    questionsEl.removeAttribute('class');
    timerset = setInterval(timeStart, 1000);
    timeCounter.textContent = time;
  questionList()
}

function timeStart (){
  time--;
  timeCounter.textContent = time;
  if (time <= 0){
    clearInterval(timerset);
    quizEnds();
  }
}

function questionList(event) {
  // var questionBtn = event.target
  var grabbedQuestion = questions[currentQuestion]
  questionTitleEl.textContent = grabbedQuestion.title
  choicesEl.innerHTML = "";
  for (let i = 0; i < grabbedQuestion.choices.length; i++) {
    var createButton = document.createElement('button')
    createButton.textContent = grabbedQuestion.choices[i]
    
    // document.addEventListener('click', function(){
    //   event.preventDefault();
    //   if (grabbedQuestion.choices[i]=== grabbedQuestion.answer){
    //     grabbedQuestion[i]!== grabbedQuestion.answer
    //     // time -= 15;
    //   }else {
    //     time -= 15;
    //   }
    //   currentQuestion++;
    //   if (currentQuestion>=questions.length){
    //   //   quizEnds();
    //   // }else{
    //     questionList();
    //   }
      
    // });

    //do some code here
    choicesEl.appendChild(createButton);
  }
  
}

function questionBtn(event) {
  var questionClick = event.target
  var grabbedQuestion = questions[currentQuestion];
  
  document.addEventListener('click', function(){
    event.preventDefault();
    if (questionClick.value !== questions[currentQuestion].answer) {
      time -= 15;
      // return ;
    } 
    currentQuestion++;
    if (currentQuestion>=questions.length){
    //   quizEnds();
    // }else{
      
    }
  });
  questionList();
}

function quizEnds(){
  questionsEl.setAttribute('class', 'hide')
  highScoreEl.removeAttribute('class')
}

function highScoreList(){

}






choicesEl.onclick = questionBtn;
startBtn.onclick = startGame;


