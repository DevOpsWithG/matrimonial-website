from pydantic import BaseModel, EmailStr
from typing import Optional

class UserCreate(BaseModel):
    email: Optional[EmailStr] = None
    phone: Optional[str] = None
    password: str

class UserLogin(BaseModel):
    username: str  # Can be email or phone
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Optional[str] = None

class OutputUser(BaseModel):
    id: int
    email: Optional[str]
    phone: Optional[str]
    is_active: bool
    is_verified: bool
    
    class Config:
        from_attributes = True
