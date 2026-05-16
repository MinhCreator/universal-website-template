package utils

import (
	"net/http"

	"github.com/beego/beego/v2/server/web"
)

type Pagination struct {
	Page       int         `json:"page"`
	Limit      int         `json:"limit"`
	Total      int64       `json:"total"`
	TotalPages int         `json:"total_pages"`
	Data       interface{} `json:"data"`
}

type APIError struct {
	Code    int    `json:"code"`
	Message string `json:"message"`
	Detail  string `json:"detail,omitempty"`
}

func WritePagination(c web.Controller, page, limit int, total int64, data interface{}) {
	totalPages := int(total) / limit
	if int(total)%limit > 0 {
		totalPages++
	}
	c.Data["json"] = Pagination{
		Page:       page,
		Limit:      limit,
		Total:      total,
		TotalPages: totalPages,
		Data:       data,
	}
	c.ServeJSON()
}

func WriteError(c web.Controller, status int, message string, detail ...string) {
	err := APIError{Code: status, Message: message}
	if len(detail) > 0 {
		err.Detail = detail[0]
	}
	c.Ctx.Output.SetStatus(status)
	c.Data["json"] = err
	c.ServeJSON()
}

func WriteCreated(c web.Controller, data interface{}) {
	c.Ctx.Output.SetStatus(http.StatusCreated)
	c.Data["json"] = data
	c.ServeJSON()
}

func WriteNoContent(c web.Controller) {
	c.Ctx.Output.SetStatus(http.StatusNoContent)
}
