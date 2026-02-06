# Frontend Application

Premium Gold & Dark themed user interface built with Next.js 15.

## 🚀 Built With
- Next.js 15 (App Router)
- React 18
- Vanilla CSS (CSS Modules)

## 🔧 Environment Variables
- `NEXT_PUBLIC_API_URL`: The base URL for the API Gateway (default: `/api`).

## 📦 Docker Support
Build the image:
```bash
docker build -t frontend .
```

## ☸️ Kubernetes Deployment
In GKE, this service is exposed via the GKE Ingress controller. Refer to `k8s/base/ingress.yaml`.

## 💎 Aesthetics
The frontend uses a custom-tailored dark theme with gold accents, designed to look premium and trustworthy for the matrimonial community.
