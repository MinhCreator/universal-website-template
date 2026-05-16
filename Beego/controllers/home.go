package controllers

type HomeController struct {
	BaseController
}

func (c *HomeController) Index() {
	c.Data["title"] = "Home"
	c.Data["description"] = "Welcome to the Beego application"
	c.TplName = "home/index.tpl"
}

func (c *HomeController) About() {
	c.Data["title"] = "About"
	c.Data["description"] = "About this application"
	c.TplName = "home/about.tpl"
}

func (c *HomeController) Contact() {
	c.Data["title"] = "Contact"
	c.Data["description"] = "Get in touch"
	c.TplName = "home/contact.tpl"
}
