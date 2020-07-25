
//Array of quiz's questions
const questions = [
    // Question 1
        {
            question: "Inside which HTML element do we put the JavaScript?",
            choices: ["1. <js>", "2. <javascript>", "3. <script>", "4. <scripting>"],
            answer: "3. <script>"
        },
    // Question 2
        {
            question: "The external JavaScript file must contain the <script> tag.",
            choices: ["1. True", "2. False"],
            answer: "2. False"
        },
    // Question 3
        {
            question: "How do you create a function in JavaScript?",
            choices: ["1. function = myFunction()", "2. function myFunction()", "3. function:myFunction()"],
            answer: "2. function myFunction()"
        },
     // Question 4
        {
            question: "How do you declare a JavaScript variable?",
            choices: ["1. var snackName;", "2. variable snackName;", "3. v snackName;"],
            answer: "1. var snackName;"
        },
    // Question 5
        {
            question: "Is JavaScript case-sensitive?",
            choices: ["1. Yes", "2. No"],
            answer: "1. Yes"
        },
     // Question 6
       {
           question: "What will the following code return: Boolean(10 > 9)",
           choices: ["1. NaN", "2. True", "3. False"],
           answer: "2. True"
       },
    // Question 7
       {
           question: "How does a FOR loop start?",
           choices: ["1. for (i = 0; i <= 5)", "2. for i = 1 to 5", "3. for (i <= 5; i++)", "4. for (i = 0; i <= 5; i++)"],
           answer: "4. for (i = 0; i <= 5; i++)"
       }
    ];

// Link to elements on the HTML page
let startQuizEl = document.getElementById("test");
let timerEl = document.getElementById("time");
let questionsDisplayEl = document.getElementById("questionsDisplay"); 
let questionsEl = document.getElementById("question");
let choicesEl = document.getElementById("choices");

// Timer variables 
let time = 100;
let timerId;

// Question variables 
let questionIndex = 0;

startQuizEl.addEventListener("click", startQuizFunction);

function startTimerFunction() {
    console.log("inside startQuizTimer");
    timerId = setInterval(function() {
        time--;
        timerEl.textContent = time;
        if (time <= 0){
            clearInterval(timerId);
            endQuiz();
        }
    }, 1000)
}

function startQuizFunction() {
    console.log("inside startQuizFunction");
    //Start with quiz hiding
   displayQuestionsFunction();
   startTimerFunction();
}

function displayQuestionsFunction(){
    //Display question
    let currentQuestion = questions[questionIndex];
    questionsEl.textContent = currentQuestion.question;

    //Display possible answers
    let possibleChoices = 

    currentQuestion.choices.forEach(function(choice,i){
        let choiceButton = document.createElement("button")
        choiceButton.setAttribute("class", "choice");
        choiceButton.setAttribute("value", choice);
        
        choiceButton.textContent = choice;

        choiceButton.onclick = questionClick;
        choicesEl.appendChild(choiceButton);
    })

function questionClick(){
    // If answer is incorrect 10 seconds is subtracted from the time
    if (this.value !== questions[questionIndex].answer){
        time -= 10;

        //
        if (time < 0){
            time = 0;
        }
    }
    timerEl.textContent = time;
}


}