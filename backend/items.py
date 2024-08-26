from pydantic import BaseModel

class Item(BaseModel):
        name: str
        price: int
        description: str

class City(BaseModel):
        name: str
        country: str
        longitude: str
        latitude: str