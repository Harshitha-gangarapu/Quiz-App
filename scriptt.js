const quizContainer = document.getElementById("quizcontainer");
const questionElement = document.getElementById("question");
const OptionsContainer = document.getElementById("optionscontainer");
const submitBtn = document.getElementById("submitBtn");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");


let currentQuestionIndex = 0;
let score = 0;



const quizQuestions = [
    {
        question: "What is the capital of australia?",
        options: ["sydney","Canberra","melbourne","Brisbane"],
        correctAnswer: "Canberra"
    },
    {
        question: "Which planet is known as red planet?",
        options: ["venus","mars","jupiter","saturn"],
        correctAnswer: "mars"
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["nitrogen","oxygen","carbon dioxide","hydrogen"],
        correctAnswer: "carbon dioxide"
    },
    {
        question: "What is the boiling point of water in celcius?",
        options: ["50","75","100","150"],
        correctAnswer: "100"
    }
]


function loadQuestion(){
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionElement.textcontent = currentQuestion.question;


    OptionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option,index)=>{
      const optionButton = document.createElement("button");
      optionButton.textconstant = option;

    optionButton.onclick = function () {
        selectAnswer(option, currentQuestion.correctAnswer)
    }
       OptionsContainer.appendChild(optionButton)
    })
}

function selectAnswer(selectedOption,correctAnswer){
    if(selectedOption === correctAnswer){
        feedbackElement.textcontent = "Correct!";
    }else{
        feedbackElement.textContent = "Incorrect!.the correct answer is:" + correctAnswer;
    }


    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length){
        loadQuestion();
    }else{
        endQuiz();
    }
}


function endQuiz(){
    quizContainer.innerHTML = "<h2>Quiz completed</h2>";
    scoreElement.textContent = "final Score: "+score + "out of " +quizQuestions.length;
}


function submitAnswer(){
    const selectedOption = document.querySelector('input[name="option"]:checked"');

    if(selectedOption){
        selectAnswer(selectedOption.value)
    }
}
loadQuestion();
