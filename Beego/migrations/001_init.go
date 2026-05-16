package migrations

import (
	"github.com/beego/beego/v2/client/orm"
	"github.com/beego/beego/v2/server/web"
)

type Migration_001 struct{}

func init() {
	orm.RegisterModelWithPrefix(web.AppConfig.DefaultString("db_prefix", "tb_"),
		new(User),
	)
}

type User struct {
	ID        int    `orm:"column(id);auto;pk"`
	Username  string `orm:"column(username);size(50);unique;index"`
	Email     string `orm:"column(email);size(100);unique;index"`
	Password  string `orm:"column(password);size(255)"`
	Avatar    string `orm:"column(avatar);size(255);null"`
	Bio       string `orm:"column(bio);size(500);null"`
	Role      string `orm:"column(role);size(20);default(user)"`
	Status    int    `orm:"column(status);default(1)"`
	CreatedAt string `orm:"column(created_at);type(datetime);auto_now_add"`
	UpdatedAt string `orm:"column(updated_at);type(datetime);auto_now"`
}

func (m *Migration_001) Up() {
	orm.RunSyncdb("default", false, true)
}

func (m *Migration_001) Down() {
	o := orm.NewOrm()
	o.Raw("DROP TABLE IF EXISTS users").Exec()
}
