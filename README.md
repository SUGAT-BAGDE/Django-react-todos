
# Django Todo App with react as frontend

This is the project in which we I am using react on frontend and django on backend



## Installation

Use these command to run the server

```powershell
  python manage.py runserver
```
    
## Deployment

To deploy this project run

```bash
  gunicorn djreact.wsgi
```

  
## Run Locally

Clone the project

```bash
  git clone git@github.com:SUGAT-BAGDE/django-react-todo.git
```

Or

```bash
  git clone https://github.com/SUGAT-BAGDE/django-react-todo.git
```

Go to the project directory

```bash
  cd djreact
```

Install dependencies

```bash
  pip install -r requirements.txt
```

To use static files in production

```bash
  pip install -r requirements.txt
```

Start the server

```bash
  python manage.py runserver
```

You can specify port to run on as below using port 80

```bash
  python manage.py runserver 80
```

  