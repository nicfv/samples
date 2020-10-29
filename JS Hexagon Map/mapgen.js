'use strict';

class MapGen {
    #tiles = [];

    constructor() {
        this.#tiles = [];
        for(let x = 0; x < 9; x++) {
            for (let y = 0; y < 21; y++) {
                this.#tiles.push(new Hexagon(x*2*Math.sqrt(3)+(y%2)*Math.sqrt(3), y, Math.random(), 20));
            }
        }
    }

    get t() { return this.#tiles; }

    draw(ctx) {
        for(let i = 0; i < this.#tiles.length; i++) {
            this.#tiles[i].draw(ctx);
        }
    }
}