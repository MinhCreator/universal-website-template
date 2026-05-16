.PHONY: dev build run clean test lint docker-build

APP_NAME = universal-website-project-template

dev:
	@echo "Starting development server..."
	beego run

build:
	@echo "Building $(APP_NAME)..."
	go build -o bin/$(APP_NAME) .

run:
	@echo "Running $(APP_NAME)..."
	./bin/$(APP_NAME)

clean:
	@echo "Cleaning..."
	rm -rf bin/
	rm -rf logs/
	rm -rf data/sessions/

test:
	@echo "Running tests..."
	go test -v ./...

lint:
	@echo "Linting..."
	golangci-lint run ./...

docker-build:
	@echo "Building Docker image..."
	docker build -t $(APP_NAME):latest .

migrate:
	@echo "Running database migrations..."
	go run cmd/migrate/main.go

swagger:
	@echo "Generating Swagger docs..."
	beego generate docs
