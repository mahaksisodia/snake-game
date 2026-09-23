export class Snake {

    constructor() {

        this.body = [
            { x: 10, y: 10 },
            { x: 9, y: 10 },
            { x: 8, y: 10 }
        ];

        this.direction = {
            x: 1,
            y: 0
        };

    }

    // Get head
    getHead() {

        return this.body[0];

    }

    // Move snake by adding a new head
    move(newHead) {

        return this.body.unshift(newHead);

    }

    // Remove tail
    removeTail() {

        return this.body.pop();

    }

    // Grow snake
    grow(newHead) {

        this.body.unshift(newHead);

    }

    // Set direction
    setDirection(direction) {

        if (direction === "up") {

            this.direction = {
                x: 0,
                y: -1
            };

        }

        if (direction === "down") {

            this.direction = {
                x: 0,
                y: 1
            };

        }

        if (direction === "left") {

            this.direction = {
                x: -1,
                y: 0
            };

        }

        if (direction === "right") {

            this.direction = {
                x: 1,
                y: 0
            };

        }

    }

    // Get body
    getBody() {

        return this.body;

    }

}