document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const allLinks = document.querySelectorAll('.nav-links a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    const themeToggle = document.getElementById('checkbox');
    const body = document.body;

    // A consistent class to add/remove for dark mode
    const darkThemeClass = 'dark-theme';

    // 1. Check for a saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    // 2. Check for the user's system preference
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Apply the saved theme or system preference on page load
    if (savedTheme === 'dark' || (savedTheme === null && prefersDark)) {
        body.classList.add(darkThemeClass);
        themeToggle.checked = true;
    }

    // Listen for the toggle button change
    themeToggle.addEventListener('change', (e) => {
        if (e.target.checked) {
            body.classList.add(darkThemeClass);
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove(darkThemeClass);
            localStorage.setItem('theme', 'light');
        }
    });


    // Close menu when a link is clicked
    allLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });

    const sectionsToAnimate = document.querySelectorAll('.features-grid, .call-to-action');
    sectionsToAnimate.forEach(section => {
        observer.observe(section);
        section.classList.add('fade-in-on-scroll');
    });
});



// ... (existing code) ...

    const sectionsToAnimate = document.querySelectorAll('.features-grid, .call-to-action, .feature-grid-section'); // Add .feature-grid-section here
    sectionsToAnimate.forEach(section => {
        observer.observe(section);
        section.classList.add('fade-in-on-scroll');
    });


    document.addEventListener('DOMContentLoaded', () => {
    // ... (existing hamburger and nav-link code) ...

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const allLinks = document.querySelectorAll('.nav-links a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when a link is clicked
    allLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });

    // Add .benefits-for-parents and .faq-section to sectionsToAnimate
    const sectionsToAnimate = document.querySelectorAll('.features-grid, .call-to-action, .feature-grid-section, .benefits-for-parents, .faq-section');
    sectionsToAnimate.forEach(section => {
        observer.observe(section);
        section.classList.add('fade-in-on-scroll');
    });


    // --- Accordion for FAQ section ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            const accordionContent = header.nextElementSibling; // The content div
            
            // Toggle 'active' class on header and content
            header.classList.toggle('active');
            accordionContent.classList.toggle('active');

            // Close other open accordions (optional, but good UX)
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== header && otherHeader.classList.contains('active')) {
                    otherHeader.classList.remove('active');
                    otherHeader.nextElementSibling.classList.remove('active');
                }
            });
        });
    });

});

document.addEventListener('DOMContentLoaded', () => {
    // ... (existing hamburger and nav-link code) ...

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const allLinks = document.querySelectorAll('.nav-links a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when a link is clicked
    allLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });

    // Add .contact-form-section and .map-section to sectionsToAnimate
    const sectionsToAnimate = document.querySelectorAll('.features-grid, .call-to-action, .feature-grid-section, .benefits-for-parents, .faq-section, .contact-form-section, .map-section');
    sectionsToAnimate.forEach(section => {
        observer.observe(section);
        section.classList.add('fade-in-on-scroll');
    });

    // --- Accordion for FAQ section (existing code) ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            const accordionContent = header.nextElementSibling;
            
            header.classList.toggle('active');
            accordionContent.classList.toggle('active');

            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== header && otherHeader.classList.contains('active')) {
                    otherHeader.classList.remove('active');
                    otherHeader.nextElementSibling.classList.remove('active');
                }
            });
        });
    });

    // --- Contact Form Submission (Example - replace with actual backend logic) ---
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            // Here you would typically send the form data to a backend server
            // using fetch() or XMLHttpRequest.
            console.log('Form submitted!');
            const formData = new FormData(contactForm);
            for (let [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }
            
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset(); // Clear the form after submission
        });
    }

});

document.addEventListener('DOMContentLoaded', () => {
    // --- Basic Shape Puzzle Logic ---
    const shapePuzzleArea = document.getElementById('shape-puzzle');
    if (shapePuzzleArea) {
        const shapes = ['square', 'circle', 'triangle', 'star'];
        const puzzlePieces = [];

        shapes.forEach(shape => {
            const piece = document.createElement('div');
            piece.classList.add('puzzle-piece', shape);
            piece.draggable = true;
            piece.style.backgroundColor = 'var(--secondary-color)';
            puzzlePieces.push(piece);
        });

        // Add a "correct" drop zone for each piece
        const dropZones = shapes.map(shape => {
            const dropZone = document.createElement('div');
            dropZone.classList.add('drop-zone', shape);
            dropZone.style.width = '80px';
            dropZone.style.height = '80px';
            dropZone.style.border = '2px dashed #999';
            dropZone.style.borderRadius = '10px';
            dropZone.style.margin = '10px';
            return dropZone;
        });

        // Append drop zones to the puzzle area
        dropZones.forEach(zone => shapePuzzleArea.appendChild(zone));

        // Drag and drop event listeners
        puzzlePieces.forEach(piece => {
            piece.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', piece.classList[1]);
            });
            document.body.appendChild(piece); // Move pieces to body to allow dragging anywhere
        });

        dropZones.forEach(zone => {
            zone.addEventListener('dragover', (e) => e.preventDefault());
            zone.addEventListener('drop', (e) => {
                e.preventDefault();
                const data = e.dataTransfer.getData('text/plain');
                if (data === zone.classList[1]) {
                    const droppedPiece = document.querySelector(`.puzzle-piece.${data}`);
                    zone.appendChild(droppedPiece);
                    droppedPiece.style.transform = 'translate(0, 0)';
                    droppedPiece.classList.add('correct');
                    droppedPiece.draggable = false;
                    console.log(`${data} puzzle piece placed correctly!`);
                }
            });
        });
    }

    // --- Basic Color Match Puzzle Logic ---
    const colorPuzzleArea = document.getElementById('color-puzzle');
    if (colorPuzzleArea) {
        const colors = ['red', 'blue', 'green', 'yellow'];
        const colorPieces = [];
        const colorZones = [];

        colors.forEach(color => {
            const piece = document.createElement('div');
            piece.classList.add('puzzle-piece', `bg-${color}`);
            piece.draggable = true;
            piece.style.backgroundColor = color;
            colorPieces.push(piece);

            const zone = document.createElement('div');
            zone.classList.add('drop-zone', `zone-${color}`);
            zone.style.width = '80px';
            zone.style.height = '80px';
            zone.style.border = '2px dashed #999';
            zone.style.borderRadius = '50%';
            zone.style.margin = '10px';
            colorZones.push(zone);
        });

        colorZones.forEach(zone => colorPuzzleArea.appendChild(zone));
        colorPieces.forEach(piece => document.body.appendChild(piece));

        colorPieces.forEach(piece => {
            piece.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', piece.classList[1]);
            });
        });

        colorZones.forEach(zone => {
            zone.addEventListener('dragover', (e) => e.preventDefault());
            zone.addEventListener('drop', (e) => {
                e.preventDefault();
                const data = e.dataTransfer.getData('text/plain');
                if (zone.classList.contains(`zone-${data.split('-')[1]}`)) {
                    const droppedPiece = document.querySelector(`.puzzle-piece.${data}`);
                    zone.appendChild(droppedPiece);
                    droppedPiece.style.transform = 'translate(0, 0)';
                    droppedPiece.classList.add('correct');
                    droppedPiece.draggable = false;
                    console.log(`Correctly matched ${data} color!`);
                }
            });
        });
    }
});