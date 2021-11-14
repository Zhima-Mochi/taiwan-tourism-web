from sqlalchemy import create_engine, engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
import os
from get_docker_secret import get_docker_secret

# get variables from environment variables
HOST = "database"
DATABASE_NAME = os.environ['DB_NAME']
USER_NAME = os.environ['DB_USERNAME']
PASSWORD = get_docker_secret('db_tourism_password')

SQLALCHEMY_DATABASE_URL = f"mysql://{USER_NAME}:{PASSWORD}@{HOST}/{DATABASE_NAME}?charset=utf8"
engine = create_engine(
    SQLALCHEMY_DATABASE_URL
)

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

Base = declarative_base()
