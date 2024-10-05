import p5 from 'p5';
import Particle from './Particles.js';

export default class SketchClass {
    constructor(container) {
        this.sketch = new p5(this.sketchFunction, container);
    }

    sketchFunction(p) {
        let particles = [];

        p.setup = () => {
            p.createCanvas(400, 400);
            for (let i = 0; i < 20; i++) {
                particles.push(new Particle(p, p.random(p.width), p.random(p.height)));
            }
        };

        p.draw = () => {
            p.background(220);
            particles.forEach(particle => {
                particle.update();
                particle.display();
            });
        };
    }
}