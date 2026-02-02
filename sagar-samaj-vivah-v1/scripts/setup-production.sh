#!/bin/bash

echo ">>> Setting up MongoDB Environment for Sagar Samaj Vivah..."

# 1. Update Package Database
sudo apt-get update

# 2. Install MongoDB (Community Edition suitable for Ubuntu 20.04/22.04 commonly on GCP)
sudo apt-get install -y gnupg curl

# Import public key
curl -fsSL https://pgp.mongodb.com/server-7.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg \
   --dearmor

# Create list file (Assuming Ubuntu 22.04 Jammy)
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list

sudo apt-get update
sudo apt-get install -y mongodb-org

# 3. Start MongoDB
sudo systemctl start mongod
sudo systemctl enable mongod

echo ">>> MongoDB Started."

# 4. Generate Random Secret for Auth
SECRET=$(openssl rand -base64 32)

# 5. Create .env file if not exists
if [ ! -f ".env" ]; then
    echo ">>> Creating .env file..."
    cat > .env <<EOL
DATABASE_URL="mongodb://localhost:27017/sagar_vivah"
NEXTAUTH_SECRET="$SECRET"
NEXTAUTH_URL="http://localhost:3000"
EOL
    echo ">>> .env file created."
else
    echo ">>> .env file already exists. Skipping."
fi

echo ">>> Setup Complete!"
echo "Run 'npm install' then 'npx prisma db push' to initialize the database."
