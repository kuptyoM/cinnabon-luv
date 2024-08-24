from fastapi import FastAPI
from fastapi_cors import CORS

app = FastAPI()

CORS(app)

@app.get("/items/{item_id}")
async def root(item_id):
    return {"item_id": int(item_id) + 1}