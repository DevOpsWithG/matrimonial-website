terraform {
  backend "gcs" {
    bucket = "REPLACE_WITH_YOUR_GCS_BUCKET_NAME"
    prefix = "terraform/state/prod"
  }
}
