// tic-tac-toe.js
window.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('#board div');
    const status = document.getElementById('status');
    const newGameBtn = document.querySelector('.btn');

    let currentPlayer = 'X';
    let boardState = Array(9).fill(null);
    let gameOver = false;

    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    // --- Task 1: style the board ---
    squares.forEach(square => {
        square.classList.add('square');
    });

    // --- Task 2–4: handle game logic ---
    squares.forEach((square, index) => {
        // Click handler
        square.addEventListener('click', () => {
            if (!gameOver && !square.textContent) {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                boardState[index] = currentPlayer;

                if (checkWinner(currentPlayer)) {
                    status.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
                    status.classList.add('you-won');
                    gameOver = true;
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        });

        // Hover handlers
        square.addEventListener('mouseenter', () => {
            square.classList.add('hover');
        });
        square.addEventListener('mouseleave', () => {
            square.classList.remove('hover');
        });
    });

    // --- Task 5: Reset / New Game ---
    newGameBtn.addEventListener('click', () => {
        // Clear board
        squares.forEach(square => {
            square.textContent = '';
            square.classList.remove('X', 'O', 'hover');
        });

        // Reset variables
        boardState = Array(9).fill(null);
        currentPlayer = 'X';
        gameOver = false;

        // Reset status text and style
        status.textContent = 'Move your mouse over a square and click to play an X or an O.';
        status.classList.remove('you-won');
    });

    // --- Helper function to check win condition ---
    function checkWinner(player) {
        return winningCombos.some(combo => {
            return combo.every(index => boardState[index] === player);
        });
    }
});
