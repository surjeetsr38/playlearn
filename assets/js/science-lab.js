document.addEventListener('DOMContentLoaded', () => {
    const mixerBeaker = document.getElementById('mixer-beaker');
    const beakers = document.querySelectorAll('.beaker');
    const feedbackDiv = document.getElementById('science-feedback');

    // Drag and drop logic
    let droppedColors = [];

    beakers.forEach(beaker => {
        beaker.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', e.target.dataset.color);
            e.dataTransfer.setData('value', e.target.dataset.value);
            e.dataTransfer.effectAllowed = 'copy';
        });
    });

    mixerBeaker.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    mixerBeaker.addEventListener('drop', (e) => {
        e.preventDefault();
        const color = e.dataTransfer.getData('text/plain');
        if (droppedColors.length < 2 && !droppedColors.includes(color)) {
            droppedColors.push(color);
            feedbackDiv.textContent = `You added ${color}!`;
        }

        if (droppedColors.length === 2) {
            let newColor;
            let resultText;
            const c1 = droppedColors[0];
            const c2 = droppedColors[1];
            
            if ((c1 === 'red' && c2 === 'yellow') || (c1 === 'yellow' && c2 === 'red')) {
                newColor = 'orange';
                resultText = 'red and yellow make orange!';
            } else if ((c1 === 'red' && c2 === 'blue') || (c1 === 'blue' && c2 === 'red')) {
                newColor = 'purple';
                resultText = 'red and blue make purple!';
            } else if ((c1 === 'blue' && c2 === 'yellow') || (c1 === 'yellow' && c2 === 'blue')) {
                newColor = 'green';
                resultText = 'blue and yellow make green!';
            }

            if (newColor) {
                mixerBeaker.style.backgroundColor = newColor;
                feedbackDiv.textContent = `Awesome! You mixed a new color! You discovered that ${resultText}`;
            }
            droppedColors = []; // Reset for a new mix
        }
    });
});