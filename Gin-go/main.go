package main

import (
	"gin-go/config"
	"gin-go/database"
	"gin-go/routes"
)

func main() {
	config.LoadEnv()
	database.Connect()
	database.Migrate()

	r := routes.Setup()
	r.Run(":8080")
}
