'use strict';

/* Global namespace */
const G = {};

const canvas = document.getElementById('c'),
    sliderLand = document.getElementById('percentLand'),
    sliderSize = document.getElementById('boardSize'),
    labelLand = document.getElementById('percentLandLabel'),
    labelSize = document.getElementById('boardSizeLabel');

G.percentLand = 0.5;
G.boardSize = 3;

const updateUi = () => {
    G.percentLand = +sliderLand.value/100;
    labelLand.innerText = sliderLand.value+'% land';
    G.boardSize = +sliderSize.value;
    labelSize.innerText = 'board size '+sliderSize.value;
}

const draw = () => {
    const map = new MapGen(9, 21);
    canvas.getContext('2d').clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    map.draw(canvas.getContext('2d'));
};

draw();