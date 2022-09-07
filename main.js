const offset = -90;

const rotDeg = 360;

const sec = 60;

const stride = rotDeg / sec;

const rad = 50;

var hand;
var i = 0;

function turn() {
	setTimeout(function() {
		hand.setAttribute('transform', `translate(${rad} ${rad}) rotate(${offset + (i * stride)} 0 0)`);

		i++;

		turn();
	}, 1000);
}

document.addEventListener('DOMContentLoaded', function() {
	hand = document.getElementById('hand');

	turn();
});
