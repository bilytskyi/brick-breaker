export default class Ball {
    constructor(game) {

        this.gameHeight = game.gameHeight;
        this.gameWidth = game.gameWidth;
        
        this.radius = 8;
        this.size = this.radius * 2;

        this.game = game;

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

        console.log(this.game.paddle.position.x);

        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        // wall on left or right
        if (this.position.x + this.radius > this.gameWidth || this.position.x < this.radius) {
            this.speed.x = -this.speed.x;
        }

        // wall on top or bottom
        if (this.position.y + this.radius > this.gameHeight || this.position.y < this.radius) {
            this.speed.y = -this.speed.y;
        }

        // check collision with paddle


    }
}