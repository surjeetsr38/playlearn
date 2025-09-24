document.addEventListener('DOMContentLoaded', () => {
    const codeBlocks = document.querySelectorAll('.code-block');
    const programArea = document.getElementById('program-area');
    const runBtn = document.getElementById('run-code-btn');
    const critter = document.getElementById('critter');
    const feedbackDiv = document.getElementById('coding-feedback');

    let droppedBlocks = 0;

    // Drag and drop logic
    codeBlocks.forEach(block => {
        block.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', e.target.dataset.action);
        });
    });

    programArea.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    programArea.addEventListener('drop', (e) => {
        e.preventDefault();
        const action = e.dataTransfer.getData('text/plain');
        if (action === 'move-forward') {
            const newBlock = document.createElement('div');
            newBlock.classList.add('code-block', 'placed');
            newBlock.textContent = 'Move Forward';
            programArea.appendChild(newBlock);
            if (programArea.querySelector('p')) {
                programArea.querySelector('p').style.display = 'none';
            }
            droppedBlocks++;
        }
    });

    // Run button logic
    runBtn.addEventListener('click', () => {
        if (droppedBlocks < 1) {
            feedbackDiv.textContent = 'Drag some blocks first!';
            feedbackDiv.style.color = 'orange';
            return;
        }

        let critterPos = 0;
        let blocksExecuted = 0;
        const totalMoves = programArea.querySelectorAll('.placed').length;

        function executeNextBlock() {
            if (blocksExecuted < totalMoves) {
                const block = programArea.querySelectorAll('.placed')[blocksExecuted];
                block.style.backgroundColor = '#ffd166'; // Highlight block
                critterPos += 50; // Move 50px
                critter.style.left = `${critterPos}px`;
                feedbackDiv.textContent = `Critter moved forward!`;
                
                setTimeout(() => {
                    block.style.backgroundColor = ''; // Reset color
                    blocksExecuted++;
                    executeNextBlock(); // Run the next block
                }, 800);
            } else {
                checkWin();
            }
        }

        function checkWin() {
            const goal = document.getElementById('goal');
            const goalPos = parseInt(goal.style.left);
            if (critterPos === goalPos) {
                feedbackDiv.textContent = 'You did it! The critter reached the goal!';
                feedbackDiv.style.color = 'green';
            } else {
                feedbackDiv.textContent = 'Oh no, the critter missed the goal. Try again!';
                feedbackDiv.style.color = 'red';
            }
        }
        
        // Reset and run
        critter.style.left = '0';
        feedbackDiv.textContent = 'Running program...';
        droppedBlocks = 0;
        programArea.innerHTML = '<p>Drag blocks here to build your program...</p>';
        executeNextBlock();
    });
});