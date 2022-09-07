document.addEventListener('DOMContentLoaded', function () {
	let hand = document.getElementById('hand');

	const offset = -90;

	hand.setAttribute('transform', `translate(50 50) rotate(${offset + 30} 0 0)`);
});
