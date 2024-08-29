from pydantic import BaseModel

class ObjRequest(BaseModel):
        name: str

class User(BaseModel):
        login: str
        password: str