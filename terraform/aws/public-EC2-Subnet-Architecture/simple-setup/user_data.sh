#!/bin/bash

set -e

# Update packages
apt-get update -y

# Install required packages
apt-get install -y \
    ca-certificates \
    curl \
    git \
    gnupg \
    lsb-release

# Install Docker
curl -fsSL https://get.docker.com | sh

systemctl enable docker
systemctl start docker

# Install Docker Compose
curl -L "https://github.com/docker/compose/releases/download/v2.24.6/docker-compose-$(uname -s)-$(uname -m)" \
  -o /usr/local/bin/docker-compose

chmod +x /usr/local/bin/docker-compose

# Clone repo
cd /home/ubuntu

git clone https://github.com/DevOpsWithG/matrimonial-website.git github

cd ./github/sagar_matrimony

# Run application
sudo docker-compose up --build -d