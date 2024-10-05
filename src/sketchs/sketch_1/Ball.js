export default class Ball {
    constructor(p, x, y, diameter) {
        this.p = p;
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.speed = 2;
        this.directionX = 1;
        this.directionY = 1;
    }

    move() {
        this.x += this.speed * this.directionX;
        this.y += this.speed * this.directionY;

        // Bounce off edges
        if (this.x + this.diameter / 2 > this.p.width || this.x - this.diameter / 2 < 0) {
            this.directionX *= -1;
        }
        if (this.y + this.diameter / 2 > this.p.height || this.y - this.diameter / 2 < 0) {
            this.directionY *= -1;
        }
    }

    display() {
        this.p.fill(255, 0, 0);
        this.p.ellipse(this.x, this.y, this.diameter);
    }
}