package controllers

type ErrorController struct {
	BaseController
}

func (c *ErrorController) Error404() {
	c.Data["title"] = "404 Not Found"
	c.Data["content"] = "Page not found"
	if c.IsAjax() {
		c.JSONError(404, "Page not found")
	} else {
		c.TplName = "error/404.tpl"
	}
}

func (c *ErrorController) Error500() {
	c.Data["title"] = "500 Internal Server Error"
	c.Data["content"] = "Internal server error"
	if c.IsAjax() {
		c.JSONError(500, "Internal server error")
	} else {
		c.TplName = "error/500.tpl"
	}
}

func (c *ErrorController) Error403() {
	c.Data["title"] = "403 Forbidden"
	c.Data["content"] = "Forbidden"
	if c.IsAjax() {
		c.JSONError(403, "Forbidden")
	} else {
		c.TplName = "error/403.tpl"
	}
}
