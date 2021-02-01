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
        let x_tile;
        for(let x = -G.boardSize; x <= G.boardSize; x++) {
            for (let y = -2*G.boardSize+2; y < 2*G.boardSize-1; y++) {
                x_tile = x*2+(Math.abs(y)%2);
                if(Math.abs(x_tile) >= G.boardSize ||
                    (Math.abs(x_tile) + Math.abs(y) >= 2*G.boardSize)) {
                    continue;
                }
                this.#tiles.push(new Hexagon(x_tile, y, Math.random()));
            }
        }
    }

    // Render each tile onto the HTML canvas
    draw(ctx) {
        ctx.save();
        ctx.translate(canvas.clientWidth/2, canvas.clientHeight/2);
        for(let i = 0; i < this.#tiles.length; i++) {
            this.#tiles[i].draw(ctx);
        }
        ctx.restore();
    }
}