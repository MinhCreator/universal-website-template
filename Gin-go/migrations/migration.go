package migrations

import (
	"gin-go/database"
	"gin-go/models"
	"log"
)

func AutoMigrate() {
	err := database.GetDB().AutoMigrate(
		&models.User{},
	)
	if err != nil {
		log.Fatal("Failed to run migrations:", err)
	}
	log.Println("Database migrated successfully")
}
