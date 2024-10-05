import p5 from 'p5';
import Ball from './Ball.js';

export default class SketchClass {
    constructor(container) {
        this.sketch = new p5(this.sketchFunction, container);
    }

    sketchFunction(p) {
        let ball;

        p.setup = () => {
            p.createCanvas(400, 400);
            ball = new Ball(p, p.width / 2, p.height / 2, 50);
        };

        p.draw = () => {
            p.background(220);
            ball.move();
            ball.display();
        };
    }


}