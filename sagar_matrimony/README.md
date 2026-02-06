# Sagar Samaj Matrimony

A professional, microservices-based matrimonial platform specifically designed for the **Sagar Samaj / Gawandi** community. This project features a modern tech stack, premium design aesthetics, and a robust architecture optimized for trust and usability.

## ✨ Premium Features

- **Decoupled Microservices**: Highly scalable architecture with independent Auth, Profile, and Gateway services.
- **Smart Search Defaults**: Intelligent matchmaking that automatically detects your gender and defaults search results to the opposite gender for a smoother experience.
- **Structured Family Details**: Dynamic profile fields for family members, including names, relations, and occupations, providing a comprehensive community overview.
- **Self-Healing Database**: Integrated auto-migration logic that automatically synchronizes the database schema with latest model changes at startup.
- **Mandatory Admin Verification**: Robust trust system where profiles require admin review and approval before appearing in search results.
- **Premium UI/UX**: Elegant **Gold & Dark theme** aesthetics built for a high-end user experience, featuring glassmorphism and modern typography.
- **Optional/Required Logic**: Carefully balanced forms making personal bios optional while requiring essential data like **Horoscope** and **Rashi**.

## 🛠 Tech Stack

- **Frontend**: [Next.js 15](https://nextjs.org/) (App Router), React 18, CSS Modules (Vanilla CSS).
- **Backend Services**: [FastAPI](https://fastapi.tiangolo.com/) (Python 3.11) with Pydantic v2.
- **Database**: [PostgreSQL 15](https://www.postgresql.org/) with [SQLAlchemy](https://www.sqlalchemy.org/).
- **Reverse Proxy / Gateway**: [Nginx](https://www.nginx.com/) configured as a unified API Gateway.
- **Containerization**: [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/).

## 🏗 Architecture

```text
sagar_matrimony/
├── auth-service/      # User management, JWT issuing, password hashing (FastAPI)
├── profile-service/   # Profile CRUD, smart search, self-healing migrations (FastAPI)
├── frontend/          # Main user interface, Auth context, premium UI (Next.js 15)
├── gateway/           # Nginx API Gateway for unified routing
└── docker-compose.yml # Full system orchestration
```

### Self-Healing Schema Logic
The `profile-service` includes an automatic migration engine in `app/main.py` that checks for missing columns (e.g., `income_range`, `native_place`, `rashi`) on every startup. This ensures zero-downtime when adding new features.

## 📋 Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (Windows/Mac) or Docker Engine (Linux)
- [Docker Compose](https://docs.docker.com/compose/install/)

## 🚦 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/sagar_matrimony.git
   cd sagar_matrimony
   ```

2. **Start the application**:
   ```bash
   docker-compose up --build
   ```

3. **Access the platform**:
   - **Frontend**: [http://localhost](http://localhost) (via Gateway)
   - **Auth API Docs**: [http://localhost:8001/docs](http://localhost:8001/docs)
   - **Profile API Docs**: [http://localhost:8002/docs](http://localhost:8002/docs)

## 🔧 Environment Variables

Environment variables are managed in `docker-compose.yaml`:

- `DATABASE_URL`: PostgreSQL connection string.
- `JWT_SECRET`: Security key for token signing.
- `JWT_ALGORITHM`: Token encryption algorithm (HS256).

## 🤝 Contributing & Support

For support within the community or technical queries, please reach out via the official channels.

---
© 2026 Sagar Samaj Vivah. Designed for community trust and prosperity.
