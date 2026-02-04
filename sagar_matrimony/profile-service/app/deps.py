from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
import os
from typing import Annotated

# Duplicated from Auth Service for independence, in real world could be a shared lib
SECRET_KEY = os.getenv("JWT_SECRET", "supersecretkey")
ALGORITHM = os.getenv("JWT_ALGORITHM", "HS256")

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="http://localhost/api/auth/token") # Point to gateway

async def get_current_user_id(token: Annotated[str, Depends(oauth2_scheme)]):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
        # In a real scenario we might want to verify user existence via Auth Service
        # For now, we trust the signed token and use the username (email/phone) as identifier
        # But wait, Profile needs numeric user_id if we defined it as Integer. 
        # Auth service schema 'sub' was email/phone.
        # We need the user ID. 
        # Strategy: Auth service should put User ID in the token, or we look it up.
        # Let's assume we fetch it or Auth service puts 'id' in token.
        # For now, let's treat username as the identifier or just not store numeric ID?
        # Re-checking Auth service: `to_encode.update({"exp": expire})` only.
        
        # FIX: We should update Auth service to include 'id' in jwt or just store email in Profile.
        # Let's simple check: Profile model has `user_id = Column(Integer)`.
        # This is a problem if token only has email.
        # I will update Profile model to use String for user_id to store email/phone, which is unique.
        return username 
        
    except JWTError:
        raise credentials_exception
