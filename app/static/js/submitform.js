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
      while(table.rows.length > 1) {
        table.deleteRow(1);
      }
      rsp.forEach(function(item){
        var tr = document.createElement('TR');
        tr.classList.add('w3-cell-row');
        tr.classList.add('jono-button');
        tr.addEventListener("click",function() {           
          window.location.href = '/family?familyId='+item.family_id;
        });
        var td1 = document.createElement('TD');
        var td2 = document.createElement('TD');
        td2.classList.add('w3-right-align');
        td1.appendChild(document.createTextNode(item.name));     
        var dob = Date.parseExact(item.date_of_birth, 'yyyy-MM-dd');   
        td2.appendChild(document.createTextNode(dob.toString('dd/MM')));
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

    child.child_id = formEl.getAttribute('child_id');
    
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
        case "carer-lonecarer":
          carer.lone_carer = formEl[i].checked;        
          break;
        case 'carer-benefit':
          carer.benefits = formEl[i].value;
          break;
      }
    }
    
    var familyId = getParameterByName('familyId');
    if (familyId) {
        carer.family_id = familyId;
    }

    carer.carer_id = formEl.getAttribute('carer_id');
    
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


  function submitNote(evt, redirectFunc) {
    evt.preventDefault();
    var formEl = document.getElementById('note-form');
    var headers = new Headers();
    // Tell the server we want JSON back
    headers.set('Accept', 'application/json');
    var note = {};
    for (var i = 0; i < formEl.length; ++i) {
      switch (formEl[i].name) {
        case "note-text":
          note.note = formEl[i].value;
          break;        
      }
    }
    
    var familyId = getParameterByName('familyId');
    if (familyId) {
        note.family_id = familyId;
    }
    
    var url = '/note/create';
    var fetchOptions = {
      method: 'POST',
      headers,
      credentials: "same-origin",
      body: JSON.stringify(note)
    };

    if (!redirectFunc) {
        redirectFunc = function(json) {
          location.reload();
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

  function submitLocation(evt, redirectFunc) {
    evt.preventDefault();
    var formEl = document.getElementById('location-form');
    var headers = new Headers();
    // Tell the server we want JSON back
    headers.set('Accept', 'application/json');
    var loc = {};
    for (var i = 0; i < formEl.length; ++i) {
      switch (formEl[i].name) {
        case "location-name":
          loc.name = formEl[i].value;
          var id = formEl[i].getAttribute('data-id');
          if (id) {
            loc.location_id = id;
          }
          break;
        case "location-description":
          loc.description = formEl[i].value;
          break;
        case "location-address":
          loc.address = formEl[i].value;
          break;
        case "location-postalcode":
          loc.postal_code = formEl[i].value;
          break;
        case "location-city":
          loc.city = formEl[i].value;
          break;
        case "location-latitude":
          loc.latitude = parseFloat(formEl[i].value);
          break;   
        case "location-longitude":
          loc.longitude = parseFloat(formEl[i].value);
          break;   
      }
    }
            
    var url = '/location/create';
    var fetchOptions = {
      method: 'POST',
      headers,
      credentials: "same-origin",
      body: JSON.stringify(loc)
    };

    if (!redirectFunc) {
        redirectFunc = function(json) {
          location.reload();
        }
    }

    fetch(url, fetchOptions).then(function(response) {
      if (response.status >= 200 && response.status <= 299) {
        response.json().then(redirectFunc);
      }
		}).catch(function(err) {
			console.log("Could not update location", err)
		});
    

    return false
  }

  function submitProject(evt, redirectFunc) {
    evt.preventDefault();
    var formEl = document.getElementById('project-form');
    var headers = new Headers();
    // Tell the server we want JSON back
    headers.set('Accept', 'application/json');
    var loc = {};
    for (var i = 0; i < formEl.length; ++i) {
      switch (formEl[i].name) {
        case "project-name":
          loc.name = formEl[i].value;
          var id = formEl[i].getAttribute('data-id');
          if (id) {
            loc.project_id = id;
          }
          break;
      }
    }
            
    var url = '/project/create';
    var fetchOptions = {
      method: 'POST',
      headers,
      credentials: "same-origin",
      body: JSON.stringify(loc)
    };

    if (!redirectFunc) {
        redirectFunc = function(json) {
          location.reload();
        }
    }

    fetch(url, fetchOptions).then(function(response) {
      if (response.status >= 200 && response.status <= 299) {
        response.json().then(redirectFunc);
      }
		}).catch(function(err) {
			console.log("Could not update project", err)
		});
    

    return false
  }

  function submitService(evt, redirectFunc) {
    evt.preventDefault();
    var formEl = document.getElementById('service-form');
    var headers = new Headers();
    // Tell the server we want JSON back
    headers.set('Accept', 'application/json');
    var loc = {};
    for (var i = 0; i < formEl.length; ++i) {
      switch (formEl[i].name) {
        case "service-name":
          loc.name = formEl[i].value;
          var id = formEl[i].getAttribute('data-id');
          if (id) {
            loc.service_id = id;
          }
          break;
      }
    }
            
    var url = '/service/create';
    var fetchOptions = {
      method: 'POST',
      headers,
      credentials: "same-origin",
      body: JSON.stringify(loc)
    };

    if (!redirectFunc) {
        redirectFunc = function(json) {
          location.reload();
        }
    }

    fetch(url, fetchOptions).then(function(response) {
      if (response.status >= 200 && response.status <= 299) {
        response.json().then(redirectFunc);
      }
		}).catch(function(err) {
			console.log("Could not update service", err)
		});
    

    return false
  }

  function submitVisit(visit, redirectFunc) {
    var headers = new Headers();
    // Tell the server we want JSON back
    headers.set('Accept', 'application/json');
    var url = '/visit/create';
    var fetchOptions = {
      method: 'POST',
      headers,
      credentials: "same-origin",
      body: JSON.stringify(visit)
    };

    if (!redirectFunc) {
        redirectFunc = function(json) {
          location.reload();
        }
    }

    fetch(url, fetchOptions).then(function(response) {
      if (response.status >= 200 && response.status <= 299) {
        response.json().then(redirectFunc);
      } else {
        console.log("Could not update visit", response);
      }
		}).catch(function(err) {
			console.log("Could not update visit", err);
		});
  }

  function submitReferral(referral, redirectFunc) {
    var headers = new Headers();
    // Tell the server we want JSON back
    headers.set('Accept', 'application/json');
    var url = '/referral/create';
    var fetchOptions = {
      method: 'POST',
      headers,
      credentials: "same-origin",
      body: JSON.stringify(referral)
    };

    if (!redirectFunc) {
        redirectFunc = function(json) {
          location.reload();
        }
    }

    fetch(url, fetchOptions).then(function(response) {
      if (response.status >= 200 && response.status <= 299) {
        response.json().then(redirectFunc);
      } else {
        console.log("Could not update referral", response);
      }
		}).catch(function(err) {
			console.log("Could not update referral", err);
		});
  }

  function deleteEntity(entity, entityId, redirectFunc) {
    var headers = new Headers();
    // Tell the server we want JSON back
    headers.set('Accept', 'application/json');
    var url = '/'+entity+'?id='+entityId;
    var fetchOptions = {
      method: 'DELETE',
      headers,
      credentials: "same-origin"
    };

    if (!redirectFunc) {
        redirectFunc = function(json) {
          location.reload();
        }
    }

    fetch(url, fetchOptions).then(function(response) {
      if (response.status >= 200 && response.status <= 299) {
        redirectFunc();
      } else {
        console.log("Could not delete", response);
      }
		}).catch(function(err) {
			console.log("Could not delete", err);
		});
  }