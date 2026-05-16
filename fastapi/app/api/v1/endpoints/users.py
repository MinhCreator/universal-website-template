from fastapi import APIRouter, Depends, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.crud.user import create_user, delete_user, get_user_by_id, get_users
from app.database import get_db
from app.dependencies import get_current_user
from app.models.user import User
from app.schemas.user import UserCreate, UserRead

router = APIRouter(prefix="/users", tags=["users"])


@router.get("/", response_model=list[UserRead])
async def list_users(
    skip: int = 0,
    limit: int = 100,
    db: AsyncSession = Depends(get_db),
    _current: User = Depends(get_current_user),
):
    return await get_users(db, skip=skip, limit=limit)


@router.get("/{user_id}", response_model=UserRead)
async def get_user(
    user_id: int,
    db: AsyncSession = Depends(get_db),
    _current: User = Depends(get_current_user),
):
    user = await get_user_by_id(db, user_id)
    if not user:
        from app.core.exceptions import NotFoundError
        raise NotFoundError("User not found")
    return user


@router.post("/", response_model=UserRead, status_code=status.HTTP_201_CREATED)
async def create_user_endpoint(
    data: UserCreate,
    db: AsyncSession = Depends(get_db),
):
    from app.core.exceptions import ConflictError
    from app.crud.user import get_user_by_email, get_user_by_username

    if await get_user_by_email(db, data.email):
        raise ConflictError("Email already registered")
    if await get_user_by_username(db, data.username):
        raise ConflictError("Username already taken")
    return await create_user(db, data)


@router.delete("/{user_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_user_endpoint(
    user_id: int,
    db: AsyncSession = Depends(get_db),
    _current: User = Depends(get_current_user),
):
    user = await get_user_by_id(db, user_id)
    if not user:
        from app.core.exceptions import NotFoundError
        raise NotFoundError("User not found")
    await delete_user(db, user)
