package middleware

import (
	"github.com/beego/beego/v2/server/web"
	"github.com/beego/beego/v2/server/web/context"
)

var PublicRoutes = map[string]bool{
	"/auth/login":    true,
	"/auth/register": true,
}

func AuthMiddleware() web.FilterFunc {
	return func(ctx *context.Context) {
		if PublicRoutes[ctx.Request.URL.Path] {
			return
		}

		if ctx.Input.Session("user_id") == nil {
			if ctx.Request.Header.Get("X-Requested-With") == "XMLHttpRequest" ||
				ctx.Request.Header.Get("Content-Type") == "application/json" {
				ctx.Output.JSON(map[string]interface{}{
					"code":    401,
					"message": "Unauthorized",
				}, true, false)
				return
			}
			ctx.Redirect(302, "/auth/login")
		}
	}
}

func AdminOnly() web.FilterFunc {
	return func(ctx *context.Context) {
		role, ok := ctx.Input.Session("role").(string)
		if !ok || role != "admin" {
			ctx.Output.JSON(map[string]interface{}{
				"code":    403,
				"message": "Forbidden",
			}, true, false)
		}
	}
}

func CORSMiddleware() web.FilterFunc {
	return func(ctx *context.Context) {
		ctx.Output.Header("Access-Control-Allow-Origin", "*")
		ctx.Output.Header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		ctx.Output.Header("Access-Control-Allow-Headers", "Origin, Authorization, Content-Type")
		ctx.Output.Header("Access-Control-Expose-Headers", "Content-Length")

		if ctx.Request.Method == "OPTIONS" {
			ctx.Output.SetStatus(204)
			return
		}
	}
}
