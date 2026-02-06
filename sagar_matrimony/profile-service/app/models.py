from sqlalchemy import Column, Integer, String, Boolean, DateTime, Date, Text, JSON
from sqlalchemy.sql import func
from .database import Base

class Profile(Base):
    __tablename__ = "profiles"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(String, unique=True, index=True) # Linked to Auth Service User ID (Email/Phone)
    full_name = Column(String)
    gender = Column(String)
    date_of_birth = Column(Date)
    
    # Community Details
    religion = Column(String, default="Hindu")
    caste = Column(String, default="OBC")
    sub_caste = Column(String) # Gawandi or Sagar Samaj
    native_place = Column(String, nullable=True)
    gotra = Column(String, nullable=True)
    family_details = Column(Text, nullable=True)
    
    # Personal Details
    bio = Column(Text)
    height = Column(Integer) # in cm
    marital_status = Column(String) # Never Married, Divorced, Widowed
    
    # Professional
    education = Column(String)
    job_title = Column(String)
    company = Column(String, nullable=True)
    income_range = Column(String, nullable=True)
    
    # Location
    city = Column(String)
    state = Column(String)
    country = Column(String, default="India")
    
    # Preferences & Others
    horoscope = Column(String, nullable=True)
    rashi = Column(String, nullable=True)
    partner_preference = Column(Text, nullable=True)
    
    # Media
    photos = Column(JSON, default=[]) # List of image URLs
    
    # Admin Control
    is_approved = Column(Boolean, default=False)
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

