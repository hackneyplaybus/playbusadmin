package app

import (
	"fmt"

	uuid "github.com/nu7hatch/gouuid"
)

//"github.com/hackneyplaybus/playbusadmin/packages/handlers"

func init() {
	// http.HandleFunc("/child", handlers.WriteChildHandler)
	// http.HandleFunc("/backup", handlers.Backup)
	id, _ := uuid.NewV4()
	fmt.Printf("%s\n", id.String())
}
