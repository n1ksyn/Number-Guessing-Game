# Number Guessing Game

A simple web-based number guessing game built with HTML, CSS, and vanilla JavaScript.

## Description

This is a classic game where the computer picks a random number between 1 and 100, and the player tries to guess it. The game provides feedback ("Too high!", "Too low!") after each guess and keeps track of the number of attempts until the player guesses correctly.

## Features

*   Random number generation (1-100).
*   User input for guesses.
*   Feedback on whether the guess is too high, too low, or correct.
*   Attempt counter.
*   Input validation (ensures input is a number within the valid range).
*   Responsive basic styling.
*   Keeps the previous guess in the input field for reference.
*   Ability to submit guess by pressing Enter key.

## How to Run Locally

1.  **Clone or Download:** Get the project files (`index.html`, `style.css`, `script.js`) onto your local machine.
2.  **Navigate:** Make sure all three files are in the same folder.
3.  **Open:** Double-click the `index.html` file, or open it using your web browser (File > Open).

No special server or build process is required to play the game.

## Technologies Used

*   HTML5
*   CSS3
*   Vanilla JavaScript (ES6+)

## How to Run Tests (Optional)

This project includes unit tests for some of its logic using the Jest testing framework.

1.  **Prerequisites:** Ensure you have Node.js and npm installed.
2.  **Install Dependencies:** Open a terminal or command prompt in the project's root directory and run:
    ```bash
    npm install
    ```
    (This step is only needed if you haven't done it before and have the `package.json` file from setting up Jest).
3.  **Run Tests:** In the same terminal, run:
    ```bash
    npm test
    ```
    Jest will execute the tests located in the `tests/` folder and display the results.

## Future Improvements (Ideas)

*   Add a "Play Again" button to restart the game without reloading the page.
*   Implement a limit on the number of guesses allowed.
*   Store high scores using local storage.
*   Improve UI/UX design.
*   Refactor JavaScript to use Modules (`import`/`export`) for better organization and testability.
