<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home - My Web Application</title>
    <link rel="stylesheet" href="styless.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <header>
        <nav class="navbar">
            <a href="index.html" class="nav-link current"><i class="fas fa-home"></i> Home</a>
            <a href="about.html" class="nav-link"><i class="fas fa-info-circle"></i> About</a>
            <a href="contact.html" class="nav-link"><i class="fas fa-envelope"></i> Contact</a>
        </nav>
    </header>

    <main class="content-container">
        <h1>Welcome to Our Website!</h1>
        <p>This is the Home Page, demonstrating structured navigation and modular coding practices as required by the assignment objective. We use external CSS and JavaScript for clean separation of concerns.</p>
        <section class="info-section">
            <h2>Key Features:</h2>
            <ul>
                <li>Modular structure (HTML, CSS, JS separation).</li>
                <li>Responsive navigation bar using Flexbox.</li>
                <li>Font Awesome icons for enhanced aesthetics.</li>
            </ul>
        </section>
        <button id="homeButton">Click to see JavaScript in action!</button>
        <p id="jsOutput" class="output-text"></p>
    </main>

    <footer>
        <p>&copy; 2025 Web Application. All rights reserved.</p>
    </footer>

    <script src="scripts.js"></script>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About - My Web Application</title>
    <link rel="stylesheet" href="styless.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <header>
        <nav class="navbar">
            <a href="index.html" class="nav-link"><i class="fas fa-home"></i> Home</a>
            <a href="about.html" class="nav-link current"><i class="fas fa-info-circle"></i> About</a>
            <a href="contact.html" class="nav-link"><i class="fas fa-envelope"></i> Contact</a>
        </nav>
    </header>

    <main class="content-container">
        <h1>About Our Project</h1>
        <p>This page details the implementation choices made for the assignment, fulfilling the **Design and Layout** requirements. The code is modular, separating content (HTML), styling (CSS), and behavior (JavaScript).</p>
        
        <div class="layout-details">
            <div class="detail-box">
                <h3><i class="fas fa-code"></i> Modular Coding</h3>
                <p>Content is in HTML, styling in **styles.css**, and functionality in **script.js**. This ensures a maintainable and readable codebase.</p>
            </div>
            <div class="detail-box">
                <h3><i class="fas fa-grip-lines"></i> CSS Layout</h3>
                <p>Flexbox is primarily used for the navigation bar and the general layout structure, ensuring content is properly aligned and justified.</p>
            </div>
        </div>
        
    </main>

    <footer>
        <p>&copy; 2025 Web Application. All rights reserved.</p>
    </footer>

    <script src="scripts.js"></script>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact - My Web Application</title>
    <link rel="stylesheet" href="styless.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <header>
        <nav class="navbar">
            <a href="index.html" class="nav-link"><i class="fas fa-home"></i> Home</a>
            <a href="about.html" class="nav-link"><i class="fas fa-info-circle"></i> About</a>
            <a href="contact.html" class="nav-link current"><i class="fas fa-envelope"></i> Contact</a>
        </nav>
    </header>

    <main class="content-container">
        <h1>Contact Us</h1>
        <p>Please use the form below to get in touch. This demonstrates a simple form layout.</p>

        <form class="contact-form">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit" class="submit-button"><i class="fas fa-paper-plane"></i> Send Message</button>
        </form>
    </main>

    <footer>
        <p>&copy; 2025 Web Application. All rights reserved.</p>
    </footer>

    <script src="scripts.js"></script>
</body>
</html>

document.addEventListener('DOMContentLoaded', () => {
    const homeButton = document.getElementById('homeButton');
    const jsOutput = document.getElementById('jsOutput');

    if (homeButton && jsOutput) {
        homeButton.addEventListener('click', () => {
            const now = new Date();
            jsOutput.textContent = `Button clicked at: ${now.toLocaleTimeString()} on ${now.toLocaleDateString()}. This demonstrates external JavaScript functionality.`;
            jsOutput.style.backgroundColor = '#d1e7dd'; // Visual feedback
        });
    }

    // Simple alert for Contact Form submission (demonstrates JS interaction)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Stop form from actually submitting
            alert('Form submitted successfully! (Functionality implemented via external JavaScript).');
            contactForm.reset();
        });
    }

    // Console log to confirm script loading (for debugging/verification)
    console.log("External script.js loaded successfully.");
});

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: #f4f4f9;
    color: #333;
    /* Basic Flex setup for full-height page structure (header, main, footer) */
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

/* --- Header and Navigation Bar (Flexbox Implementation) --- */
header {
    background: #34495e;
    color: white;
    padding: 1em 0;
}

.navbar {
    width: 90%;
    margin: 0 auto;
    display: flex; /* Use Flexbox for navigation */
    justify-content: space-around; /* Distribute links evenly */
    align-items: center;
}

.nav-link {
    color: white;
    text-decoration: none;
    padding: 0.5em 1em;
    border-radius: 5px;
    transition: background-color 0.3s;
    display: flex; /* Flex to align icon and text */
    align-items: center;
}

.nav-link i {
    margin-right: 8px; /* Space between icon and text */
}

.nav-link:hover {
    background-color: #2c3e50;
}

.nav-link.current {
    background-color: #e67e22; /* Highlight current page */
    font-weight: bold;
}

/* --- Main Content and Layout --- */
.content-container {
    width: 90%;
    margin: 2em auto;
    padding: 2em;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    flex-grow: 1; /* Allows main content to take up available space */
    text-align: justify; /* Ensure content is properly justified where appropriate */
}

h1 {
    color: #3498db;
    margin-bottom: 0.5em;
    border-bottom: 2px solid #ecf0f1;
    padding-bottom: 0.3em;
}

/* Home Page Specific Styling */
.info-section h2 {
    margin-top: 1.5em;
    color: #e74c3c;
}
.output-text {
    margin-top: 1em;
    padding: 0.5em;
    background-color: #ecf0f1;
    border-left: 5px solid #3498db;
}

/* About Page Flexbox Layout (Grid-like effect) */
.layout-details {
    display: flex;
    gap: 20px;
    margin-top: 2em;
}

.detail-box {
    flex: 1; /* Distributes boxes equally */
    padding: 15px;
    border: 1px solid #bdc3c7;
    border-radius: 6px;
    background-color: #f9f9f9;
}

.detail-box h3 {
    color: #27ae60;
    margin-bottom: 10px;
}

/* Contact Form Styling */
.contact-form {
    max-width: 600px;
    margin-top: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

.form-group textarea {
    resize: vertical;
    height: 100px;
}

.submit-button {
    background-color: #3498db;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.submit-button:hover {
    background-color: #2980b9;
}


/* --- Footer --- */
footer {
    text-align: center;
    padding: 1em 0;
    background: #34495e;
    color: white;
    margin-top: auto; /* Pushes the footer to the bottom */
}
