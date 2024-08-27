from pydantic import BaseModel

class Donut(BaseModel):
    name: str
    image: str