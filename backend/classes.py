from pydantic import BaseModel

class ObjectRequest(BaseModel):
        name: str

class City(BaseModel):
        name: str
        country: str
        longitude: str
        latitude: str