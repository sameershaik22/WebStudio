from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

# Schema for contact form input validation
class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    business: Optional[str] = None
    message: Optional[str] = None

# Schema for contact responses
class ContactResponse(BaseModel):
    id: int
    name: str
    email: EmailStr
    business: Optional[str]
    message: Optional[str]
    created_at: datetime

    class Config:
        from_attributes = True

# Schema for newsletter signup validation
class NewsletterCreate(BaseModel):
    email: EmailStr

class NewsletterResponse(BaseModel):
    id: int
    email: EmailStr
    created_at: datetime

    class Config:
        from_attributes = True
