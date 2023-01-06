const Question = document.getElementById('Question');
const Answer = document.getElementById('answer');
const submitButton = document.getElementById('Submit');
const startButton = document.getElementById('start-quiz');
const spans = document.getElementById('spans');
const heading = document.querySelector('h3');
const body = document.querySelector('body');

const Questions = [
    {
        quest: "What is 2x14?",
        answer: '28'
    },
    {
        quest: "Where is the Great wall located?",
        answer: 'china'
    },
    {
        quest: "Which country speaks Malay?",
        answer: 'malaysia'
    },
    {
        quest: "What country speaks Urdu?",
        answer: 'pakistan'
    },

    {
        quest: "Where is the leaning tower of Pisa?",
        answer: 'italy'
    },
    {
        quest: undefined,
        answer: undefined
    }
]

let index = 0;

const startQuiz = () => {
    let questions = Questions[index].quest;
    Question.innerText = questions;
    startButton.disabled = true;
    index++;
    checkArrayLength();
}

const checkArrayLength = () => {
    if (index > 5) {
        spans.innerText = 'Restart?'
        startButton.disabled = false;
        Question.innerText = '';
        document.body.style.background = 'url(game-over.png)';
        document.body.style.backgroundPosition = 'center center';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
        heading.innerText = 'Game is finished';
        heading.style.color = 'black';
    }
}

const checkAnswers = () => {
    if (Question.innerText === Questions[0].quest && Answer.value === Questions[0].answer) {
        alert('nice');
        startQuiz();
    } else if (Question.innerText === Questions[1].quest && Answer.value === Questions[1].answer) {
        alert('nice');
        startQuiz();
    } else if (Question.innerText === Questions[2].quest && Answer.value === Questions[2].answer) {
        alert('nice');
        startQuiz();
    } else if (Question.innerText === Questions[3].quest && Answer.value === Questions[3].answer) {
        alert('nice');
        startQuiz();
    } else if (Question.innerText === Questions[4].quest && Answer.value === Questions[4].answer) {
        alert('nice');
        startQuiz();
    } else if (Answer.value === '') {
        alert ('Enter something!')
    } else {
        alert ('Wrong answer')
    }
}

const RestartGame = () => {
    if (spans.innerText === 'Restart?') {
        startQuiz();
    }
}

// below are just keypress and submit answer events
Answer.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        checkAnswers();
        submitAnswer();
    }
})

const submitAnswer = () => {
    Answer.value = '';
}