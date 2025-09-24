document.addEventListener('DOMContentLoaded', () => {
    const num1Span = document.getElementById('num1');
    const num2Span = document.getElementById('num2');
    const mathAnswerInput = document.getElementById('math-answer');
    const submitBtn = document.getElementById('submit-math-answer');
    const feedbackDiv = document.getElementById('math-feedback');
    const nextBtn = document.getElementById('next-math-problem');
    const scoreSpan = document.getElementById('math-score');

    let correctAnswer;
    let score = 0;

    function generateProblem() {
        const num1 = Math.floor(Math.random() * 10) + 1; // 1-10
        const num2 = Math.floor(Math.random() * 10) + 1; // 1-10
        num1Span.textContent = num1;
        num2Span.textContent = num2;
        correctAnswer = num1 + num2;
        mathAnswerInput.value = '';
        feedbackDiv.textContent = '';
        submitBtn.style.display = 'inline-block';
        nextBtn.style.display = 'none';
        mathAnswerInput.focus();
    }

    function checkAnswer() {
        const userAnswer = parseInt(mathAnswerInput.value);
        if (isNaN(userAnswer)) {
            feedbackDiv.textContent = "Please enter a number!";
            feedbackDiv.style.color = 'orange';
            return;
        }

        if (userAnswer === correctAnswer) {
            feedbackDiv.textContent = "Correct! ⭐";
            feedbackDiv.style.color = 'green';
            score++;
            scoreSpan.textContent = score;
            submitBtn.style.display = 'none';
            nextBtn.style.display = 'inline-block';
        } else {
            feedbackDiv.textContent = `Wrong! The answer was ${correctAnswer}.`;
            feedbackDiv.style.color = 'red';
            submitBtn.style.display = 'none';
            nextBtn.style.display = 'inline-block';
        }
    }

    submitBtn.addEventListener('click', checkAnswer);
    nextBtn.addEventListener('click', generateProblem);
    mathAnswerInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            if (submitBtn.style.display !== 'none') {
                checkAnswer();
            } else if (nextBtn.style.display !== 'none') {
                generateProblem();
            }
        }
    });

    generateProblem(); // Start the first problem
});