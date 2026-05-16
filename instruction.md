# Instructions

## Getting Started

### Prerequisites

You need the appropriate language runtime for the framework you choose:

- **Go frameworks**: Go 1.21+
- **Python frameworks**: Python 3.10+
- **Node.js frameworks**: Node.js 18+ & npm
- **Frontend**: Node.js 18+ & npm

---

## Go Backend Setup

### Beego (`Beego/`)

```bash
cd Beego

# Configure
# Edit conf/app.conf for DB, port, session settings
# Or copy .env and adjust

# Run
make run          # starts on :8080

# Build
make build

# Test
make test

# Lint
make lint

# Migrate
make migrate

# Docker
make docker-build
docker run -p 8080:8080 beego-app
```

### Echo (`Echo-go/`)

```bash
cd Echo-go

# Configure
cp .env.example .env   # edit DB, JWT, app settings

# Run
go run main.go          # starts on :8080

# Via Makefile
make run
make build
make test
make lint
```

### Gin (`Gin-go/`)

```bash
cd Gin-go

# Configure
cp .env.example .env   # edit DB settings

# Run
go run main.go          # starts on :8080
```

---

## Python Backend Setup

### Django (`django/`)

```bash
cd django

# Setup virtual environment
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Run server
python manage.py runserver  # starts on :8000
```

### FastAPI (`fastapi/`)

```bash
cd fastapi

# Optional: virtual environment
python -m venv venv
source venv/bin/activate

# Install
pip install -r requirements-dev.txt

# Configure
cp .env.example .env   # edit DB settings

# Run
uvicorn app.main:app --reload   # starts on :8000
# Swagger docs: http://localhost:8000/docs

# Docker with hot reload
docker compose up --build

# Run tests
pytest

# Lint
ruff check .
```

### Flask (`flask/`)

```bash
cd flask

# Setup
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Configure
cp .env.example .env

# Run
flask run               # starts on :5000

# Or via run.py
python run.py

# Run migrations
flask db upgrade

# Run tests
pytest
```

---

## Node.js Backend Setup

### Express (`expressjs/`)

```bash
cd expressjs

# Install
npm install

# Configure
cp .env.example .env   # edit MongoDB URI, JWT secret, port

# Run (dev with auto-reload)
npm run dev

# Run (production)
npm start

# Lint
npx eslint .
```

### Fastify (`fastify/`)

```bash
cd fastify

# Install
npm install

# Configure
cp .env.example .env   # edit port, host, log level

# Run (dev)
npm run dev

# Run (production)
npm start

# Swagger docs: http://localhost:3000/docs
```

---

## Frontend Setup

### Next.js 15 (`nextjs/`)

```bash
cd nextjs

# Install
npm install

# Configure
cp .env.local.example .env.local   # edit API URLs, secrets

# Run (dev)
npm run dev            # starts on :3000

# Build
npm run build

# Lint
npm run lint

# Test
npx vitest
```

### React.js Vite SPA (`reactjs/`)

```bash
cd reactjs

# Install
npm install

# Run (dev)
npm run dev            # starts on :5173

# Build
npm run build

# Preview build
npm run preview

# Lint
npx eslint .
```

---

## Environment Variables Reference

Most frameworks use a `.env` file with common variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | App server port | `8080` |
| `DB_HOST` | Database host | `localhost` |
| `DB_PORT` | Database port | `5432` |
| `DB_NAME` | Database name | `app_db` |
| `DB_USER` | Database user | `postgres` |
| `DB_PASSWORD` | Database password | `secret` |
| `JWT_SECRET` | JWT signing key | `your-secret-key` |
| `JWT_EXPIRES_IN` | Token expiry | `7d` |

Check each framework's `.env.example` or config file for exact variable names.

## Testing

Each framework includes a testing setup:

| Framework | Runner | Command |
|-----------|--------|---------|
| Beego | `go test` | `make test` |
| Echo/Gin | `go test` | `go test ./...` |
| Django | `manage.py test` | `python manage.py test` |
| FastAPI | pytest | `pytest` |
| Flask | pytest | `pytest` |
| Express | _(stub)_ | - |
| Fastify | _(none)_ | - |
| Next.js | vitest | `npx vitest` |
| React.js | _(none)_ | - |
