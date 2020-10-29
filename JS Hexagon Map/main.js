'use strict';

const canvas = document.getElementById('c');

const draw = () => {
    const map = new MapGen(9, 21);
    canvas.getContext('2d').clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    map.draw(canvas.getContext('2d'));
};

draw();