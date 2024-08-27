from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from models import ObjRequest
from database.gets import *
from config import DOMEN_NAME

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/images/{image_id}")
async def get_image(image_id: int):
    return db_get_image(image_id)


# get main data about all products
# Example output:
# [
#         {
#             "id": SAMPLE_ID,
#             "name": SAMPLE_NAME,
#             "image_url": SAMPLE_URL
#         },
#         {
#             "id": SAMPLE_ID_2,
#             "name": SAMPLE_NAME_2,
#             "image_url": SAMPLE_URL_2
#         },
#         ...
@app.get("/get-all")
async def get_all():
    result = []
    for sequence in db_get_main_info_about_all():
        obj = {
            "id": sequence[0],
            "name": sequence[1],
            "image_url": DOMEN_NAME + "/images/" + str(sequence[0])
        }
        result.append(obj)

    return result

# get all data about the product
# Example output:
# [
#         {
#             "id": SAMPLE_ID,
#             "name": SAMPLE_NAME,
#             "images_url": [SAMPLE_FILES, ...]
#         },
#         {
#             "id": SAMPLE_ID_2,
#             "name": SAMPLE_NAME_2,
#             "images_url": [SAMPLE_FILES_2, ...]
#         },
#         ...
@app.post("/get-obj")
async def get_obj(obj: ObjRequest):
    response = db_get_all_info_about_obj(obj.name)

    return {
            #return cinnabon data
            }
