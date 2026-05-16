package exceptions

import "net/http"

type AppError struct {
	Code    int    `json:"code"`
	Message string `json:"message"`
}

func (e *AppError) Error() string {
	return e.Message
}

func NewNotFoundError(message string) *AppError {
	return &AppError{Code: http.StatusNotFound, Message: message}
}

func NewBadRequestError(message string) *AppError {
	return &AppError{Code: http.StatusBadRequest, Message: message}
}

func NewInternalError(message string) *AppError {
	return &AppError{Code: http.StatusInternalServerError, Message: message}
}

func NewUnauthorizedError(message string) *AppError {
	return &AppError{Code: http.StatusUnauthorized, Message: message}
}

func NewConflictError(message string) *AppError {
	return &AppError{Code: http.StatusConflict, Message: message}
}
