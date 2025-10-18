// tic-tac-toe.js

window.addEventListener('DOMContentLoaded', () => {
    // Select all div elements inside the board
    const squares = document.querySelectorAll('#board div');
    
    // Add the "square" class to each div
    squares.forEach(square => {
        square.classList.add('square');
    });
});
