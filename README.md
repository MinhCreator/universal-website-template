# Universal Website Project Template

A multi-framework boilerplate collection with **10 pre-configured web application templates** spanning **4 programming languages** (Go, Python, JavaScript, TypeScript). Each template follows a consistent clean architecture: layered structure, environment-based config, ORM integration, JWT auth, input validation, and CORS support.

## Included Frameworks

### Backend
| Framework | Language | Architecture | Directory |
|-----------|----------|-------------|-----------|
| **Beego** | Go v1.22 | MVC | `Beego/` |
| **Echo** | Go v1.22 | Clean/Layered | `Echo-go/` |
| **Gin** | Go v1.21 | Layered | `Gin-go/` |
| **Django** | Python 3.x | Full-stack MTV | `django/` |
| **FastAPI** | Python 3.11+ | Async Layered | `fastapi/` |
| **Flask** | Python 3.x | Blueprint-based | `flask/` |
| **Express.js** | Node.js | MVC-ish API | `expressjs/` |
| **Fastify** | Node.js | Plugin-based | `fastify/` |

### Frontend
| Framework | Language | Architecture | Directory |
|-----------|----------|-------------|-----------|
| **Next.js 15** | TypeScript | App Router (React 19) | `nextjs/` |
| **React.js** | TypeScript | Vite SPA (React 19) | `reactjs/` |

## Quick Start

Pick a framework and follow its setup:

```bash
# Go (Beego example)
cd Beego
cp .env.example .env   # or edit conf/app.conf
make run

# Python (FastAPI example)
cd fastapi
pip install -r requirements-dev.txt
uvicorn app.main:app --reload

# Node.js (Express example)
cd expressjs
cp .env.example .env
npm install
npm run dev

# Frontend (Next.js)
cd nextjs
cp .env.local.example .env.local
npm install
npm run dev
```

Each framework directory is self-contained with its own dependencies, config, and scripts.
