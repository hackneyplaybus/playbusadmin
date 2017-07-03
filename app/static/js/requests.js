
function getEthnicityList() {
    return fetch('/ethnicitylist', {
			method: 'get',
			credentials: "same-origin"			
		})
}

function getFamily(familyId) {
    return fetch('/family/all?familyId='+familyId, {
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

function readLocations() {
	return fetch('/location/all', {
			method: 'get',
			credentials: "same-origin"			
		})
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
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