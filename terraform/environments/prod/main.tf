provider "google" {
  project = var.project_id
  region  = var.region
}

module "vpc" {
  source     = "../../modules/vpc"
  project_id = var.project_id
  region     = var.region
  env        = "prod"
}

module "gke" {
  source             = "../../modules/gke"
  project_id         = var.project_id
  region             = var.region
  env                = "prod"
  network            = module.vpc.network_name
  subnetwork         = module.vpc.subnet_name
  pod_range_name     = module.vpc.pod_range_name
  service_range_name = module.vpc.service_range_name
  node_count         = 3
  machine_type       = "e2-standard-2"
}

module "registry" {
  source     = "../../modules/registry"
  project_id = var.project_id
  region     = var.region
  env        = "prod"
}
