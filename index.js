// Define an array of quiz questions
const quizQuestions = [
    {
        question: "What is the capital of Liberia?",
        Options: ["Monrovia", "Accra", "Lagos", "Freetown"],
        correctAnswer: "Monrovia"
    },
    {
        question: "What is the capital city of Grand Bassa county?",
        Options: ["Zwedru", "Buchana", "Tappita", "Voinjama"],
        correctAnswer: "Buchana"
    },
    {
        question: "Which year did Liberia gain her independence?",
        Options: ["July 26 1847", "April 15 1926", "August 24 1774", "June 24 1822"],
        correctAnswer: "July 26 1847"
    },
    {
        question: "Who was the first President of Liberia?",
        Options: ["Alvin P Nimley", "Joel T Printers", "Preston Deline", "Joseph Jenkins Roberts"],
        correctAnswer: "Joseph Jenkins Roberts"
    },
    {
        question: "How many Ladies made the flag of Liberia?",
        Options: ["12", "7", "20", "25"],
        correctAnswer: "7"
    }
  ];

  // Variab/les to track quiz state
  let currentQuestionIndex = 0;
  let score = 0;
  let timeLeft = 30;
  let timerInerval;

  // Function to start the quiz
  function startQuiz() {
    // Hide the start button and display the first question
    document.getElementById("start-button").style.display = "none";
    displayQuestion();
    startTimer();

    // Function to start the quiz
function startQuiz() {
    // Hide the start button and display the first question and the exit button
    document.getElementById("start-button").style.display = "none";
    document.getElementById("exit-button").style.display = "block";
    displayQuestion();
    startTimer();
  }
  
  // Function to exit the quiz
  function exitQuiz() {
    // Clear the interval for the timer
    clearInterval(timerInerval);
  

    // Show the start button again and hide the exit button
    document.getElementById("start-button").style.display = "block";
    document.getElementById("exit-button").style.display = "none";
   
  
  
    // Reset the quiz state
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 30;
    document.getElementById("timer").textContent = timeLeft;
  
    // Display a message indicating that the quiz has been exited
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = "<h2>Quiz exited!</h2>";
  }
  
  // Add event listener to exit the quiz when the exit button is clicked
  document.getElementById("exit-button").addEventListener("click", exitQuiz);
  }


  // Function to display a question and its options
  function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const questionText = document.getElementById("question-text");
    const answerButtons = document.getElementById("answer-buttons");

    // Clear previous question and answer options
    questionText.innerHTML = "";
    answerButtons.innerHTML = "";

    // Display the current question
    questionText.innerHTML = currentQuestion.question;

    // create answer buttons for each option
    currentQuestion.Options.forEach(Option => {
        const button = document.createElement( "button") ;
        button.innerText = Option;
        button.classList.add("answer-button");
        answerButtons.appendChild(button);

     // Add click event listener to check the answer
     button.addEventListener("click" , function() {
        checkAnswer(Option);
     } );
   } );
 } 

 // Funtion to check the selected answer
 function checkAnswer(selectedOption) {
    const currentQuestion =quizQuestions[currentQuestionIndex];

    // Check if the selected answer is correct
if (selectedOption === currentQuestion.correctAnswer) {
    score++;
}
// Move to the next question or end the quiz if all questions are answered
currentQuestionIndex++;

if (currentQuestionIndex < quizQuestions.length) {
    displayQuestion();
} else {
    endQuiz();
  }
}

// Function to start the timer
function startTimer() {
timerInerval = setInterval(function() {
    timeLeft--;

    // Update the timer text
    document.getElementById("timer").textContent = timeLeft;

    // End the quiz if time runs out
    if (timeLeft <= 0) {
        endQuiz();
   }
  } , 1000);         
} 
 
//Function to end the quiz
function endQuiz() {
    // Stop the timer
    clearInterval(timer);

    // Calculate the score percentage
    const scorePercentage = (score / quizQuestions.length) * 100;

    // Display the final score
    const questionContainer =document.getElementById("question-container");
    questionContainer.innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>Your score: ${score} out of ${quizQuestions.length}<p/>
    <p>Score Percentage: ${score} out of ${scorePercentage}%</p>
    `;
}

// Add event listener to start the quiz button is clicked
document.getElementById("start-button").addEventListener("click", startQuiz);
   



  
 