'use strict';

class Hexagon {
    static #isSetUp = false;
    static #id_counter = 0;
    static #points = [];
    static #r = 0;

    #id = 0;
    #x = 0;
    #y = 0;
    #z = 0;

    /**
     * @param x X-coordinate (in tiles)
     * @param y Y-coordinate (in tiles)
     * @param z Height (normalized; 0-1)
     */
    constructor(x, y, z) {
        this.#id = Hexagon.#id_counter++;
        this.#x = x;
        this.#y = y;
        this.#z = z;
        // First-time setup
        if(!Hexagon.#isSetUp) {
            Hexagon.#setup(20);
        }
    }

    #getColor() {
        if(this.#z < G.percentLand) {
            // Land
            return 'hsl('+(80+this.#z*40)+','+(100-this.#z*40)+'%,'+(40-this.#z*20)+'%)'
        } else {
            // Water
            return 'hsl('+(200+this.#z*40)+','+(40+this.#z*40)+'%,'+(20+this.#z*40)+'%)'
        }
    }

    /**
     * @param ctx Canvas context
     */
    draw(ctx) {
        ctx.save();
        ctx.translate(this.#x*Hexagon.#r*Math.sqrt(3), this.#y*Hexagon.#r);
        ctx.fillStyle = this.#getColor();
        ctx.beginPath();
        ctx.moveTo(Hexagon.#points[0].x, Hexagon.#points[0].y);
        for(let i = 1; i < Hexagon.#points.length; i++) {
            ctx.lineTo(Hexagon.#points[i].x, Hexagon.#points[i].y);
        }
        ctx.fill();
        ctx.restore();
    }

    /**
     * @param r Hexagon radius, in pixels
     */
    static #setup(r) {
        Hexagon.#isSetUp = true;
        Hexagon.#r = r;
        let theta = 0;
        for(let i = 0; i <= 6; i++) {
            theta = Math.PI*i/3;
            Hexagon.#points.push({'x':r*Math.cos(theta), 'y':r*Math.sin(theta)});
        }
    }
}