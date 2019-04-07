const inputs = document.querySelectorAll('.controls input');
inputs.forEach(input => input.addEventListener('change',handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove',handleUpdate));

function handleUpdate(){
	const suffix = this.dataset.sizing || '';
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

	const heading = document.querySelector('h2');	// span will be styled as per the nearest parent
	heading.style.setProperty('--base','#bada55');
}