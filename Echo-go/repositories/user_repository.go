package repositories

import (
	"github.com/yourusername/echogo/database"
	"github.com/yourusername/echogo/models"
)

type UserRepository interface {
	Create(user *models.User) error
	FindByID(id uint) (*models.User, error)
	FindByEmail(email string) (*models.User, error)
	Update(user *models.User) error
	Delete(id uint) error
	FindAll() ([]models.User, error)
}

type userRepository struct{}

func NewUserRepository() UserRepository {
	return &userRepository{}
}

func (r *userRepository) Create(user *models.User) error {
	return database.GetDB().Create(user).Error
}

func (r *userRepository) FindByID(id uint) (*models.User, error) {
	var user models.User
	err := database.GetDB().First(&user, id).Error
	return &user, err
}

func (r *userRepository) FindByEmail(email string) (*models.User, error) {
	var user models.User
	err := database.GetDB().Where("email = ?", email).First(&user).Error
	return &user, err
}

func (r *userRepository) Update(user *models.User) error {
	return database.GetDB().Save(user).Error
}

func (r *userRepository) Delete(id uint) error {
	return database.GetDB().Delete(&models.User{}, id).Error
}

func (r *userRepository) FindAll() ([]models.User, error) {
	var users []models.User
	err := database.GetDB().Find(&users).Error
	return users, err
}
