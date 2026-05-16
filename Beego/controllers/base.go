package controllers

import (
	"encoding/json"

	"github.com/beego/beego/v2/server/web"
)

type BaseController struct {
	web.Controller
}

type JSONResponse struct {
	Code    int         `json:"code"`
	Message string      `json:"message"`
	Data    interface{} `json:"data,omitempty"`
}

func (c *BaseController) JSONSuccess(data interface{}, message ...string) {
	msg := "success"
	if len(message) > 0 {
		msg = message[0]
	}
	c.Data["json"] = JSONResponse{Code: 0, Message: msg, Data: data}
	c.ServeJSON()
}

func (c *BaseController) JSONError(code int, message string) {
	c.Data["json"] = JSONResponse{Code: code, Message: message}
	c.ServeJSON()
}

func (c *BaseController) ParseJSONBody(obj interface{}) error {
	return json.Unmarshal(c.Ctx.Input.RequestBody, obj)
}

func (c *BaseController) GetCurrentUserID() int {
	if v := c.GetSession("user_id"); v != nil {
		if id, ok := v.(int); ok {
			return id
		}
	}
	return 0
}

func (c *BaseController) IsAuthenticated() bool {
	return c.GetSession("user_id") != nil
}

func (c *BaseController) RequireLogin() {
	if !c.IsAuthenticated() {
		c.Redirect("/auth/login", 302)
	}
}
