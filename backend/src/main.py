from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from models import ObjectRequest
from database.database import *

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/download/{image_id}")
async def get_image(image_id: int):
    return db_get_image(image_id)

@app.get("/get-all")
async def get_all():
    result = db_get_names()

    return result


@app.post("/button-click")
async def button_click(obj: ObjectRequest):
    response = db_get_object(obj.name)

    return {
            #return cinnabon data
            }