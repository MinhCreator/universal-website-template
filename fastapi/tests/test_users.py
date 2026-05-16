import pytest
from httpx import AsyncClient


@pytest.mark.asyncio
async def test_create_user(client: AsyncClient):
    payload = {
        "email": "test@example.com",
        "username": "testuser",
        "password": "secret123",
    }
    response = await client.post("/api/v1/users/", json=payload)
    assert response.status_code == 201
    data = response.json()
    assert data["email"] == payload["email"]
    assert data["username"] == payload["username"]
    assert "id" in data
    assert data["is_active"] is True


@pytest.mark.asyncio
async def test_create_duplicate_email(client: AsyncClient):
    payload = {
        "email": "dup@example.com",
        "username": "user1",
        "password": "secret123",
    }
    await client.post("/api/v1/users/", json=payload)
    response = await client.post("/api/v1/users/", json=payload)
    assert response.status_code == 409


@pytest.mark.asyncio
async def test_list_users(client: AsyncClient):
    response = await client.get("/api/v1/users/")
    assert response.status_code == 200
    assert isinstance(response.json(), list)
