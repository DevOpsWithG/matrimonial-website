# Sagar Samaj Matrimony

A professional, microservices-based matrimonial platform specifically designed for the **Sagar Samaj / Gawandi** community. This project features a modern tech stack, premium design aesthetics, and a robust architecture.

## 🚀 Features

- **Decoupled Microservices**: Scalable architecture with independent services.
- **Authentication**: Secure JWT-based registration and login with mobile/email support.
- **Profile Management**: Detailed profiles including Height, Education, Profession, and Community-specific details.
- **Admin Approval**: Profiles require admin verification before becoming visible in search results.
- **Matchmaking Search**: Advanced filtering by gender and preferences.
- **Premium UI**: Elegant Gold & Dark theme built with Next.js 15 and Vanilla CSS.
- **Dockerized**: Easy deployment using Docker Compose.

## 🛠 Tech Stack

- **Frontend**: [Next.js 15](https://nextjs.org/) (App Router), React 18, CSS Modules.
- **Backend Services**: [FastAPI](https://fastapi.tiangolo.com/) (Python 3.11).
- **Database**: [PostgreSQL 15](https://www.postgresql.org/).
- **Reverse Proxy / Gateway**: [Nginx](https://www.nginx.com/).
- **Containerization**: [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/).

## 🏗 Architecture

```text
sagar_matrimony/
├── auth-service/      # User management, JWT issuing, password hashing (FastAPI)
├── profile-service/   # Profile CRUD, search logic, admin approval (FastAPI)
├── frontend/          # Main user interface (Next.js 15)
├── gateway/           # Nginx configuration for routing and load balancing
└── docker-compose.yml # Orchestration for all services
```

## 📋 Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
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
   - **Frontend**: [http://localhost](http://localhost) (via Gateway) or [http://localhost:3000](http://localhost:3000) (Direct)
   - **Auth API Docs**: [http://localhost:8001/docs](http://localhost:8001/docs)
   - **Profile API Docs**: [http://localhost:8002/docs](http://localhost:8002/docs)

## 🔧 Environment Variables

The services use the following environment variables (configured in `docker-compose.yaml`):

- `DATABASE_URL`: Connection string for PostgreSQL.
- `JWT_SECRET`: Secret key for signing tokens.
- `JWT_ALGORITHM`: HS256 (default).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📜 License

This project is licensed under the MIT License.
