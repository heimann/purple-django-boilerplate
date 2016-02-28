web: gunicorn purple.wsgi:application
worker: python manage.py celery worker -B -l info
