// tic-tac-toe.js
window.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('#board div');
    let currentPlayer = 'X';
    let boardState = Array(9).fill(null); // track moves

    // Task 1: Add the "square" class
    squares.forEach(square => {
        square.classList.add('square');
    });

    // Task 2 & 3: Add event listeners for click and hover
    squares.forEach((square, index) => {

        // 🖱️ When a square is clicked
        square.addEventListener('click', () => {
            if (!square.textContent) {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                boardState[index] = currentPlayer;
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });

        // 🎨 When mouse enters (hover starts)
        square.addEventListener('mouseenter', () => {
            square.classList.add('hover');
        });

        // 🎨 When mouse leaves (hover ends)
        square.addEventListener('mouseleave', () => {
            square.classList.remove('hover');
        });
    });
});
