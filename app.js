const Question = document.getElementById('Question');
const Answer = document.getElementById('answer');
const submitButton = document.getElementById('Submit');
const startButton = document.getElementById('start-quiz');

let QuestionRandom; //i declared this globally and hoisted it so i can use it in other functions or listeners etc...

const Questions = [
    "How many members does BTS have?",
    "Where is the Great wall located?",
    "Which country speaks Dutch?",
    "Who speaks Urdu?",
    "Where is the leaning tower of Pisa?"
]

const startQuiz = () => {
        QuestionRandom = Questions[Math.floor(Math.random() * Questions.length)];
        Question.innerHTML = QuestionRandom;
        startButton.disabled = true; 
        // i disabled the start button here
        //why? because i don't want the user to skip to another question
        // before answering the current one :) 
} 

// below are if statements that are used to verify answers whether or not they are correct 
// if you type an answer to another question, it wont run and it wil just empty the text field to = '';

const AnswerQuestion = () => {

    if (QuestionRandom === Questions[0] && Answer.value === '7') {
        alert('Great!!!');
         startButton.click();
    } 
    else if (QuestionRandom === Questions[0] && Answer.value === 'seven') {
        alert('Great!!!');
         startButton.click();
    }
    else if (QuestionRandom === Questions[1] && Answer.value === 'china') {
        alert(`Wow, you're a natural!!!`);
        startButton.click();
    } 
    else if (QuestionRandom === Questions[2] && Answer.value === 'netherlands') {
        alert(`You are so cool!!!`);
        startButton.click();
    } 
    else if (QuestionRandom === Questions[3] && Answer.value === 'pakistan') {
        alert(`Epic job mate!!!`);
        startButton.click();
    } 
    else if (QuestionRandom === Questions[4] && Answer.value === 'italy') {
        alert(`Great job!!!`);
        startButton.click();
    } 
    ifAnswerIsWrong();
}

Answer.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        AnswerQuestion();
        submitAnswer();
    }
})

const submitAnswer = () => {
    AnswerQuestion();
    Answer.value = '';
}

const ifAnswerIsWrong = () => {
    if (QuestionRandom === Questions[0] && Answer.value !== '7') {
        startButton.disabled = true;
    } 
    else if (QuestionRandom === Questions[1] && Answer.value !== 'china') {
        console.log(`oh wow i thought u were a simp for Xi Jinping`);
        startButton.disabled = true;
    } 
    else if (QuestionRandom === Questions[2] && Answer.value !== 'netherlands') {
        console.log(`my wife lives there but ok`);
        startButton.disabled = true;
    }
    else if (QuestionRandom === Questions[3] && Answer.value !== 'pakistan') {
        console.log(`TING TING`);
        startButton.disabled = true;
    }
    else if (QuestionRandom === Questions[4] && Answer.value !== 'italy') {
        console.log(`i want some pizza too`);
        startButton.disabled = true;
    } else {
        startButton.disabled = false;
    }
}
