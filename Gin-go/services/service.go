package services

import (
	"gin-go/dto"
	"gin-go/exceptions"
	"gin-go/models"
	"gin-go/repositories"
	"gin-go/validators"

	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

type UserService struct {
	repo *repositories.UserRepository
}

func NewUserService() *UserService {
	return &UserService{repo: repositories.NewUserRepository()}
}

func (s *UserService) Create(req *dto.CreateUserRequest) (*dto.UserResponse, *exceptions.AppError) {
	if err := validators.ValidateStruct(req); err != nil {
		return nil, err
	}

	existing, _ := s.repo.FindByEmail(req.Email)
	if existing != nil {
		return nil, exceptions.NewConflictError("email already exists")
	}

	hashed, _ := bcrypt.GenerateFromPassword([]byte(req.Password), bcrypt.DefaultCost)
	user := &models.User{
		Name:     req.Name,
		Email:    req.Email,
		Password: string(hashed),
		Phone:    req.Phone,
	}

	if err := s.repo.Create(user); err != nil {
		return nil, exceptions.NewInternalError("failed to create user")
	}

	return &dto.UserResponse{ID: user.ID, Name: user.Name, Email: user.Email, Phone: user.Phone}, nil
}

func (s *UserService) GetByID(id uint) (*dto.UserResponse, *exceptions.AppError) {
	user, err := s.repo.FindByID(id)
	if err != nil {
		if err == gorm.ErrRecordNotFound {
			return nil, exceptions.NewNotFoundError("user not found")
		}
		return nil, exceptions.NewInternalError("failed to fetch user")
	}

	return &dto.UserResponse{ID: user.ID, Name: user.Name, Email: user.Email, Phone: user.Phone}, nil
}

func (s *UserService) GetAll(params *dto.PaginationParams) (*dto.PaginatedResponse, *exceptions.AppError) {
	if params.Page < 1 {
		params.Page = 1
	}
	if params.PageSize < 1 || params.PageSize > 100 {
		params.PageSize = 10
	}

	users, total, err := s.repo.FindAll(params.Page, params.PageSize)
	if err != nil {
		return nil, exceptions.NewInternalError("failed to fetch users")
	}

	var userResponses []dto.UserResponse
	for _, u := range users {
		userResponses = append(userResponses, dto.UserResponse{
			ID: u.ID, Name: u.Name, Email: u.Email, Phone: u.Phone,
		})
	}

	totalPages := int(total) / params.PageSize
	if int(total)%params.PageSize != 0 {
		totalPages++
	}

	return &dto.PaginatedResponse{
		Data:       userResponses,
		Total:      total,
		Page:       params.Page,
		PageSize:   params.PageSize,
		TotalPages: totalPages,
	}, nil
}

func (s *UserService) Update(id uint, req *dto.UpdateUserRequest) (*dto.UserResponse, *exceptions.AppError) {
	if err := validators.ValidateStruct(req); err != nil {
		return nil, err
	}

	user, err := s.repo.FindByID(id)
	if err != nil {
		return nil, exceptions.NewNotFoundError("user not found")
	}

	if req.Name != "" {
		user.Name = req.Name
	}
	if req.Phone != "" {
		user.Phone = req.Phone
	}
	if req.Status != nil {
		user.Status = *req.Status
	}

	if err := s.repo.Update(user); err != nil {
		return nil, exceptions.NewInternalError("failed to update user")
	}

	return &dto.UserResponse{ID: user.ID, Name: user.Name, Email: user.Email, Phone: user.Phone}, nil
}

func (s *UserService) Delete(id uint) *exceptions.AppError {
	if _, err := s.repo.FindByID(id); err != nil {
		return exceptions.NewNotFoundError("user not found")
	}

	if err := s.repo.Delete(id); err != nil {
		return exceptions.NewInternalError("failed to delete user")
	}

	return nil
}
