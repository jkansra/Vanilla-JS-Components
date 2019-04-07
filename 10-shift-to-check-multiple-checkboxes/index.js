const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

function handleCheck(e) {
	let inBetween = false;
	if (e.shiftKey && this.checked) {
		checkboxes.forEach(checkbox => {
			if (checkbox === this || checkbox === lastChecked) {
				inBetween = !inBetween;
			}
			if (inBetween) {
				checkbox.checked = true;
			}
		})
	}
	lastChecked = this;
}

//Click event instead of change event as it will work even with the keyboard
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
// document.addEventListener('keydown',shiftPressed);