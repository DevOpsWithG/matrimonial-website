#!/bin/bash

# Update .env to add directConnection=true
# This is required for Prisma to work with Standalone (Non-Replica Set) MongoDB

if [ -f ".env" ]; then
    echo "Updating .env file..."
    # Replace the connection string end with the flag
    # Pattern matches ...sagar_vivah" and replaces with ...sagar_vivah?directConnection=true"
    sed -i 's|/sagar_vivah"|/sagar_vivah?directConnection=true"|' .env
    echo "Success: Updated DATABASE_URL in .env"
    echo "Current value:"
    grep "DATABASE_URL" .env
else
    echo "Error: .env file not found. Please ensure you are in the sagar-samaj-vivah directory."
fi
