setInterval(setClock, 1000);

function setClock(){
	const secondHand = document.querySelector('.second-hand');
	const minuteHand = document.querySelector('.min-hand');
	const hourHand = document.querySelector('.hour-hand');
	const date = new Date();
	
	const seconds = date.getSeconds();
	const secondDegrees = ((seconds / 60) * 360) + 90;

	const minutes = date.getMinutes();
	minutesDegrees = ((minutes / 60) * 360) + 90;

	const hours = date.getHours();
	hoursDegrees = ((hours / 12) * 360) + 90;

	secondHand.style.transform = "rotate("+secondDegrees+"deg)";
	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}