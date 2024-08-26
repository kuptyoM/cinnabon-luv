from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

from database import db_get
from items import City

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class CityRequest(BaseModel):
    name: str

@app.post("/button-click")
async def button_click(city_request: CityRequest):

    response = db_get(city_request.name)

    return {
            "name": response[1],
            "country": response[2],
            "longitude": response[3],
            "latitude": response[4]
            }