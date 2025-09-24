document.addEventListener('DOMContentLoaded', () => {

    // --- Shape Sorter Puzzle Logic ---
    const shapePuzzleArea = document.getElementById('shape-puzzle');
    if (shapePuzzleArea) {
        const shapes = ['square', 'circle', 'triangle', 'star'];
        const puzzlePieces = [];

        // Create the draggable puzzle pieces
        shapes.forEach(shape => {
            const piece = document.createElement('div');
            piece.classList.add('puzzle-piece', `piece-${shape}`);
            piece.setAttribute('draggable', 'true');
            piece.dataset.shape = shape; // Store the shape in a data attribute
            
            // This is a simple visual representation of the shape using CSS
            if (shape === 'square') {
                piece.style.borderRadius = '5px';
            } else if (shape === 'circle') {
                piece.style.borderRadius = '50%';
            } else if (shape === 'triangle') {
                piece.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
            } else if (shape === 'star') {
                piece.style.clipPath = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)';
            }
            
            puzzlePieces.push(piece);
        });

        // Create the drop zones
        const dropZones = shapes.map(shape => {
            const dropZone = document.createElement('div');
            dropZone.classList.add('drop-zone', `zone-${shape}`);
            dropZone.dataset.shape = shape; // Store the shape in a data attribute
            
            // This is a simple visual representation of the drop zone
            if (shape === 'square') {
                dropZone.style.borderRadius = '5px';
            } else if (shape === 'circle') {
                dropZone.style.borderRadius = '50%';
            } else if (shape === 'triangle') {
                dropZone.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
            } else if (shape === 'star') {
                dropZone.style.clipPath = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)';
            }
            
            return dropZone;
        });

        // Append drop zones and draggable pieces to the page
        const container = document.createElement('div');
        container.classList.add('puzzle-container');
        dropZones.forEach(zone => container.appendChild(zone));
        puzzlePieces.forEach(piece => container.appendChild(piece));
        shapePuzzleArea.appendChild(container);
        
        // --- Drag and Drop Event Listeners ---
        let draggedItem = null;

        document.addEventListener('dragstart', (e) => {
            if (e.target.classList.contains('puzzle-piece')) {
                draggedItem = e.target;
                // Add a class for visual feedback while dragging
                setTimeout(() => e.target.style.opacity = '0.5', 0);
            }
        });

        document.addEventListener('dragend', (e) => {
            if (e.target.classList.contains('puzzle-piece')) {
                e.target.style.opacity = '1';
                draggedItem = null;
            }
        });

        document.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        document.addEventListener('drop', (e) => {
            e.preventDefault();
            if (e.target.classList.contains('drop-zone') && draggedItem) {
                if (e.target.dataset.shape === draggedItem.dataset.shape) {
                    // Correct match!
                    e.target.appendChild(draggedItem);
                    draggedItem.classList.add('correct');
                    draggedItem.style.transform = 'scale(1)'; // Reset any scaling
                    draggedItem.removeAttribute('draggable');
                    console.log(`Placed ${draggedItem.dataset.shape} correctly!`);

                    // Optional: Check if all pieces are placed
                    const allCorrect = document.querySelectorAll('.puzzle-piece.correct').length === shapes.length;
                    if (allCorrect) {
                        alert('You did it! You solved the puzzle!');
                    }
                }
            }
        });
    }

    // --- Color Match Puzzle Logic ---
    const colorPuzzleArea = document.getElementById('color-puzzle');
    if (colorPuzzleArea) {
        const colors = ['#ff6b6b', '#ffd166', '#6a05f0', '#06d6a0'];
        const colorNames = ['red', 'yellow', 'purple', 'green'];
        
        // Create the drop zones
        const dropZones = colors.map((color, index) => {
            const dropZone = document.createElement('div');
            dropZone.classList.add('drop-zone');
            dropZone.dataset.color = color;
            dropZone.style.backgroundColor = 'transparent'; // Drop zone background
            dropZone.style.border = `2px dashed ${color}`;
            dropZone.style.borderRadius = '50%';
            dropZone.style.width = '80px';
            dropZone.style.height = '80px';
            
            // Add a label for the drop zone
            const label = document.createElement('span');
            label.textContent = colorNames[index];
            label.style.color = color;
            dropZone.appendChild(label);

            return dropZone;
        });

        // Create the draggable color pieces
        const colorPieces = colors.slice().sort(() => Math.random() - 0.5).map(color => {
            const piece = document.createElement('div');
            piece.classList.add('puzzle-piece');
            piece.setAttribute('draggable', 'true');
            piece.dataset.color = color;
            piece.style.backgroundColor = color;
            piece.style.width = '70px';
            piece.style.height = '70px';
            piece.style.borderRadius = '50%';
            return piece;
        });

        // Append to the puzzle area
        const container = document.createElement('div');
        container.classList.add('puzzle-container');
        dropZones.forEach(zone => container.appendChild(zone));
        colorPieces.forEach(piece => container.appendChild(piece));
        colorPuzzleArea.appendChild(container);

        // --- Drag and Drop Event Listeners (reusing the same logic) ---
        let draggedItem = null;

        document.addEventListener('dragstart', (e) => {
            if (e.target.classList.contains('puzzle-piece')) {
                draggedItem = e.target;
                setTimeout(() => e.target.style.opacity = '0.5', 0);
            }
        });

        document.addEventListener('dragend', (e) => {
            if (e.target.classList.contains('puzzle-piece')) {
                e.target.style.opacity = '1';
                draggedItem = null;
            }
        });

        document.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        document.addEventListener('drop', (e) => {
            e.preventDefault();
            if (e.target.classList.contains('drop-zone') && draggedItem) {
                if (e.target.dataset.color === draggedItem.dataset.color) {
                    e.target.appendChild(draggedItem);
                    draggedItem.classList.add('correct');
                    draggedItem.style.transform = 'scale(1)';
                    draggedItem.removeAttribute('draggable');
                    console.log(`Matched ${draggedItem.dataset.color} correctly!`);

                    const allCorrect = document.querySelectorAll('.puzzle-piece.correct').length === colors.length;
                    if (allCorrect) {
                        alert('You did it! You solved the color puzzle!');
                    }
                }
            }
        });
    }
});