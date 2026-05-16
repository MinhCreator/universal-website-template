package models

import (
	"errors"
	"strings"

	"github.com/beego/beego/v2/client/orm"
	"golang.org/x/crypto/bcrypt"
)

type User struct {
	BaseModel
	Username string `orm:"column(username);size(50);unique;index"`
	Email    string `orm:"column(email);size(100);unique;index"`
	Password string `orm:"column(password);size(255)"`
	Avatar   string `orm:"column(avatar);size(255);null"`
	Bio      string `orm:"column(bio);size(500);null"`
	Role     string `orm:"column(role);size(20);default(user)"`
	Status   int    `orm:"column(status);default(1)"`
}

func (u *User) TableName() string {
	return "users"
}

func (u *User) TableUnique() [][]string {
	return [][]string{
		{"Username"},
		{"Email"},
	}
}

func CreateUser(user *User) error {
	o := orm.NewOrm()

	existing := User{}
	if o.QueryTable(new(User)).Filter("email", user.Email).One(&existing); existing.ID > 0 {
		return errors.New("email already exists")
	}
	if o.QueryTable(new(User)).Filter("username", user.Username).One(&existing); existing.ID > 0 {
		return errors.New("username already exists")
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
	if err != nil {
		return err
	}
	user.Password = string(hashedPassword)

	if user.Role == "" {
		user.Role = "user"
	}
	if user.Status == 0 {
		user.Status = 1
	}

	_, err = o.Insert(user)
	return err
}

func GetUserByID(id int) (*User, error) {
	o := orm.NewOrm()
	user := User{ID: id}
	err := o.Read(&user)
	if err != nil {
		return nil, errors.New("user not found")
	}
	user.Password = ""
	return &user, nil
}

func GetUserByEmail(email string) (*User, error) {
	o := orm.NewOrm()
	user := User{}
	err := o.QueryTable(new(User)).Filter("email", email).One(&user)
	if err != nil {
		return nil, errors.New("user not found")
	}
	return &user, nil
}

func UpdateUser(user *User) error {
	o := orm.NewOrm()
	user.Password = ""
	_, err := o.Update(user, "username", "email", "avatar", "bio")
	return err
}

func DeleteUser(id int) error {
	o := orm.NewOrm()
	user := User{ID: id}
	_, err := o.Delete(&user)
	return err
}

func ListUsers(limit, offset int) ([]User, int64, error) {
	o := orm.NewOrm()
	var users []User
	qs := o.QueryTable(new(User))
	total, err := qs.Count()
	if err != nil {
		return nil, 0, err
	}
	_, err = qs.Limit(limit, offset).All(&users)
	if err != nil {
		return nil, 0, err
	}
	for i := range users {
		users[i].Password = ""
	}
	return users, total, nil
}

func Authenticate(email, password string) (*User, error) {
	email = strings.ToLower(strings.TrimSpace(email))
	user, err := GetUserByEmail(email)
	if err != nil {
		return nil, errors.New("invalid email or password")
	}
	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(password)); err != nil {
		return nil, errors.New("invalid email or password")
	}
	user.Password = ""
	return user, nil
}
