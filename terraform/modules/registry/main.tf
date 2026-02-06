resource "google_artifact_registry_repository" "repo" {
  location      = var.region
  repository_id = "${var.project_id}-${var.env}-repo"
  description   = "Docker repository for ${var.env} environment"
  format        = "DOCKER"
}
