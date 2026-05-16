package controllers

import (
	"strconv"

	"universal-website-project-template/models"
)

type UserController struct {
	BaseController
}

type UserProfileForm struct {
	Username string `form:"username"`
	Email    string `form:"email"`
	Bio      string `form:"bio"`
}

func (c *UserController) Profile() {
	c.RequireLogin()
	userID := c.GetCurrentUserID()
	user, err := models.GetUserByID(userID)
	if err != nil {
		c.JSONError(404, "User not found")
		return
	}
	c.Data["title"] = "Profile"
	c.Data["user"] = user
	c.TplName = "user/profile.tpl"
}

func (c *UserController) UpdateProfile() {
	c.RequireLogin()
	form := UserProfileForm{}
	if err := c.ParseForm(&form); err != nil {
		c.JSONError(400, "Invalid form data")
		return
	}
	userID := c.GetCurrentUserID()
	user := &models.User{
		ID:       userID,
		Username: form.Username,
		Email:    form.Email,
	}
	if err := models.UpdateUser(user); err != nil {
		c.JSONError(500, err.Error())
		return
	}
	c.SetSession("username", user.Username)
	c.JSONSuccess(user)
}

func (c *UserController) Settings() {
	c.RequireLogin()
	c.Data["title"] = "Settings"
	c.TplName = "user/settings.tpl"
}

func (c *UserController) UpdateSettings() {
	c.RequireLogin()
	userID := c.GetCurrentUserID()
	user, err := models.GetUserByID(userID)
	if err != nil {
		c.JSONError(404, "User not found")
		return
	}
	c.JSONSuccess(user)
}

func (c *UserController) List() {
	page, _ := c.GetInt("page", 1)
	limit, _ := c.GetInt("limit", 10)
	offset := (page - 1) * limit

	users, total, err := models.ListUsers(limit, offset)
	if err != nil {
		c.JSONError(500, err.Error())
		return
	}
	c.JSONSuccess(map[string]interface{}{
		"users": users,
		"total": total,
		"page":  page,
		"limit": limit,
	})
}

func (c *UserController) Get() {
	idStr := c.Ctx.Input.Param(":id")
	id, err := strconv.Atoi(idStr)
	if err != nil {
		c.JSONError(400, "Invalid user ID")
		return
	}
	user, err := models.GetUserByID(id)
	if err != nil {
		c.JSONError(404, "User not found")
		return
	}
	c.JSONSuccess(user)
}

func (c *UserController) Create() {
	form := UserProfileForm{}
	if err := c.ParseJSONBody(&form); err != nil {
		c.JSONError(400, "Invalid JSON body")
		return
	}
	user := &models.User{
		Username: form.Username,
		Email:    form.Email,
	}
	if err := models.CreateUser(user); err != nil {
		c.JSONError(409, err.Error())
		return
	}
	c.Ctx.Output.SetStatus(201)
	c.JSONSuccess(user)
}

func (c *UserController) Update() {
	idStr := c.Ctx.Input.Param(":id")
	id, err := strconv.Atoi(idStr)
	if err != nil {
		c.JSONError(400, "Invalid user ID")
		return
	}
	form := UserProfileForm{}
	if err := c.ParseJSONBody(&form); err != nil {
		c.JSONError(400, "Invalid JSON body")
		return
	}
	user := &models.User{
		ID:       id,
		Username: form.Username,
		Email:    form.Email,
	}
	if err := models.UpdateUser(user); err != nil {
		c.JSONError(500, err.Error())
		return
	}
	c.JSONSuccess(user)
}

func (c *UserController) Delete() {
	idStr := c.Ctx.Input.Param(":id")
	id, err := strconv.Atoi(idStr)
	if err != nil {
		c.JSONError(400, "Invalid user ID")
		return
	}
	if err := models.DeleteUser(id); err != nil {
		c.JSONError(500, err.Error())
		return
	}
	c.JSONSuccess(nil, "User deleted")
}
