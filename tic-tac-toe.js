// tic-tac-toe.js
window.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('#board div');
    const status = document.getElementById('status');
    let currentPlayer = 'X';
    let boardState = Array(9).fill(null);
    let gameOver = false;

    // Define all winning combinations
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    // Add square styling
    squares.forEach(square => {
        square.classList.add('square');
    });

    // Add event listeners
    squares.forEach((square, index) => {
        // Handle click
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

        // Hover effects
        square.addEventListener('mouseenter', () => {
            square.classList.add('hover');
        });

        square.addEventListener('mouseleave', () => {
            square.classList.remove('hover');
        });
    });

    // Function to check for a winner
    function checkWinner(player) {
        return winningCombos.some(combo => {
            return combo.every(index => boardState[index] === player);
        });
    }
});
