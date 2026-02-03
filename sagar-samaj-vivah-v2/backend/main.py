from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import engine, Base
from .routers import auth, content

# Create Tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="MetroMinimal API", description="Backend for Sagar Samaj Vivah", version="2.0")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Allow all for dev, restrict in prod
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(auth.router)
# app.include_router(content.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to MetroMinimal API"}
