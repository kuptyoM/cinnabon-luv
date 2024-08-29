from pydantic import BaseModel

class ObjRequest(BaseModel):
        name: str

class LoginData(BaseModel):
        login: str
        password: str