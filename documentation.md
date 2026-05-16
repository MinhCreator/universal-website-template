# Documentation

## Architecture Overview

Every template in this repository follows a consistent **layered clean architecture** pattern. This ensures that regardless of which framework you choose, the structure and responsibilities are familiar.

### Common Backend Layers

| Layer | Responsibility | Files |
|-------|---------------|-------|
| **Config** | Environment variables, app settings | `config/`, `.env`, `conf/` |
| **Routes** | URL routing, endpoint definitions | `routes/`, `urls.py`, `routers/` |
| **Controllers/Handlers** | HTTP request handling | `controllers/`, `handlers/`, `views.py`, `endpoints/` |
| **Services** | Business logic | `services/`, `crud/` |
| **Repositories** | Data access abstraction | `repositories/`, `crud/` |
| **Models** | Database/ORM schemas | `models/` |
| **DTOs/Schemas** | Request/response validation | `dto/`, `schemas/` |
| **Middleware** | Cross-cutting concerns | `middleware/`, `plugins/` |
| **Utils** | Shared helpers | `utils/`, `lib/`, `helpers.py` |
| **Database** | Connection/session management | `database/`, `extensions.py` |
| **Migrations** | Schema versioning | `migrations/`, `alembic/` |

### Common Frontend Layers (Next.js / React)

| Layer | Responsibility | Files |
|-------|---------------|-------|
| **Config** | App/env configuration | `config/` |
| **Components** | Reusable UI (layout, ui, common) | `components/` |
| **Hooks** | Custom React hooks | `hooks/` |
| **Services** | API client layer | `services/` |
| **Types** | TypeScript definitions | `types/` |
| **Lib** | Utility functions | `lib/`, `utils/` |
| **Providers** | Context/state providers | `providers/` |
| **Stores** | State management | `stores/` |

## Common Patterns

### Environment Configuration

All frameworks load configuration from environment variables (`.env` files) using language-appropriate libraries:

- **Go**: `godotenv` + struct mapping
- **Python**: `pydantic-settings`, `django-environ`, or class-based config
- **Node**: `dotenv` + config modules

### Authentication

7 out of 8 backends include JWT-based authentication with:
- Password hashing (bcrypt)
- Token-based session management
- Protected route middleware
- User model with email/username/password

### Database Integration

Every backend template includes ORM configuration:
- **Go**: GORM (Echo, Gin) / Beego ORM
- **Python**: SQLAlchemy (FastAPI), Django ORM, Flask-SQLAlchemy
- **Node**: Mongoose (Express), Fastify plugins

### API Structure

RESTful API routing following `/api/v1/...` or `/api/...` conventions with:
- JSON request/response handling
- Input validation (Zod, Pydantic, validator libraries)
- Consistent error response format
- CORS middleware enabled

## Framework-Specific Details

### Go Frameworks

- **Beego**: Full MVC with built-in ORM, template engine (`*.tpl`), session management, and multi-environment config (`conf/app.conf`)
- **Echo**: Clean architecture with explicit service/repository layers, GORM with PostgreSQL, JWT auth
- **Gin**: Simplified layered structure, GORM with PostgreSQL, auto-migrations, grouped routes

### Python Frameworks

- **Django**: Full-featured with `config/` settings package, `apps/core/` app, SQLite DB, class-based views
- **FastAPI**: Async-first with SQLAlchemy async, Pydantic schemas, JWT auth, Alembic migrations, Docker Compose with hot reload
- **Flask**: App factory pattern with blueprints, SQLAlchemy, Flask-Migrate, Flask-Login, Flask-WTF

### Node.js Frameworks

- **Express**: Mongoose ODM, Zod validation, JWT auth, structured error handling with `ApiError`/`ApiResponse` helpers
- **Fastify**: Plugin-based with `@fastify/autoload`, `@fastify/swagger` docs, sensible defaults, schemas per route

### Frontend Frameworks

- **Next.js 15** (App Router): Route groups for marketing/auth/dashboard, server components, API routes, Tailwind CSS, TanStack Query, multiple UI demos
- **React.js** (Vite SPA): TanStack Router, TanStack Query, 3 UI library demos (Chakra, MUI, DaisyUI), Tailwind CSS, Framer Motion
