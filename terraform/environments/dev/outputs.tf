output "vpc_name" {
  value = module.vpc.network_name
}

output "gke_cluster_name" {
  value = module.gke.cluster_name
}

output "registry_url" {
  value = module.registry.repository_url
}
