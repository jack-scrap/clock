const offset = -90;

const rotDeg = 360;

const min = 60;
const sec = 60;

const strideMin = rotDeg / sec;
const strideHr = rotDeg / (sec * min);

const rad = 50;

var handHr;
var handMin;
var i = 0;

function turn() {
	handHr.setAttribute('transform', `translate(${rad} ${rad}) rotate(${offset + (i * strideHr)} 0 0)`);
	handMin.setAttribute('transform', `translate(${rad} ${rad}) rotate(${offset + (i * strideMin)} 0 0)`);

	i++;

	setTimeout(function() {
		turn();
	}, 1000);
}

document.addEventListener('DOMContentLoaded', function() {
	handHr = document.getElementById('handHr');
	handMin = document.getElementById('handMin');

	turn();
});
