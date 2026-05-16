.PHONY: run build test lint tidy

run:
	go run main.go

build:
	go build -o bin/app main.go

test:
	go test -v ./...

lint:
	golangci-lint run ./...

tidy:
	go mod tidy
	go mod vendor
