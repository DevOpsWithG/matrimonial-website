from pydantic import BaseModel, EmailStr, field_validator
from typing import Optional

class UserCreate(BaseModel):
    email: Optional[EmailStr] = None
    phone: Optional[str] = None
    password: str

class UserLogin(BaseModel):
    username: str  # Can be email or phone
    password: str

    @field_validator('password')
    def validate_password(cls, v):
        if len(v) < 8:
            raise ValueError('Password must be at least 8 characters long')
        return v

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
