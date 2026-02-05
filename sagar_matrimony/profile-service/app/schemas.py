from pydantic import BaseModel
from typing import Optional, List
from datetime import date, datetime

class ProfileCreate(BaseModel):
    full_name: str
    gender: str
    date_of_birth: date
    sub_caste: str # Gawandi or Sagar Samaj
    native_place: Optional[str] = None
    gotra: Optional[str] = None
    family_details: Optional[str] = None
    bio: Optional[str] = None
    height: Optional[int] = None
    marital_status: str
    education: str
    job_title: str
    income_range: Optional[str] = None
    city: str
    state: str
    horoscope: Optional[str] = None
    partner_preference: Optional[str] = None
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
    user_id: str
    full_name: str
    gender: str
    date_of_birth: date
    religion: str
    caste: str
    sub_caste: str
    native_place: Optional[str]
    gotra: Optional[str]
    family_details: Optional[str]
    bio: Optional[str]
    height: Optional[int]
    marital_status: str
    education: str
    job_title: str
    income_range: Optional[str]
    city: str
    state: str
    horoscope: Optional[str]
    partner_preference: Optional[str]
    is_approved: bool
    photos: List[str]
    created_at: datetime
    
    class Config:
        from_attributes = True

