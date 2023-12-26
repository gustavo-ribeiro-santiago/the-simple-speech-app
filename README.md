# The Simple Speech App

This web app allows you to assess the readability of a given speech using the Flesch-Kincaid Grade Level test. It provides a user-friendly interface for entering a speech and instantly obtaining the corresponding grade level score.

## How to Run
Access web app [here](gustavo-ribeiro-santiago.github.io/the-simple-speech-app) or clone this repository to run it on your local machine.

## How to Use
1. Enter your speech in the provided text area.
2. You can expand the text box by dragging its bottom right corner.
3. The app will instantly calculate the Flesch-Kincaid Grade Level score for your speech.

## About the Web App
The app utilizes React for building the user interface and incorporates the Bootstrap framework for styling. The Flesch-Kincaid Grade Level test, developed in the 1970s as a project for the US Navy, is employed to estimate the educational level required to understand a given text.

The About section provides information on the Flesch-Kincaid Grade Level test, including its history and significance. Notably, successful communicators like Steve Jobs and Elon Musk are known to deliver speeches that, according to this test, demand minimal education for effective communication.

## Results
The app presents the Flesch-Kincaid Grade Level score along with a color-coded indication of readability. A higher score suggests more complex and advanced language, while a lower score indicates easier-to-understand text. The results also specify the approximate number of years of education required for understanding the speech.

## Components
### App.js
The main component that orchestrates the overall structure of the app. It integrates components like Results and About.

### Results.jsx
Calculates the Flesch-Kincaid Grade Level score based on the input speech and displays the results in a visually appealing card with color-coded indicators.

### About.jsx
An accordion-style component providing information about the Flesch-Kincaid Grade Level test and its relevance in assessing speech readability.

## Dependencies
React: The core library for building the user interface.

Bootstrap: A popular CSS framework for styling.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact
Gustavo Ribeiro Santiago

Email: gustavorsa@poli.ufrj.br

GitHub: https://github.com/gustavo-ribeiro-santiago

Feel free to reach out if you have any questions or feedback!