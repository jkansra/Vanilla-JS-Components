const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

// Fetch will return a promise -> then a json blob -> then the data
// cities array assignment(cities = data) can't be done inside as cities is a const variable here
// and without using spread it will become array of arrays
fetch(endpoint)
	.then(blob => blob.json())
	.then(data => cities.push(...data));

function findMatches(wordToMatch, cities){
	return cities.filter(place => {
		const regex = new RegExp(wordToMatch, 'gi');
		return place.city.match(regex) || place.state.match(regex);
	});
}

function numberWithCommas(num){
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches(){
	const matchArray = findMatches(this.value, cities);		//this.value is the wordToMatch
	const html = matchArray.map(place => {
		const regex = new RegExp(this.value,'gi');
		const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
		const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
		return `<li>
			<span class="name">${cityName}, ${stateName}</span>
			<span>${numberWithCommas(place.population)}</span>
		</li>`;
	}).join('');
	suggestions.innerHTML = html;
}

const suggestions = document.querySelector('.suggestions');
const searchInput = document.querySelector('.search');

searchInput.addEventListener('keyup',displayMatches);
searchInput.addEventListener('change',displayMatches);
