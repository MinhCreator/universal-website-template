package handlers

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

type HomeHandler struct{}

func NewHomeHandler() *HomeHandler {
	return &HomeHandler{}
}

func (h *HomeHandler) Index(c echo.Context) error {
	return c.JSON(http.StatusOK, map[string]string{
		"message": "Welcome to EchoGo API",
	})
}

func (h *HomeHandler) Health(c echo.Context) error {
	return c.JSON(http.StatusOK, map[string]string{
		"status": "ok",
	})
}
