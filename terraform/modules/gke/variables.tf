variable "project_id" {
  description = "The GCP project ID"
  type        = string
}

variable "region" {
  description = "The region to deploy to"
}

variable "env" {
  description = "The environment name"
}

variable "network" {
  description = "The VPC network name"
}

variable "subnetwork" {
  description = "The subnetwork name"
}

variable "pod_range_name" {
  description = "The secondary range name for pods"
}

variable "service_range_name" {
  description = "The secondary range name for services"
}

variable "node_count" {
  description = "Number of nodes per zone"
  default     = 1
}

variable "machine_type" {
  description = "Machine type for nodes"
  default     = "e2-medium"
}
