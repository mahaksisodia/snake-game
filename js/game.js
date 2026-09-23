import { Snake } from './snake.js';

export class Game {

    constructor() {

        this.rows = 20;
        this.columns = 20;

        // Created the snake
        this.snake = new Snake();

        // speed of the game
        this.speed = 150;

        // Direction
        this.direction = "RIGHT";
        this.nextDirection = "RIGHT";

        // Game running
        this.running = true;

        // Create food
        this.food = null;

    }

    // Set direction
    setDirection(direction) {

        this.nextDirection = direction;

    }

    // Update game state
    update() {

        if (this.running === false) return;

        // Update direction
        this.direction = this.nextDirection;

        const movement = {

            UP: { x: 0, y: -1 },
            DOWN: { x: 0, y: 1 },
            LEFT: { x: -1, y: 0 },
            RIGHT: { x: 1, y: 0 }

        };

        // Get current head
        const head = this.snake.getHead();

        // Calculate new head
        const newHead = {

            x: head.x + movement[this.direction].x,

            y: head.y + movement[this.direction].y

        };

        // Move snake
        this.snake.move(newHead);

        // Remove tail
        this.snake.removeTail();

    }

    // End game
    endGame() {

        this.running = false;

        console.log("Game Over");

    }

}