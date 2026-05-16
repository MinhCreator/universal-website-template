package config

import (
	"os"

	"github.com/joho/godotenv"
)

func LoadEnv() {
	godotenv.Load()
}

func GetEnv(key, fallback string) string {
	if v := os.Getenv(key); v != "" {
		return v
	}
	return fallback
}

func GetDBDSN() string {
	return "host=" + GetEnv("DB_HOST", "localhost") +
		" user=" + GetEnv("DB_USER", "postgres") +
		" password=" + GetEnv("DB_PASSWORD", "postgres") +
		" dbname=" + GetEnv("DB_NAME", "gin_go") +
		" port=" + GetEnv("DB_PORT", "5432") +
		" sslmode=" + GetEnv("DB_SSLMODE", "disable")
}
