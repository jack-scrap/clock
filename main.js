const offset = -90;

var hand;
var i = 0;

function turn() {
	setTimeout(function() {
		hand.setAttribute('transform', `translate(50 50) rotate(${offset + i} 0 0)`);

		i++;

		turn();
	}, 1000);
}

document.addEventListener('DOMContentLoaded', function() {
	hand = document.getElementById('hand');

	turn();
});
