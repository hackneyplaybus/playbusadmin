
function getEthnicityList() {
    return fetch('/ethnicitylist', {
			method: 'get',
			credentials: "same-origin"			
		})
}

function getChildAutocomplete(term) {
    return fetch('/autocompletechild?term='+term, {
			method: 'get',
			credentials: "same-origin"			
		})
}

