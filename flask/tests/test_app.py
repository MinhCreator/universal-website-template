import pytest
from app import create_app
from app.extensions import db


@pytest.fixture
def app():
    app = create_app('testing')
    with app.app_context():
        db.create_all()
        yield app
        db.drop_all()


@pytest.fixture
def client(app):
    return app.test_client()


def test_index(client):
    resp = client.get('/')
    assert resp.status_code == 200
    assert b'Welcome' in resp.data


def test_about(client):
    resp = client.get('/about')
    assert resp.status_code == 200


def test_404(client):
    resp = client.get('/nonexistent')
    assert resp.status_code == 404
