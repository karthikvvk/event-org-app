import os, threading

def npm():
    os.system("npm run dev")
threading.Thread(target=npm).start()

#os.system("python manage.py flush")
os.system("del db.sqlite3")
os.system("python manage.py makemigrations")
os.system("python manage.py migrate")
os.system("python manage.py runserver")