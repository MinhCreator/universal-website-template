package routes

import (
	"gin-go/controllers"
	"gin-go/middleware"

	"github.com/gin-gonic/gin"
)

func Setup() *gin.Engine {
	r := gin.Default()

	r.Use(middleware.CORS())
	r.Use(middleware.Logger())
	r.Use(middleware.ErrorHandler())

	api := r.Group("/api")
	{
		users := api.Group("/users")
		{
			ctrl := controllers.NewUserController()
			users.POST("/", ctrl.Create)
			users.GET("/", ctrl.GetAll)
			users.GET("/:id", ctrl.GetByID)
			users.PUT("/:id", ctrl.Update)
			users.DELETE("/:id", ctrl.Delete)
		}
	}

	r.GET("/health", func(c *gin.Context) {
		c.JSON(200, gin.H{"status": "ok"})
	})

	return r
}
