# Terraform Infrastructure

This directory contains the Infrastructure as Code (IaC) to provision the GCP environment for Sagar Samaj Matrimony using a modular approach.

## 📂 Structure
- `modules/`: Reusable components (VPC, GKE, Artifact Registry).
- `environments/`: Specific configurations for `dev` and `prod`.

## 🚦 Usage

1. **Initialize Terraform**:
   ```bash
   cd environments/dev
   terraform init
   ```

2. **Provision Infrastructure**:
   ```bash
   terraform apply -var="project_id=your-gcp-project"
   ```

## 🔒 State Management
The `backend.tf` in each environment folder is configured to use Google Cloud Storage (GCS) for remote state. Ensure you create the bucket manually before the first `terraform init`.

## 🛠 Configuration
- **Dev**: Uses a single node cluster with preemptible VMs to keep costs low.
- **Prod**: Uses a 3-node HA cluster with standard VMs for production stability.
