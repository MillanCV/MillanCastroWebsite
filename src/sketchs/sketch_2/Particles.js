export default class Particle {
    constructor(p, x, y) {
        this.p = p;
        this.x = x;
        this.y = y;
        this.size = this.p.random(5, 20);
        this.speed = this.p.createVector(this.p.random(-1, 1), this.p.random(-1, 1));
    }

    update() {
        this.x += this.speed.x;
        this.y += this.speed.y;

        if (this.x < 0 || this.x > this.p.width) this.speed.x *= -1;
        if (this.y < 0 || this.y > this.p.height) this.speed.y *= -1;
    }

    display() {
        this.p.noStroke();
        this.p.fill(0, 150, 255, 150);
        this.p.ellipse(this.x, this.y, this.size);
    }
}