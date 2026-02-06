# Profile Service

Core business logic for managing matrimonial profiles, search, and community details.

## 🚀 Built With
- FastAPI (Python 3.11)
- SQLAlchemy
- PostgreSQL

## 🔧 Environment Variables
- `DATABASE_URL`: Connection string for PostgreSQL.
- `AUTH_SERVICE_URL`: URL to the Auth service for token validation.

## ✨ Key Features
- **Self-Healing Migration**: Automatically adds missing columns to the database at startup.
- **Smart Search Logic**: Automatically defaults search gender based on user profile.
- **Admin Approval Flow**: Profiles are created with `is_approved=False` by default.

## 📦 Docker Support
Build the image:
```bash
docker build -t profile-service .
```

## ☸️ Kubernetes Deployment
Refer to `k8s/base/apps.yaml`. In GKE, this service depends on the `postgres-service` being available.
