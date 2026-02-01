// Restaurant Service Training Game Logic

// Speech Recognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// Variables
let currentLevel = 0;
const levels = [
    {
        question: 'How do you greet a customer?'
        options: ['Hello', 'Hey', 'Greetings'],
        answer: 'Hello'
    },
    {
        question: 'What do you say when a customer is leaving?'
        options: ['Goodbye', 'See you later', 'Take care'],
        answer: 'Goodbye'
    }
];

// Start the game
function startGame() {
    currentLevel = 0;
    askQuestion();
}

// Ask a question
function askQuestion() {
    if (currentLevel < levels.length) {
        const level = levels[currentLevel];
        console.log(level.question);
        // Start speech recognition
        recognition.start();
    } else {
        console.log('Congratulations! You completed the game.');
    }
}

// Capture user's answer
recognition.onresult = function(event) {
    const speechResult = event.results[0][0].transcript;
    validateAnswer(speechResult);
};

// Validate user's answer
function validateAnswer(answer) {
    const correctAnswer = levels[currentLevel].answer;
    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
        console.log('Correct!');
        currentLevel++;
        askQuestion();
    } else {
        console.log('Try again!');
    }
}

// Start the game when the user is ready
startGame();