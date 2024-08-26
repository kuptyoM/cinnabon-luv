from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

from database import db_get_info, db_count_rows, db_get_names
from classes import ObjectRequest

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/get_all")
async def get_all():
    result = db_get_names()

    return result


@app.post("/button-click")
async def button_click(obj: ObjectRequest):
    response = db_get_info(obj.name)

    return {
            "name": response[1],
            "country": response[2],
            "longitude": response[3],
            "latitude": response[4]
            }