from database import db_init, db_get, db_add_data
from pydantic import BaseModel

class CityRequest(BaseModel):
    name: str

def aget(name: CityRequest):
        response = db_get(name.name)

        return {
            "name": response[1],
            "country": response[2],
            "longitude": response[3],
            "latitude": response[4]
            }


print(aget("London"))