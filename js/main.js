import { Game } from './game.js';

const board = document.getElementById('game-board');

let game;
let interval;


// Create board
const createBoard = () => {

    board.innerHTML = "";

    for (let y = 0; y < game.rows; y++) {

        for (let x = 0; x < game.columns; x++) {

            const cell = document.createElement('div');

            cell.classList.add('cell');

            cell.dataset.x = x;
            cell.dataset.y = y;

            board.appendChild(cell);

        }

    }

};


// Render game
const render = () => {

    const cells = board.children;

    // Clear old classes
    for (const cell of cells) {

        cell.classList.remove('snake','head','food');

    }


    // Render snake
    game.snake
        .getBody()
        .forEach((segment, index) => {

            const cell = board.querySelector(
                `[data-x="${segment.x}"][data-y="${segment.y}"]`
            );

            if (!cell) return;

            cell.classList.add('snake');

            // First segment = head
            if (index === 0) {

                cell.classList.add('head');

            }

        });

};


// Start game
const startGame = () => {

    // Clear previous interval
    clearInterval(interval);

    // Create Game instance
    game = new Game();

    // Create board
    createBoard();

    // Initial render
    render();


    // Update game every 150ms
    interval = setInterval(() => {

        game.update();

        render();

        // Stop interval when game ends
        if (!game.running) {

            clearInterval(interval);

        }

    }, game.speed);

};


// Keyboard controls
document.addEventListener('keydown', (event) => {

    if (!game) return;

    if (event.key === "ArrowUp") {

        game.setDirection("UP");

    }

    if (event.key === "ArrowDown") {

        game.setDirection("DOWN");

    }

    if (event.key === "ArrowLeft") {

        game.setDirection("LEFT");

    }

    if (event.key === "ArrowRight") {

        game.setDirection("RIGHT");

    }

});


// Start game
startGame();