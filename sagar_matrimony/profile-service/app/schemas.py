from pydantic import BaseModel
from typing import Optional, List
from datetime import date, datetime

class ProfileCreate(BaseModel):
    full_name: str
    gender: str
    date_of_birth: date
    sub_caste: str # Gawandi or Sagar Samaj
    bio: Optional[str] = None
    height: Optional[int] = None
    marital_status: str
    education: str
    job_title: str
    city: str
    state: str
    photos: List[str] = []

class ProfileUpdate(BaseModel):
    full_name: Optional[str] = None
    bio: Optional[str] = None
    job_title: Optional[str] = None
    city: Optional[str] = None
    photos: Optional[List[str]] = None
    # Add other fields as needed

class ProfileResponse(BaseModel):
    id: int
    user_id: int
    full_name: str
    gender: str
    date_of_birth: date
    religion: str
    caste: str
    sub_caste: str
    bio: Optional[str]
    marital_status: str
    education: str
    job_title: str
    city: str
    state: str
    is_approved: bool
    photos: List[str]
    
    class Config:
        from_attributes = True
