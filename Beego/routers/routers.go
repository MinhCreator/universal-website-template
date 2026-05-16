package routers

import (
	"universal-website-project-template/controllers"

	"github.com/beego/beego/v2/server/web"
)

func init() {
	web.Router("/", &controllers.HomeController{}, "get:Index")
	web.Router("/about", &controllers.HomeController{}, "get:About")
	web.Router("/contact", &controllers.HomeController{}, "get:Contact")

	web.Router("/auth/login", &controllers.AuthController{}, "get:Login")
	web.Router("/auth/login", &controllers.AuthController{}, "post:DoLogin")
	web.Router("/auth/register", &controllers.AuthController{}, "get:Register")
	web.Router("/auth/register", &controllers.AuthController{}, "post:DoRegister")
	web.Router("/auth/logout", &controllers.AuthController{}, "get:Logout")

	web.Router("/user/profile", &controllers.UserController{}, "get:Profile")
	web.Router("/user/profile", &controllers.UserController{}, "put:UpdateProfile")
	web.Router("/user/settings", &controllers.UserController{}, "get:Settings")
	web.Router("/user/settings", &controllers.UserController{}, "put:UpdateSettings")

	web.Router("/api/v1/users", &controllers.UserController{}, "get:List")
	web.Router("/api/v1/users/:id", &controllers.UserController{}, "get:Get")
	web.Router("/api/v1/users", &controllers.UserController{}, "post:Create")
	web.Router("/api/v1/users/:id", &controllers.UserController{}, "put:Update")
	web.Router("/api/v1/users/:id", &controllers.UserController{}, "delete:Delete")

	web.ErrorController(&controllers.ErrorController{})
}
