export default class Ball {
    constructor(gameWidth, gameHeight) {

        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;
        
        this.radius = 8 // size 

        this.position = {
            x: 100,
            y: 100,
        }

        this.speed = {x: 2, y: 2};
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fill();
    }

    update(deltaTime) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        if (this.position.x + this.radius > this.gameWidth || this.position.x < this.radius) {
            this.speed.x = -this.speed.x;
        }

        if (this.position.y + this.radius > this.gameHeight || this.position.y < this.radius) {
            this.speed.y = -this.speed.y;
        }

    }
}