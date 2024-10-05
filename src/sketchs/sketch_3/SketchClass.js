import p5 from 'p5';
import Mover from './Mover.js';

export default class SketchClass {
    constructor(container) {
        this.sketch = new p5(this.sketchFunction, container);
    }

    sketchFunction(p) {
        let mover;

        p.setup = () => {
            p.createCanvas(800, 400);
            mover = new Mover(p)
            p.createP("Click mouse to apply wind force.");
        };

        p.draw = () => {
            p.background(220);
            let gravity = p.createVector(0, 0.1);
            mover.applyForce(gravity);

            if (p.mouseIsPressed) {
                let wind = p.createVector(0.1, 0);
                mover.applyForce(wind);
            }

            mover.update();
            mover.display();
            mover.checkEdges();
        };
    }
}