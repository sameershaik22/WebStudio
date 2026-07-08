from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from typing import List

from app.core.database import get_db
from app.models.models import ContactSubmission, NewsletterSignup
from app.schemas.schemas import ContactCreate, ContactResponse, NewsletterCreate, NewsletterResponse

router = APIRouter()

@router.post("/contact", response_model=ContactResponse, status_code=status.HTTP_201_CREATED)
async def submit_contact(contact: ContactCreate, db: AsyncSession = Depends(get_db)):
    db_contact = ContactSubmission(
        name=contact.name,
        email=contact.email,
        business=contact.business,
        message=contact.message
    )
    db.add(db_contact)
    await db.flush()
    return db_contact

@router.post("/newsletter", response_model=NewsletterResponse, status_code=status.HTTP_201_CREATED)
async def signup_newsletter(signup: NewsletterCreate, db: AsyncSession = Depends(get_db)):
    # Check if already signed up
    query = select(NewsletterSignup).where(NewsletterSignup.email == signup.email)
    result = await db.execute(query)
    existing = result.scalars().first()
    if existing:
        return existing
        
    db_signup = NewsletterSignup(email=signup.email)
    db.add(db_signup)
    await db.flush()
    return db_signup

@router.get("/contact-submissions", response_model=List[ContactResponse])
async def list_contact_submissions(db: AsyncSession = Depends(get_db)):
    query = select(ContactSubmission).order_by(ContactSubmission.created_at.desc())
    result = await db.execute(query)
    submissions = result.scalars().all()
    return submissions
