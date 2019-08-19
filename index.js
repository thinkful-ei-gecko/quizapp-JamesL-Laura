'use strict';

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
    answers: ['Yes (click this one)', 'YES', 'Yes!', 'Definitely'],
    rightAnswer: '#option1',
    correctFeedback: 'You betcha!',
    incorrectFeedback: 'Click the first option'
  }
];

let questionTracker = 0;
let rightAnswers = 0;
let wrongAnswers = 0;


function displayCorrectScreen() {
  
  rightAnswers++;
  $('.currentScore').text(rightAnswers);//update the tally display
  $('.correct-screen').css('display', 'block');//show correct-screen
  $('.correct-screen').html(`<p>YOU ARE CORRECT!</p>
  <p>${questionBank[questionTracker-1].correctFeedback}</p>
  <button class='nextQuestion'>Go to next question</button>`);
  
  $('.nextQuestion').on('click', function(){
    event.preventDefault();
    generateQuestion(); //show next question
    $('.correct-screen').css('display', 'none');
  });
}

function displayWrongScreen() {
  wrongAnswers++;
  $('.wrong-screen').css('display', 'block');//show correct-screen

  $('.wrong-screen').html(`<p>You are INCORRECT!</p>
  <p>Correct answer is <span class='correctAnswer'>${questionBank[questionTracker-1].incorrectFeedback}</span></p>
  <button class='nextQuestion'>Go to next question</button>`);
  
  $('.nextQuestion').on('click', function() {
    event.preventDefault();
    generateQuestion(); // to show next question
    $('.wrong-screen').css('display', 'none');
  });
}


function generateQuestion(){
  questionTracker++;

  $('.currentQuest').text(questionTracker); //to display current question number in header
  $('.question-screen').css('display', 'block'); // to show the question screen view -make it not hidden
  $('.questionNumber').text(questionTracker); //to display current question number in question view
  
  $('.questionAndChoices').html(`
    <p class='questionItem'>${questionBank[questionTracker-1].question}</p>
    <input type='radio' id='option1' value='false' name='Q${questionTracker}' />
    <label for='option1'>${questionBank[questionTracker-1].answers[0]}</label>
    <br/>
    <input type='radio' id='option2' value='false' name='Q${questionTracker}' />
    <label for='option2'>${questionBank[questionTracker-1].answers[1]}</label>
    <br/>
    <input type='radio' id='option3' value='false' name='Q${questionTracker}' />
    <label for='option3'>${questionBank[questionTracker-1].answers[2]}</label>
    <br/>
    <input type='radio' id='option4' value='false' name='Q${questionTracker}' />
    <label for='option4'>${questionBank[questionTracker-1].answers[3]}</label>
    <br/>
    <button type='submit' class='submit-button'>Submit</button>`);
  $(questionBank[questionTracker-1].rightAnswer).attr('value', 'true');

  $('form').on('click', '.submit-button', function(event) {
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
  
  $('.start-screen').on('click', '.startButton', function(event){
    $('.start-screen').css('display', 'none');
    generateQuestion();
  });
}

$(startGame);
