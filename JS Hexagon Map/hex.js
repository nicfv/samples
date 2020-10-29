'use strict';

class Hexagon {
    #points = [];
    #z = 0;

    constructor(x, y, z, r) {
        x *= r;
        y *= r;
        this.#z = z;
        for(let i = 0; i < 7; i++) {
            this.#points.push({'x':x+r*Math.cos(Math.PI*i/3), 'y':y+r*Math.sin(Math.PI*i/3)});
        }
    }

    get z() { return this.#z; }
    set z(x) { this.#z = x; }

    #getColor() {
        if(this.#z > 0.5) {
            return 'hsl('+(80+this.#z*40)+','+(100-this.#z*40)+'%,'+(60-this.#z*40)+'%)'
        } else {
            return 'hsl('+(200+this.#z*40)+','+(40+this.#z*40)+'%,'+(20+this.#z*40)+'%)'
        }
    }

    draw(ctx) {
        ctx.fillStyle = this.#getColor();
        ctx.beginPath();
        ctx.moveTo(this.#points[0].x, this.#points[0].y);
        for(let i = 1; i < this.#points.length; i++) {
            ctx.lineTo(this.#points[i].x, this.#points[i].y);
        }
        ctx.fill();
    }
}