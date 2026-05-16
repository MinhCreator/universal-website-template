package models

import (
	"time"

	"github.com/beego/beego/v2/client/orm"
	_ "github.com/go-sql-driver/mysql"
)

func init() {
	orm.RegisterDriver("mysql", orm.DRMySQL)
	orm.RegisterModel(
		new(User),
	)
}

type BaseModel struct {
	ID        int       `orm:"column(id);auto;pk"`
	CreatedAt time.Time `orm:"column(created_at);auto_now_add;type(datetime)"`
	UpdatedAt time.Time `orm:"column(updated_at);auto_now;type(datetime)"`
	DeletedAt time.Time `orm:"column(deleted_at);null;type(datetime)"`
}

func GetDB() (orm.Ormer, error) {
	o := orm.NewOrm()
	return o, nil
}
