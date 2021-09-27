//Get Elements 
var startGame = document.querySelector('#start');

//Array of question

const questionArray = [
    {
        q: "Who is the 45th president of USA",
        opt: ["Joe Biden", "Donald J Trump", "Mike More"],
        a: "Donald J Trump"
    },
    {
        q: "Who discovered the sea road to India",
        opt: ["Christopher Colombus", "Andrew Trueman", "Vascos Dagama"],
        a: "Vasco Dagama"
    },
    {
        q: "Who is the opposition leader in Italy",
        opt: ["Josepe Conte", "Matteo Salvini", "Silvio Belusconi"],
        a: "Matteo Salvini"
    },
    {
        q: "Who is the president of Cameroon",
        opt: ["Paul Biya", "John Fru Ndi", "Kamto Paol"],
        a: "Paul Biya"
    },
]
console.log(questionArray)

//Set timer
let timer = 10;
//Get Dom elements
const countDown = document.querySelector("#countDown");
const highScore = document.querySelector("#viewHighScore");

//Create an init function and game loads
window.onload = function initGame(e) {
    e.preventDefault();
    console.log("We are here")
    var timeInterval = setInterval(function () {
        timer--;
        countDown.textContent = timer;
        if (timer === 0) {
            clearInterval(timeInterval);
            countDown.textContent = `Game over!!`
        }
    }, 1000);
    navigateQuestions(1);
}

//Print questions and answers
const postQuestion = document.querySelector('#theQuestions');
const delegate = document.querySelector('#delegateFunctions');
var currentQuestion, index = 0, answerOptions, correctAnswer;
function navigateQuestions(direction) {
    index = index + direction;
    if (index < 0) {
        index = questionArray.length - 1;
    } else if (index > questionArray.length - 1){
        index = 0;
        console.log(currentQuestion);
    }
    //Get correct answers
    correctAnswer = questionArray[index].a;
    console.log('Correct answers ', correctAnswer )
    //Get Questions
    currentQuestion = questionArray[index].q;
    console.log(currentQuestion)
    //Get Answer options
    answerOptions = questionArray[index].opt;
    postQuestion.innerHTML = currentQuestion;
    answerOptions.forEach(function (element) {
        console.log(element)
        var li = document.createElement('li');
        // li.id += answerOptions.length;
        li.innerHTML = `<button>${element}</button>`;
        delegate.appendChild(li);
        console.log(li)
    })
}

function handleClick(event) {
    event.preventDefault();
    //Use event delegation to handle when the user clicks answer
    if (event.target.matches("button")) {
        for (var i = 0; i < answerOptions.length; i++){
            if (answerOptions[i] === correctAnswer) {
                console.log("Correct answer")
            } else {
                console.log("Wrong answer")
           }
        }
    }
}

delegate.addEventListener('click', handleClick)