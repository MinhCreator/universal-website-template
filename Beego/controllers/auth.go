package controllers

import (
	"strings"

	"universal-website-project-template/models"
)

type AuthController struct {
	BaseController
}

type LoginForm struct {
	Email    string `form:"email"`
	Password string `form:"password"`
}

type RegisterForm struct {
	Username string `form:"username"`
	Email    string `form:"email"`
	Password string `form:"password"`
}

func (c *AuthController) Login() {
	if c.IsAuthenticated() {
		c.Redirect("/user/profile", 302)
		return
	}
	c.Data["title"] = "Login"
	c.TplName = "auth/login.tpl"
}

func (c *AuthController) DoLogin() {
	form := LoginForm{}
	if err := c.ParseForm(&form); err != nil {
		c.JSONError(400, "Invalid form data")
		return
	}

	form.Email = strings.TrimSpace(form.Email)
	form.Password = strings.TrimSpace(form.Password)

	if form.Email == "" || form.Password == "" {
		c.JSONError(400, "Email and password are required")
		return
	}

	user, err := models.Authenticate(form.Email, form.Password)
	if err != nil {
		c.JSONError(401, "Invalid email or password")
		return
	}

	c.SetSession("user_id", user.ID)
	c.SetSession("username", user.Username)
	c.JSONSuccess(user)
}

func (c *AuthController) Register() {
	if c.IsAuthenticated() {
		c.Redirect("/user/profile", 302)
		return
	}
	c.Data["title"] = "Register"
	c.TplName = "auth/register.tpl"
}

func (c *AuthController) DoRegister() {
	form := RegisterForm{}
	if err := c.ParseForm(&form); err != nil {
		c.JSONError(400, "Invalid form data")
		return
	}

	form.Username = strings.TrimSpace(form.Username)
	form.Email = strings.TrimSpace(form.Email)
	form.Password = strings.TrimSpace(form.Password)

	if form.Username == "" || form.Email == "" || form.Password == "" {
		c.JSONError(400, "All fields are required")
		return
	}

	if len(form.Password) < 6 {
		c.JSONError(400, "Password must be at least 6 characters")
		return
	}

	user := &models.User{
		Username: form.Username,
		Email:    form.Email,
		Password: form.Password,
	}

	if err := models.CreateUser(user); err != nil {
		c.JSONError(409, err.Error())
		return
	}

	c.SetSession("user_id", user.ID)
	c.SetSession("username", user.Username)
	c.JSONSuccess(user)
}

func (c *AuthController) Logout() {
	c.DestroySession()
	c.Redirect("/", 302)
}
