package main

import (
	"github.com/yourusername/echogo/config"
	"github.com/yourusername/echogo/database"
	"github.com/yourusername/echogo/routes"
	"github.com/labstack/echo/v4"
)

func main() {
	cfg := config.Load()

	database.Connect(cfg)
	database.Migrate()

	e := echo.New()

	routes.Register(e, cfg)

	e.Logger.Fatal(e.Start(":" + cfg.AppPort))
}
