from fastapi import APIRouter

router = APIRouter(prefix="/content", tags=["Content"])

@router.get("/")
def get_content():
    return {"message": "Content placeholder"}
