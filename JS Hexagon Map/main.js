'use strict';

const c = document.getElementById('c');

const m = new MapGen();

const draw = () => {
    m.draw(c.getContext('2d'));
};

draw();