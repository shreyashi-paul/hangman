# hangman

Hangman is a web-based game that requires guessing random words. The words are populated randomly, representing all 26 letters of the alphabet.

The user has to guess the correct words, and for every wrong guess, the user will be penalized, such as the hangman steps will begin, and if the user can't guess the word, the man character is hanged.


## Demo & Snippets

- hosted link - shreyashi-paul.github.io/hangman/
- images of app if CLI or Client App
- ![image](https://github.com/user-attachments/assets/ed3273ad-6ca5-4c08-9bd7-ada290a9c641)
- ![image](https://github.com/user-attachments/assets/ba8f0183-8c6c-43fa-a7d4-dffcc02c4fdf)
- ![image](https://github.com/user-attachments/assets/ae647e91-39b4-4957-a8f1-86c49ae61b98)


## Requirements / Purpose

-   MVP
  
A game should start with a word being randomly selected.
A representation of the word made up of underscore (_) characters should display on the screen.
Create a user interface made up of buttons representing all 26 letters of the alphabet.
Clicking a button should register its letter as a 'guess'
If the letter clicked is in the word each underscore corresponding to that letter should be replaced with the letter.
If the letter is not in the word, an additional element to the hangman diagram should be added.
The game should keep track of which letters have been 'guessed' already.
The game should provide a win or loss message depending on the outcome
There should be some functionality to play again.

-   purpose of project
   
  The main purpose of this project is to apply the JavaScript learning into a web-based project that can interact with users, and users find it fun to play with.
  
-  stack used and why

HTML CSS SCSS JavaScript DOM Manipulation are used to create classes and ids, so that Javascript functions can be written to the game interactive such as pressing the alphabet button to guess the random word.
Also, the users will receive messages to verify whether they win or lose the game.


## Future Goals

-   users can play the hangman game using keyborads at this moment but the plan is to enable this game without a keyboard.
-   Currently the game doesn't show the words that's already been used but the plan is to display those on screen for user reference.
