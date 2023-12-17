const quizData = [{
    question: "In which year did Pakistan win the Cricket World Cup?",
    a: "1990",
    b: "1991",
    c: "1992",
    d: "1993",
    correct: "c",
},
{
    question: " Which is the national flower of Pakistan?",
    a: "Rose ",
    b: "thistle",
    c: "Camomille",
    d: "Jasmine",
    correct: "d",
},
{
    question: "Which is the national language of Pakistan?",
    a: "Urdu",
    b: "Punjabi",
    c: "Saraiki",
    d: "Pashto",
    correct: "a",
},
{
    question: "Which is the national animal of Pakistan?",
    a: "Markhor",
    b: "Bear",
    c: "Lion",
    d: "Deer",
    correct: "a",
},
{
    question: "What is the Capital of Pakistan?",
    a: "Karachi",
    b: "Lahore",
    c: "Islamabad",
    d: "Peshawar",
    correct: "c",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100">  You scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);