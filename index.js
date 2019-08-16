'use strict';

const questionBank = [
  {
    question: 'What is the nickname of Minnesota?',
    answers: ['Sunshine State', 'The Tundra', 'Land of 10,000 Lakes', 'Star of the North'],
    correctAnswer: 'Land of 10,000 Lakes' 
  },
  {
    question: 'Which state has the most lakes?',
    answers: ['Minnesota', 'Wisconsin', 'California', 'Alaska'],
    correctAnswer: 'Alaska'
  },
  {
    question: 'What was the original name of St. Paul?',
    answers: ['Eagle\'s Wing', 'Pig\'s Eye', 'Paul Bunyan', 'Paul\'s Landing'],
    correctAnswer: 'Pig\'s Eye'
  },
  {
    question: 'How many times can you fit the Yankee Stadium into the Mall of America?',
    answers: ['3', '5', '7', '9'],
    correctAnswer: '7'
  },
  {
    question: 'Will Minnesota be your next vacation destination?',
    answers: ['Yes', 'YES', 'Yes!', 'Definitely'],
    correctAnswer: '(all)'
  }
];

let questionTracker = 0;
let rightAnswers = 0;
let wrongAnswers = 0;


function startGame() {
  questionTracker = 0;
  rightAnswers = 0;
  wrongAnswers = 0;
  
  $('#start-screen').on('click', '.startButton', function(event){
    $('#start-screen').hide();
    generateQuestion();
  })
}

function generateQuestion(){
  questionTracker++;
  $('.currentQuest').text(questionTracker)
  $('#question-screen').css('display', 'block');
  $('.questionNumber').text(questionTracker);
  

}



$(startGame);
