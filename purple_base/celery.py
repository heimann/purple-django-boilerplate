import os
from celery import Celery
from django.conf import settings

# Indicate Ceelery to use the default settings module
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'purple_base.settings.base')

app = Celery('purple_base')
app.config_from_object('django.conf:settings')

# This line will tell Celery to autodiscover all your tasks.py that are in your app folders
app.autodiscover_tasks(lambda: settings.INSTALLED_APPS)
