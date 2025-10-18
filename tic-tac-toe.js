// tic-tac-toe.js
window.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('#board div');
    let currentPlayer = 'X';
    let boardState = Array(9).fill(null); // track board state

    // Task 1: style squares
    squares.forEach(square => {
        square.classList.add('square');
    });

    // Task 2: handle clicks
    squares.forEach((square, index) => {
        square.addEventListener('click', () => {
            // Only mark if square is empty
            if (!square.textContent) {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer); // adds .X or .O style
                boardState[index] = currentPlayer;

                // Switch player for next turn
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    });
});