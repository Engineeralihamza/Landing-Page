const questions = [
    {
        question: "which is the largest animal in the world",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "In which year did Pakistan win the Cricket World Cup?",
        answers: [
            { text: "1990", correct: false },
            { text: "1991", correct: false },
            { text: "1992", correct: false },
            { text: "1993", correct: true },
        ]
    },
    {
        question: "which is the national flower of pakistan",
        answers: [
            { text: "white jasmine", correct: false },
            { text: "Rose", correct: false },
            { text: "Tulip", correct: false },
            { text: "Lily", correct: true },
        ]
    },
    {
        question: "Which is the national language of Pakistan?",
        answers: [
            { text: "Urdu", correct: true },
            { text: "Pashto", correct: false },
            { text: "Saraiki", correct: false },
            { text: "Punjabi", correct: false },
        ]
    }

];

const questionElement = document.getElementById("question")
const answerbutton = document.getElementById("answer-button")
const nextbutton = document.getElementById("nxt-btn")

let currentQuestionIndex = 0;
let score = 0;

function startquiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextbutton.innerHTML = "Next";
    showQuestion()
}

function showQuestion() {

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach( answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbutton.appendChild(button);

     });

}

function resetstate(){
    nextbutton.style.display = "none";
    while(answerbutton.firstchild){
        answer-button.removchild(answerbutton.firstchild);

    }
}
startquiz();



