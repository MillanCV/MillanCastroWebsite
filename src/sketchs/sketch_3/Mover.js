import p5 from 'p5';

export default class Mover {
    constructor(p) {
        console.log(p)
        this.p = p;
        this.mass = 1;
        this.position = this.p.createVector(this.p.width / 2, 30);
        this.velocity = this.p.createVector(0, 0);
        this.acceleration = this.p.createVector(0, 0);
    }

    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }


    display() {
        this.p.stroke(0);
        this.p.strokeWeight(2);
        this.p.fill(127, 127);
        this.p.ellipse(this.position.x, this.position.y, 48, 48);
    }


    checkEdges() {
        if (this.position.x > this.p.width) {
            this.position.x = this.p.width;
            this.velocity.x *= -1;
        } else if (this.position.x < 0) {
            this.velocity.x *= -1;
            this.position.x = 0;
        }
        if (this.position.y > this.p.height) {
            this.velocity.y *= -1;
            this.position.y = this.p.height;
        }
    }
}