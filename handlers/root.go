package handlers

import (
	"fmt"
	"net/http"

	"google.golang.org/appengine"
	"google.golang.org/appengine/user"
)

func RootHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-type", "text/html; charset=utf-8")
	authedUser, err := auth(w, r)
	if err != nil {
		if err == NotLoggedIn {
			// auth function will serve the login page
			return
		}
		writeErrorPage(w, err)
		return
	}

	// TODO: homepage template
	fmt.Fprintf(w, `<html>
<header><title>Hello World</title></header>
<body>
hello `+
		authedUser.String()+
		`</body>
	<script>
		fetch('/child', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: "same-origin",
			body: '{"Name":"OtherName"}'
		}).then(function(response) {
			
		}).catch(function(err) {
			// Error :(
		});

		fetch('/child?name=OtherName', {
			method: 'get',			
			credentials: "same-origin",			
		}).then(function(response) {
			
		}).catch(function(err) {
			// Error :(
		});
	</script>
</html>
		
	`)
	return
}

var NotLoggedIn = fmt.Errorf("Not Logged In")

func auth(w http.ResponseWriter, r *http.Request) (*user.User, error) {
	ctx := appengine.NewContext(r)
	u := user.Current(ctx)
	if u == nil {
		// TODO: Write login page response
		return nil, NotLoggedIn
	}
	return u, nil
}
