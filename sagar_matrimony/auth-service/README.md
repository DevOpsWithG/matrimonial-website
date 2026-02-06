# Auth Service

Secure JWT-based authentication service for Sagar Samaj Matrimony.

## 🚀 Built With
- FastAPI (Python 3.11)
- SQLAlchemy
- PostgreSQL

## 🔧 Environment Variables
- `DATABASE_URL`: Connection string for PostgreSQL.
- `JWT_SECRET`: Secret key for signing tokens.
- `JWT_ALGORITHM`: Algorithm for JWT (default: HS256).

## 📦 Docker Support
Build the image:
```bash
docker build -t auth-service .
```

## ☸️ Kubernetes Deployment
Refer to `k8s/base/apps.yaml` for the standard deployment manifest. 
In GKE, ensure the `app-secrets` Secret is created with `JWT_SECRET` and `POSTGRES_PASSWORD`.

## 🛡 Security
This service handles password hashing using passlib and issues signed JWT tokens for secure session management.
