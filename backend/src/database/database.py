from sqlite3 import connect
from io import BytesIO
from fastapi.responses import  StreamingResponse

TABLE_NAME = "Donuts"
DB_NAME = "shop.db"

# def db_count_rows():
#     connection = connect('cities.db')
#     cursor = connection.cursor()
#
#     cursor.execute(f'''
#         SELECT COUNT(*)
#         FROM {TABLE_NAME}
#     ''')
#
#     result = int(cursor.fetchone()[0])
#
#     connection.commit()
#     connection.close()
#
#     return result

def db_get_object(name: str):
        connection = connect(DB_NAME)
        cursor = connection.cursor()

        cursor.execute(f'SELECT * FROM {TABLE_NAME} WHERE name = \"{name}\"')
        city = cursor.fetchall()[0]

        connection.commit()
        connection.close()

        return list(city)

def db_get_names():
    connection = connect(DB_NAME)
    cursor = connection.cursor()

    cursor.execute(f'''
        SELECT name
        FROM {TABLE_NAME}
    ''')

    names = cursor.fetchall()

    result = []
    for name in names:
        result.append(name[0])

    connection.commit()
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

    return StreamingResponse(image_stream, media_type="image/jpg")

    connection.close()