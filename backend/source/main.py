from fastapi import FastAPI, Depends, HTTPException, status, Request

from models import ObjRequest, LoginData

from database.gets import (db_get_image,
                           db_get_main_info_about_all)

from config import DOMEN_NAME, admin

app = FastAPI()

# Add session middleware to manage login
from starlette.middleware.sessions import SessionMiddleware
app.add_middleware(SessionMiddleware, secret_key="12345")

from fastapi.middleware.cors import CORSMiddleware
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


#
# Admin authentication
#

# Logging
@app.post("/admin/login")
async def admin_login(request: Request, login_data: LoginData):
    if login_data.login == admin["login"] and login_data.password == admin["password"]:
        request.session["is_admin"] = True
        return {
            "msg": "Login successful"
        }
    else:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid login/password")

# Check whether logged admin is
def admin_required(request: Request):
    if not request.session.get("is_admin"):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Unauthorized")

# Not necessary. Get access to admin panel aka Dashboard
@app.get("/admin/dashboard", dependencies=[Depends(admin_required)])
async def admin_dashboard():
    return {
        "msg": "Welcome to the admin dashboard!"
    }

# Function for admins only
@app.post("/admin/insert", dependencies=[Depends(admin_required)])
async def insert_data(data: ObjRequest):
    return {
        "msg": "Data inserted successfully",
        "name": data.name
    }

# Logging out
@app.post("/admin/logout")
async def admin_logout(request: Request):
    request.session.clear()
    return {
        "msg": "Logged out successfully"
    }
