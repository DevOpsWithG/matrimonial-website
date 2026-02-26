variable "project_id" {
  description = "The GCP project ID"
  type        = string
}

variable "region" {
  description = "The region to deploy to"
  type        = string
}

variable "env" {
  description = "The environment name (dev or prod)"
  type        = string
}
