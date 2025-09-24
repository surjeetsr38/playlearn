document.addEventListener('DOMContentLoaded', () => {
    const words = [
        { original: "APPLE", scrambled: "PPALE" },
        { original: "ELEPHANT", scrambled: "NPAETLHE" },
        { original: "COMPUTER", scrambled: "PMOCUTRE" },
        { original: "SUNSHINE", scrambled: "SHNIEUNS" },
        { original: "FRIEND", scrambled: "NFRIDE" }
    ];

    const scrambledWordDiv = document.getElementById('scrambled-word');
    const wordAnswerInput = document.getElementById('word-answer');
    const submitBtn = document.getElementById('submit-word-answer');
    const feedbackDiv = document.getElementById('word-feedback');
    const nextBtn = document.getElementById('next-word-puzzle');

    let currentWordIndex = 0;

    function shuffleWord(word) {
        const a = word.split("");
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a.join("");
    }

    function displayPuzzle() {
        if (currentWordIndex < words.length) {
            const currentPuzzle = words[currentWordIndex];
            // To ensure it's actually scrambled, we can shuffle the provided scrambled version
            scrambledWordDiv.textContent = shuffleWord(currentPuzzle.scrambled).toUpperCase();
            wordAnswerInput.value = '';
            feedbackDiv.textContent = '';
            submitBtn.style.display = 'inline-block';
            nextBtn.style.display = 'none';
            wordAnswerInput.focus();
        } else {
            scrambledWordDiv.textContent = "You've completed all words!";
            wordAnswerInput.style.display = 'none';
            submitBtn.style.display = 'none';
            nextBtn.style.display = 'none';
            feedbackDiv.textContent = "Great job!";
            feedbackDiv.style.color = 'green';
        }
    }

    function checkWord() {
        const userAnswer = wordAnswerInput.value.toUpperCase();
        const correctWord = words[currentWordIndex].original.toUpperCase();

        if (userAnswer === correctWord) {
            feedbackDiv.textContent = "That's right! 🎉";
            feedbackDiv.style.color = 'green';
            submitBtn.style.display = 'none';
            nextBtn.style.display = 'inline-block';
        } else {
            feedbackDiv.textContent = `Not quite! Keep trying or click "Next Word".`;
            feedbackDiv.style.color = 'red';
            submitBtn.style.display = 'none';
            nextBtn.style.display = 'inline-block';
        }
    }

    submitBtn.addEventListener('click', checkWord);
    nextBtn.addEventListener('click', () => {
        currentWordIndex++;
        displayPuzzle();
    });
    wordAnswerInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            if (submitBtn.style.display !== 'none') {
                checkWord();
            } else if (nextBtn.style.display !== 'none') {
                currentWordIndex++;
                displayPuzzle();
            }
        }
    });

    displayPuzzle(); // Start the first word puzzle
});