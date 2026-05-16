package services

import (
	"errors"

	"github.com/yourusername/echogo/config"
	"github.com/yourusername/echogo/dto"
	"github.com/yourusername/echogo/models"
	"github.com/yourusername/echogo/repositories"
	"github.com/yourusername/echogo/utils"
	"golang.org/x/crypto/bcrypt"
)

type UserService interface {
	Register(req *dto.RegisterRequest) (*dto.AuthResponse, error)
	Login(req *dto.LoginRequest) (*dto.AuthResponse, error)
	GetProfile(id uint) (*dto.UserResponse, error)
	UpdateProfile(id uint, req *dto.UpdateUserRequest) (*dto.UserResponse, error)
	DeleteUser(id uint) error
}

type userService struct {
	repo repositories.UserRepository
	cfg  *config.Config
}

func NewUserService(repo repositories.UserRepository, cfg *config.Config) UserService {
	return &userService{repo: repo, cfg: cfg}
}

func (s *userService) Register(req *dto.RegisterRequest) (*dto.AuthResponse, error) {
	existing, _ := s.repo.FindByEmail(req.Email)
	if existing != nil {
		return nil, errors.New("email already registered")
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(req.Password), bcrypt.DefaultCost)
	if err != nil {
		return nil, err
	}

	user := &models.User{
		Name:     req.Name,
		Email:    req.Email,
		Password: string(hashedPassword),
	}

	if err := s.repo.Create(user); err != nil {
		return nil, err
	}

	token, err := utils.GenerateToken(user.ID, s.cfg)
	if err != nil {
		return nil, err
	}

	return &dto.AuthResponse{
		Token: token,
		User:  toUserResponse(user),
	}, nil
}

func (s *userService) Login(req *dto.LoginRequest) (*dto.AuthResponse, error) {
	user, err := s.repo.FindByEmail(req.Email)
	if err != nil {
		return nil, errors.New("invalid credentials")
	}

	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(req.Password)); err != nil {
		return nil, errors.New("invalid credentials")
	}

	token, err := utils.GenerateToken(user.ID, s.cfg)
	if err != nil {
		return nil, err
	}

	return &dto.AuthResponse{
		Token: token,
		User:  toUserResponse(user),
	}, nil
}

func (s *userService) GetProfile(id uint) (*dto.UserResponse, error) {
	user, err := s.repo.FindByID(id)
	if err != nil {
		return nil, errors.New("user not found")
	}
	return toUserResponse(user), nil
}

func (s *userService) UpdateProfile(id uint, req *dto.UpdateUserRequest) (*dto.UserResponse, error) {
	user, err := s.repo.FindByID(id)
	if err != nil {
		return nil, errors.New("user not found")
	}

	if req.Name != "" {
		user.Name = req.Name
	}
	if req.Email != "" {
		user.Email = req.Email
	}

	if err := s.repo.Update(user); err != nil {
		return nil, err
	}

	return toUserResponse(user), nil
}

func (s *userService) DeleteUser(id uint) error {
	if err := s.repo.Delete(id); err != nil {
		return errors.New("user not found")
	}
	return nil
}

func toUserResponse(user *models.User) *dto.UserResponse {
	return &dto.UserResponse{
		ID:    user.ID,
		Name:  user.Name,
		Email: user.Email,
	}
}
