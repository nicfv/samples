'use strict';

/* Global namespace */
const G = {};

const canvas = document.getElementById('c'),
	slider = document.getElementById('percentLand'),
	label = document.getElementById('percentLandLabel');

G.percentLand = 0.5;

const updateUi = () => {
	G.percentLand = slider.value/100;
	label.innerText = slider.value+'% land';
}

const draw = () => {
    const map = new MapGen(9, 21);
    canvas.getContext('2d').clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    map.draw(canvas.getContext('2d'));
};

draw();