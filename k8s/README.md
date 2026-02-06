# Kubernetes Manifests

This directory contains the Kubernetes manifests required to deploy the microservices on GKE.

## 📂 Structure
- `base/`: Shared manifests including Namespace, Secrets template, and Database StatefulSet.
- `dev/` & `prod/`: Environment-specific overrides (coming soon via Kustomize).

## 🚦 Deployment Order

1. **Namespace & Secrets**:
   ```bash
   kubectl apply -f base/namespace.yaml
   kubectl apply -f base/secrets.yaml
   ```

2. **Database**:
   ```bash
   kubectl apply -f base/database.yaml
   ```

3. **Applications**:
   ```bash
   kubectl apply -f base/apps.yaml
   ```

4. **Ingress**:
   ```bash
   kubectl apply -f base/ingress.yaml
   ```

## 🌐 External Access
The `base/ingress.yaml` manifest configures a GCE Ingress. Ensure you reserve a static Global IP in GCP named `sagar-matrimony-ip` or update the annotation in the manifest.
