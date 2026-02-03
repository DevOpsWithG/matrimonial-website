#!/bin/bash
set -e

echo "🚀 Starting MetroMinimal Setup on GCP VM..."

# 1. Backend Setup
echo "🔧 Setting up Backend..."
cd metrominimal
python3 -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install -r backend/requirements.txt

# Start Backend in background (optional, for testing)
# uvicorn backend.main:app --host 0.0.0.0 --port 8000 --reload &

# 2. Frontend Setup
echo "🎨 Setting up Frontend..."
# Check if frontend dir exists, if not create it using create-next-app
if [ ! -d "frontend" ]; then
    npx -y create-next-app@latest frontend \
    --typescript \
    --tailwind \
    --eslint \
    --no-src-dir \
    --app \
    --import-alias "@/*" \
    --use-npm
fi

cd frontend

# Install dependencies from package.json
npm install

# Install additional UI dependencies (if not in package.json)
npm install axios framer-motion lucide-react clsx tailwind-merge

echo "✅ Setup Complete! To run:"
echo "1. Backend: cd metrominimal && source venv/bin/activate && uvicorn backend.main:app --reload"
echo "2. Frontend: cd metrominimal/frontend && npm run dev"
