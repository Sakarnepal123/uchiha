
document.addEventListener('DOMContentLoaded', () => {
    const homeButton = document.getElementById('homeButton');
    const jsOutput = document.getElementById('jsOutput');

    if (homeButton && jsOutput) {
        homeButton.addEventListener('click', () => {
            const now = new Date();
            jsOutput.textContent = `Button clicked at: ${now.toLocaleTimeString()} on ${now.toLocaleDateString()}. This demonstrates external JavaScript functionality.`;
            jsOutput.style.backgroundColor = '#d1e7dd'; 
        });
    }

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); 
            alert('Form submitted successfully! (Functionality implemented via external JavaScript).');
            contactForm.reset();
        });
    }

    
    console.log("External script.js loaded successfully.");
});