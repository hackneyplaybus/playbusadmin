
function getEthnicityList() {
    return fetch('/ethnicitylist', {
			method: 'get',
			credentials: "same-origin"			
		})
}

function getAutocomplete(term, type) {
    return fetch('/'+type+'/autocomplete?term='+term, {
			method: 'get',
			credentials: "same-origin"			
		})
}

function updatePhotoConsent(childId, carerId, val) {
	var consent = {'photo_consent': val};
	var url = '';
	if (childId) {
		consent.child_id = childId
		url = '/child/photoconsent';
	}
	if (carerId) {
		consent.carer_id = carerId
		url = '/carer/photoconsent';
	}

	return fetch(url, {
			method: 'post',
			credentials: "same-origin",
			body: JSON.stringify(consent)
		})
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }