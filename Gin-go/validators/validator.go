package validators

import (
	"gin-go/exceptions"
	"strings"

	"github.com/go-playground/validator/v10"
)

var validate = validator.New()

func ValidateStruct(s interface{}) *exceptions.AppError {
	err := validate.Struct(s)
	if err == nil {
		return nil
	}
	for _, e := range err.(validator.ValidationErrors) {
		field := strings.ToLower(e.Field())
		switch e.Tag() {
		case "required":
			return exceptions.NewBadRequestError(field + " is required")
		case "email":
			return exceptions.NewBadRequestError(field + " must be a valid email")
		case "min":
			return exceptions.NewBadRequestError(field + " must be at least " + e.Param() + " characters")
		case "max":
			return exceptions.NewBadRequestError(field + " must be at most " + e.Param() + " characters")
		case "len":
			return exceptions.NewBadRequestError(field + " must be " + e.Param() + " characters")
		case "oneof":
			return exceptions.NewBadRequestError(field + " must be one of " + e.Param())
		default:
			return exceptions.NewBadRequestError(field + " is invalid")
		}
	}
	return nil
}
