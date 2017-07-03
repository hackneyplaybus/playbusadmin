function doSearch(term) {
    return fetch('/search/all?term='+term, {
			method: 'get',
			credentials: "same-origin"		
	})
}

function onSearch(e, val) {

    if (!e) { var e = window.event; }
    e.preventDefault(); 
    if (e.keyCode == 13) { window.location.href = "/search?term="+val.value; }
    
}