import sqlite3
from classes import City

TABLE_NAME = "Cities"

def db_init():
        connection = sqlite3.connect('cities.db')
        cursor = connection.cursor()
        
        cursor.execute(f'''
                CREATE TABLE IF NOT EXISTS {TABLE_NAME} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NO NULL,
                country TEXT NO NULL,
                longitude TEXT NO NULL,
                latitude TEXT NO NULL
                
        ''')

        connection.commit()
        connection.close()

def db_insert_data():
        connection = sqlite3.connect('cities.db')
        cursor = connection.cursor()

        London = City(name="London",
                      country="England",
                      longitude='''51°30'26"N''',
                      latitude='''0°7'39"W''')

        Paris = City(name="Paris",
                      country="France",
                      longitude='''48°51'24″N''',
                      latitude='''2°21'8″E''')

        Berlin = City(name="Berlin",
                      country="Germany",
                      longitude='''52°31'12″N''',
                      latitude='''13°24'18″E''')

        Rome = City(name="Rome",
                      country="Italy",
                      longitude='''41°53'36″N''',
                      latitude='''12°28'58″E''')

        Cities = [Rome, Berlin, Paris, London]

        for city in Cities:
                cursor.execute(f'''
                        INSERT INTO {TABLE_NAME} (name, country, longitude, latitude)
                        VALUES (?, ?, ?, ?)
                ''', 
                (city.name, city.country, city.longitude, city.latitude)
                )

        connection.commit()
        connection.close()

def db_get_info(city_name: str):
        connection = sqlite3.connect('cities.db')
        cursor = connection.cursor()

        cursor.execute(f'SELECT * FROM Cities WHERE name = \"{city_name}\"')
        city = cursor.fetchall()[0]

        connection.commit()
        connection.close()

        return list(city)

def db_count_rows():
    connection = sqlite3.connect('cities.db')
    cursor = connection.cursor()

    cursor.execute(f'''
        SELECT COUNT(*)
        FROM {TABLE_NAME}
    ''')

    result = int(cursor.fetchone()[0])

    connection.commit()
    connection.close()

    return result

def db_get_names():
    connection = sqlite3.connect('cities.db')
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
