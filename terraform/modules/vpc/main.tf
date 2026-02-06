resource "google_compute_network" "vpc" {
  name                    = "${var.project_id}-${var.env}-vpc"
  auto_create_subnetworks = false
}

resource "google_compute_subnetwork" "subnet" {
  name          = "${var.project_id}-${var.env}-subnet"
  region        = var.region
  network       = google_compute_network.vpc.name
  ip_cidr_range = var.env == "prod" ? "10.0.0.0/20" : "10.1.0.0/20"

  # Necessary for private GKE clusters
  private_ip_google_access = true

  secondary_ip_range {
    range_name    = "k8s-pod-range"
    ip_cidr_range = var.env == "prod" ? "10.48.0.0/14" : "10.52.0.0/14"
  }

  secondary_ip_range {
    range_name    = "k8s-service-range"
    ip_cidr_range = var.env == "prod" ? "10.56.0.0/20" : "10.57.0.0/20"
  }
}

# Cloud NAT for private nodes to access the internet
resource "google_compute_router" "router" {
  name    = "${var.project_id}-${var.env}-router"
  region  = var.region
  network = google_compute_network.vpc.name
}

resource "google_compute_router_nat" "nat" {
  name                               = "${var.project_id}-${var.env}-nat"
  router                             = google_compute_router.router.name
  region                             = var.region
  nat_ip_allocate_option             = "AUTO_ONLY"
  source_subnetwork_ip_ranges_to_nat = "ALL_SUBNETWORKS_ALL_IP_RANGES"
}
