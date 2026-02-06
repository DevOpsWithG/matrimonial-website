# Sagar Samaj Matrimony - Multi-Environment Platform

A professional, microservices-based matrimonial platform designed for the **Sagar Samaj / Gawandi** community. Now enhanced with production-grade GKE orchestration and multi-environment Terraform infrastructure.

## 🚀 Project Overview

This repository is organized into a scalable architecture supporting local development (Docker Compose) and cloud production (GKE).

### 📁 Project Structure

```text
matrimonial-website/
├── sagar_matrimony/    # Source code & Local Docker setup
│   ├── auth-service/     # FastAPI Auth
│   ├── profile-service/  # FastAPI Profiles
│   └── frontend/         # Next.js 15 UI
├── terraform/           # GCP Infrastructure (Dev/Prod)
└── k8s/                 # Kubernetes Manifests (GKE)
```

## ✨ Core Platforms

### 🐳 Local Development (Docker)
Ideal for testing new features locally. 
- Location: `sagar_matrimony/`
- Command: `docker-compose up --build`

### ☸️ Cloud Production (GKE)
Designed for high availability and scalability on Google Cloud.
- **Infrasructure**: Provisions VPC, Private GKE, and Artifact Registry.
- **Environments**: Separate `dev` and `prod` logic.
- **Location**: `terraform/` and `k8s/` directories.

## 🛠 Features

- **Multi-Environment Support**: Clean separation between development and production.
- **Smart Search & Community UI**: Premium experience optimized for trustworthy matching.
- **Self-Healing Infrastructure**: Database auto-sync and GKE-managed pod health.
- **Proprietary Protection**: Strict intellectual property safeguards throughout the codebase.

## 🚦 Getting Started (Cloud)

Refer to the specific READMEs for detailed instructions:
1. [Infrastructure Provisioning (Terraform)](terraform/README.md)
2. [Kubernetes Deployment (K8s)](k8s/README.md)

---

## 📜 Legal & License

**Copyright © 2026 Sagar Samaj Vivah. All rights reserved.**

This software and its associated design, aesthetics, and source code are the exclusive intellectual property of the owners. Unauthorized copying, redistribution, or modification is strictly prohibited. Refer to [LICENSE](LICENSE) for full legal terms.

---
© 2026 Sagar Samaj Vivah. Designed for community trust and prosperity.
