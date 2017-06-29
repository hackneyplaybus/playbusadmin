// Validates that the input string is a valid date formatted as "dd/mm/yyyy"
  function isValidDate(dateString) {
      // First check for the pattern
      if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
          return false;

      // Parse the date parts to integers
      var parts = dateString.split("/");
      var day = parseInt(parts[0], 10);
      var month = parseInt(parts[1], 10);
      var year = parseInt(parts[2], 10);

      // Check the ranges of month and year
      if(year < 1000 || year > 3000 || month == 0 || month > 12)
          return false;

      var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

      // Adjust for leap years
      if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
          monthLength[1] = 29;

      // Check the range of the day
      return day > 0 && day <= monthLength[month - 1];
  }
  
  ethnicityDropdown();
  function ethnicityDropdown() { 
    getEthnicityList().then((resp) => resp.json()).then(function(response) {
      var lists = document.getElementsByClassName('ethnicity-dropdown');
      for (var ii = 0; ii < lists.length; ++ii) {
        var list = lists[ii];
        response.forEach(function(item){
          var option = document.createElement('option');
          option.value = item;
          option.innerText = item;
          list.appendChild(option);
        });
      }
	}).catch(function(err) {
		console.log("Could not get ethnicity list", err)
	});
  }

  maxDateOfToday();
  function maxDateOfToday(){
    var dateinputs = document.getElementsByClassName('date-input');
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10){
            dd='0'+dd
        } 
        if(mm<10){
            mm='0'+mm
        } 

    today = yyyy+'-'+mm+'-'+dd;
    for (var ii = 0; ii < dateinputs.length; ++ii) {
      dateinputs[ii].setAttribute("max", today);
    }
  }

  function nameAutocomplete(elem, type){
    getAutocomplete(elem.value, type).then((resp) => resp.json()).then(function(rsp) {
      var table = document.getElementById('autocomplete-table-'+type);
      while(table.rows.length > 0) {
        table.deleteRow(0);
      }
      rsp.forEach(function(item){
        var tr = document.createElement('TR');
        tr.classList.add('w3-cell-row');
        tr.classList.add('w3-button');
        tr.addEventListener("click",function() {           
          window.location.href = '/family?familyId='+item.family_id;
        });
        var td1 = document.createElement('TD');
        var td2 = document.createElement('TD');
        td2.classList.add('w3-right-align');
        td1.appendChild(document.createTextNode(item.name));        
        td2.appendChild(document.createTextNode(item.date_of_birth));
        tr.appendChild(td1);
        tr.appendChild(td2);
        
        table.appendChild(tr);
        
      });
      
      
        
    }).catch(function(err){
      
    });        
  }

  function submitChild(evt, redirectFunc) {
    evt.preventDefault();
    var formEl = document.getElementById('child-form');
    var headers = new Headers();
    // Tell the server we want JSON back
    headers.set('Accept', 'application/json');
    
    
    
    var child = {};
    for (var i = 0; i < formEl.length; ++i) {
      switch (formEl[i].name) {
        case "child-name":
          child.name = formEl[i].value;
          break;
        case "child-dob":
          child.date_of_birth = formEl[i].value;
          break;
        case "child-ethnicity":
          child.ethnicity = formEl[i].value;
          break;
        case "child-gender":
          child.gender = formEl[i].value;
          break;
      }
    }
    
    var familyId = getParameterByName('familyId');
    if (familyId) {
        child.family_id = familyId;
    }
    
    var url = '/child/create';
    var fetchOptions = {
      method: 'POST',
      headers,
      credentials: "same-origin",
      body: JSON.stringify(child)
    };

    if (!redirectFunc) {
        redirectFunc = function(json) {
          window.location.href = "/consent?childId="+json.child_id+"&familyId="+json.family_id;
        }
    }

    fetch(url, fetchOptions).then(function(response) {
      if (response.status >= 200 && response.status <= 299) {
        response.json().then(redirectFunc);
      }
		}).catch(function(err) {
			console.log("Could not update child", err)
		});
    

    return false
  }

  function submitCarer(evt, redirectFunc) {
    evt.preventDefault();
    var formEl = document.getElementById('carer-form');
    var headers = new Headers();
    // Tell the server we want JSON back
    headers.set('Accept', 'application/json');
        
    var carer = {};
    for (var i = 0; i < formEl.length; ++i) {
      switch (formEl[i].name) {
        case "carer-name":
          carer.name = formEl[i].value;
          break;
        case "carer-dob":
          carer.date_of_birth = formEl[i].value;
          break;
        case "carer-ethnicity":
          carer.ethnicity = formEl[i].value;
          break;
        case "carer-gender":
          carer.gender = formEl[i].value;
          break;
        case "carer-address":
          carer.address = formEl[i].value;
          break;
        case "carer-postalcode":
          carer.postal_code = formEl[i].value;
          break;
        case "carer-city":
          carer.city = formEl[i].value;
          break;
        case "carer-phone":
          carer.phone = formEl[i].value;
          break;
        case "carer-email":
          carer.email = formEl[i].value;        
          break;
      }
    }
    
    var familyId = getParameterByName('familyId');
    if (familyId) {
        carer.family_id = familyId;
    }
    
    var url = '/carer/create';
    var fetchOptions = {
      method: 'POST',
      headers,
      credentials: "same-origin",
      body: JSON.stringify(carer)
    };

    if (!redirectFunc) {
        redirectFunc = function(json) {
          window.location.href = "/consent?carerId="+json.carer_id+"&familyId="+json.family_id;
        }
    }

    fetch(url, fetchOptions).then(function(response) {
      if (response.status >= 200 && response.status <= 299) {
        response.json().then(redirectFunc);
      }
		}).catch(function(err) {
			console.log("Could not update child", err)
		});
    

    return false
  }