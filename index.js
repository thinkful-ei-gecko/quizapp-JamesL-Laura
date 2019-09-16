'use strict';

/* global $ */

const questionBank = [
  {
    question: 'What is the nickname of Minnesota?',
    answers: ['Sunshine State', 'The Tundra', 'Land of 10,000 Lakes', 'Star of the North'],
    rightAnswer: '#option3',
    correctFeedback: 'Good Job!',
    incorrectFeedback: 'Land of 10,000 Lakes' 
  },
  {
    question: 'Which state has the most lakes?',
    answers: ['Minnesota', 'Wisconsin', 'California', 'Alaska'],
    rightAnswer: '#option4',
    correctFeedback: 'Wow!',
    incorrectFeedback: 'Alaska'
  },
  {
    question: 'What was the original name of St. Paul?',
    answers: ['Eagle\'s Wing', 'Pig\'s Eye', 'Paul Bunyan', 'Paul\'s Landing'],
    rightAnswer: '#option2',
    correctFeedback: 'Impressive!',
    incorrectFeedback: 'Pig\'s Eye'
  },
  {
    question: 'How many times can you fit the Yankee Stadium into the Mall of America?',
    answers: ['3', '5', '7', '9'],
    rightAnswer: '#option3',
    correctFeedback: 'Super!',
    incorrectFeedback: '7'
  },
  {
    question: 'Will Minnesota be your next vacation destination?',
    answers: ['Yes (click this one)', 'No', 'Nope', 'Maybe'],
    rightAnswer: '#option1',
    correctFeedback: 'You betcha!',
    incorrectFeedback: 'Yes'
  }
];

let questionTracker = 0;
let rightAnswers = 0;
let wrongAnswers = 0;


function displayCorrectScreen() {
  
  rightAnswers++;
  $('.currentScore').text(rightAnswers);//update the tally display
  $('.correct-screen').css('display', 'block');//show correct-screen
  $('.correct-screen').html(`<h3>YOU ARE CORRECT!</h3>
  <p class='correctFeedback'>${questionBank[questionTracker-1].correctFeedback}</p>
  <button class='nextQuestion'>Continue</button>`);
  
  $('.nextQuestion').on('click', function(){
    event.preventDefault();
    generateQuestion(); //show next question
    $('.correct-screen').css('display', 'none');
  });
}

function displayWrongScreen() {
  wrongAnswers++;
  $('.wrong-screen').css('display', 'block');//show correct-screen

  $('.wrong-screen').html(`<h3>Sorry! That is incorrect.</h3>
  <p>The correct answer is:</p>
  <p class='correctAnswer'>${questionBank[questionTracker-1].incorrectFeedback}</p>
  <button class='nextQuestion'>Continue</button>`);
  
  $('.nextQuestion').on('click', function() {
    event.preventDefault();
    generateQuestion(); // to show next question
    $('.wrong-screen').css('display', 'none');
  });
}


function generateQuestion(){
  questionTracker++;
  if(questionTracker < questionBank.length+1){

    $('.currentQuest').text(questionTracker); //to display current question number in header
    $('.question-screen').css('display', 'block'); // to show the question screen view -make it not hidden
    $('.questionNumber').text(questionTracker); //to display current question number in question view
    
    $('#questionAndChoices').html(`
      <p class='questionItem'>${questionBank[questionTracker-1].question}</p>
      
      <label for='option1'><input type='radio' id='option1' value='false' name='Q${questionTracker}' />
      ${questionBank[questionTracker-1].answers[0]}</label>
      
      <label for='option2'><input type='radio' id='option2' value='false' name='Q${questionTracker}' />
      ${questionBank[questionTracker-1].answers[1]}</label>
      
      <label for='option3'><input type='radio' id='option3' value='false' name='Q${questionTracker}' />
      ${questionBank[questionTracker-1].answers[2]}</label>
      
      <label for='option4'><input type='radio' id='option4' value='false' name='Q${questionTracker}' />
      ${questionBank[questionTracker-1].answers[3]}</label>
      
      <button type='submit' class='submit-button'>Submit</button>`);
    $(questionBank[questionTracker-1].rightAnswer).attr('value', 'true');
  }
  else{
    resultsDisplay();
  };
  
}

function resultsDisplay(){
  $('.result-screen').css('display', 'block');

  $('.result-screen').html(`<h2>Your Results!</h2>
    <p class='finalTally'>Correct: ${rightAnswers}</p>
    <p class='finalTally'>Incorrect: ${wrongAnswers}</p>
    <button class='restart-button'>Take Quiz Again</button>`);

  $('.restart-button').on('click', function(){
    $('.result-screen').css('display', 'none')
    questionTracker = 0;
    rightAnswers = 0;
    wrongAnswers = 0;
    $('.currentQuest').text(questionTracker);
    $('.currentScore').text(rightAnswers);
    $('.start-screen').css('display', 'block');
  
  });
};

function checkAnswer(){
  $('#questionAndChoices').on('submit', function(event) {
    // If no answer is chosen, prevent submit button
    event.preventDefault();
    
    if ($('input[value=true]').is(':checked') ) {
      
      displayCorrectScreen();
      $('.question-screen').css('display', 'none'); //hide the Q screen
    } 
    else if ($('input[value=false]').is(':checked') ) {
      displayWrongScreen();
      $('.question-screen').css('display', 'none');
    }
  });
}


function startGame() {
  $('.start-screen').css('display', 'block');
  
  questionTracker = 0;
  rightAnswers = 0;
  wrongAnswers = 0;
  $('.currentQuest').text(questionTracker);
  $('.currentScore').text(rightAnswers);
  $('.start-screen').on('click', '.startButton', function(event){
    $('.start-screen').css('display', 'none');
    $('.result-screen').css('display', 'none');
    generateQuestion();
  });
}

function main(){
  startGame();
  checkAnswer();
}

$(main);
