'use strict';

// Creates a hexagonal board with random heights for each tile
class MapGen {
    #tiles = [];

    /**
     * Generate a new map
     * @param w Width of the map in tiles
     * @param h Height of the map in tiles
     */
    constructor(w, h) {
        this.#tiles = [];
        for(let x = 0; x < w; x++) {
            for (let y = 0; y < h; y++) {
                this.#tiles.push(new Hexagon(x*2*Math.sqrt(3)+(y%2)*Math.sqrt(3), y, Math.random(), 20));
            }
        }
    }

    // Render each tile onto the HTML canvas
    draw(ctx) {
        for(let i = 0; i < this.#tiles.length; i++) {
            this.#tiles[i].draw(ctx);
        }
    }
}