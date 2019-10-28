'use strict';

// Variables to store the quiz score and question number information
let totalCorrect = 0;
let currentQuestion = 0;

// question database
const STORE = [
  {
    question: 'Who created Slapsgiving ?',
    answer: '0',
    choices: ['Barney and Marshall', 'Robin and Lily', 'Ted and Barney', 'Ted and Marshall', 'Ted and Punchy'],
  },
  {
    question: 'Who was named Beercules ?',
    answer: '2',
    choices: ['Ted', 'Barney', 'Marshall', 'Lily', 'Punchy'],
  },
  {
    question: 'Who was Lilys’ doppelganger ?',
    answer: '3',
    choices: ['Mustache lily', 'Street performer lily', 'Lily the wrestler', 'Stripper lily', 'Teacher lily'],
  },
  {
    question: 'What’s Barneys job ?',
    answer: '0',
    choices: ['Please', 'Has a lot of keys', 'Stock investor', 'Lawyer', 'architect'],
  },
  {
    question: 'Whats Robin famous for in Canada ?',
    answer: '4',
    choices: ['Actress', 'Model', 'News Reporter', 'Hockey player', 'Teenage popstar'],
  },
];

function newGame() {
  $('.startButton').on('click', event => {
    $('.intro').hide();
    $('.container').show();
    $('.currentStats').show();
    displayQuestion();
    showCurrentStats();
  });
}

function displayQuestion() {
  $('.question-container').show();
  // generate radio buttons
  let answers = '';
  for (let i = 0; i < STORE.length; i++) {
    answers += `
      <div class="button">
        <input type="radio" class="answerInput" name="user-answer" id="user-answer" value="${i}" aria-label="radioButton" required>${STORE[currentQuestion].choices[i]}
      </div>
    `;
  }

  $('.question-container').html(`
    <div class="questionDiv">
      <h3>${STORE[currentQuestion].question}</h3>
    </div>
    <div class="answersDiv">
      ${answers}
    </div>
    <div class="checkAnswerButton">
      <button type="submit" class="checkAnswer">Submit</button>
    </div>
  `);
}

function submitAnswer() {
  $('.js-form').on('submit', function() {
    event.preventDefault();
    const userPickNum = $(`input[name=user-answer]:checked`).val();
    const answerNum = STORE[currentQuestion].answer;
    const answer = STORE[currentQuestion].choices[answerNum];
    $('.results').show();
    if (userPickNum === STORE[currentQuestion].answer) {
      $('.results').html(`
        <h2>Congratulations</h2>
        <p>Omg! You are a How I Met Your Mother Legend!!</p>
        <p>The correct answer is ${answer}.</p>
        <button class="nextButton">Next</button>
      `);
      totalCorrect++;
    } else {
      $('.results').html(`
        <h2>Incorrect</h2>
        <p>The correct answer is ${answer}.</p>
        <button class="nextButton">Next</button>
      `);
    }
    $('.question-container').hide();
    $('.checkAnswerButton').hide();
    questionCounter();
  });
}

function questionCounter() {
  currentQuestion++;
}

function nextQuestion() {}

function showCurrentStats() {}

function quizInit() {
  newGame();
  submitAnswer();
  nextQuestion();
}

$(quizInit);