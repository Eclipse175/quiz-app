const Question = document.getElementById('Question');
const Answer = document.getElementById('answer');
const submitButton = document.getElementById('Submit');
const startButton = document.getElementById('start-quiz');

const Questions = [
    "How many members does BTS have?",
    "Where is the Great wall located?",
    "Which country speaks Dutch?",
    "Who speaks Urdu?",
    "Where is the leaning tower of Pisa?"
]

// const valuesOfObject = Object.values(Questions);
let QuestionRandom;

const startQuiz = () => {
    renderQuestions();
    function renderQuestions() {
        QuestionRandom = Questions[Math.floor(Math.random() * Questions.length)];
        Question.innerHTML = QuestionRandom;
    }
}

const AnswerQuestion = () => {
    if (QuestionRandom === Questions[0] && Answer.value === '7' || Answer.value === 'seven') {
        alert('Great!!!');
    }
    if (QuestionRandom === Questions[1] && Answer.value === 'china') {
        alert(`Yoohoo, you're a natural!!!`);
    }
    if (QuestionRandom === Questions[2] && Answer.value === 'netherlands' || Answer.value === 'holland') {
        alert(`You are so cool!!!`);
    }
    if (QuestionRandom === Questions[3] && Answer.value === 'pakistan') {
        alert(`Epic job mate!!!`);
    }
    if (QuestionRandom === Questions[4] && Answer.value === 'italy') {
        alert(`Great job!!!`);
    }
}
Answer.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        AnswerQuestion();
        submitAnswer();
        Answer.value = '';
    }
})
const submitAnswer = () => {
    console.log('Answer submitted!');
}