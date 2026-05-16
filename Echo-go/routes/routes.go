package routes

import (
	"github.com/yourusername/echogo/config"
	"github.com/yourusername/echogo/handlers"
	"github.com/yourusername/echogo/middleware"
	"github.com/yourusername/echogo/repositories"
	"github.com/yourusername/echogo/services"
	"github.com/yourusername/echogo/validators"
	"github.com/labstack/echo/v4"
)

func Register(e *echo.Echo, cfg *config.Config) {
	e.Validator = validators.New()

	e.Use(middleware.Logger())
	e.Use(middleware.CORS())

	homeHandler := handlers.NewHomeHandler()

	e.GET("/", homeHandler.Index)
	e.GET("/health", homeHandler.Health)

	userRepo := repositories.NewUserRepository()
	userService := services.NewUserService(userRepo, cfg)
	userHandler := handlers.NewUserHandler(userService)

	auth := e.Group("/auth")
	auth.POST("/register", userHandler.Register)
	auth.POST("/login", userHandler.Login)

	api := e.Group("/api", middleware.Auth(cfg))
	api.GET("/profile", userHandler.GetProfile)
	api.PUT("/profile", userHandler.UpdateProfile)
	api.DELETE("/users/:id", userHandler.DeleteUser)
}
