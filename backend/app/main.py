from typing import List
from fastapi import Depends, FastAPI, HTTPException
from starlette.middleware.cors import CORSMiddleware
from starlette.requests import Request
from starlette.responses import RedirectResponse
from starlette.responses import FileResponse
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from sqlalchemy.orm import Session
import aiohttp
import crud
# import models
# import schemas
from database import SessionLocal, engine
import os
import tools
from typing import Optional

# models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/MOTC/v2/{category}/{theme}/{region}")
async def redirect_to_original_url(category: str, theme: str, region: str, q: Optional[str], db: Session = Depends(get_db)):
    q = '&'.join(q.split('|'))
    return await tools.getTdxApiData(f"https://ptx.transportdata.tw/MOTC/v2/{category}/{theme}/{region}?{q}")


@app.get("/MOTC/v2/{category}/{theme}")
async def redirect_to_original_url(category: str, theme: str, q: Optional[str], db: Session = Depends(get_db)):
    q = '&'.join(q.split('|'))
    return await tools.getTdxApiData(f"https://ptx.transportdata.tw/MOTC/v2/{category}/{theme}?{q}")


@app.get('/favicon.ico', include_in_schema=False)
async def favicon():
    pass
