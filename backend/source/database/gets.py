from sqlite3 import connect

from io import BytesIO
from fastapi.responses import  StreamingResponse

from database.config import DB_NAME, TABLE_NAME

def db_get_all_info_about_obj(name: str):
        connection = connect(DB_NAME)
        cursor = connection.cursor()

        cursor.execute(f'SELECT * FROM {TABLE_NAME} WHERE name = \"{name}\"')
        city = cursor.fetchall()[0]

        connection.commit()
        connection.close()

        return list(city)

def db_get_main_info_about_all():
    connection = connect(DB_NAME)
    cursor = connection.cursor()

    cursor.execute(f'''
        SELECT id, name 
        FROM {TABLE_NAME}
    ''')
    result = cursor.fetchall()

    connection.close()

    return result

def db_get_image(id: int):
    connection = connect(DB_NAME)
    cursor = connection.cursor()

    cursor.execute(f"SELECT image FROM {TABLE_NAME} WHERE id = {id}")
    result = cursor.fetchone()

    # Check result. If error throw HTTP Error 404 "Image not found"

    image_data = result[0]
    image_stream = BytesIO(image_data)

    connection.close()

    return StreamingResponse(image_stream, media_type="image/jpg")