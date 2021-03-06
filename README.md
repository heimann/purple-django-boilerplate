Django Base Project
===================

This is the Django starter project I use. It is optimized for [Docker Compose](https://docs.docker.com/compose/) use in development and to deploy on Heroku.

WIP.

## Getting Started

### Step 1
First and foremost, create a .gitignore file and make sure to place
.env in there. That's where you're going to have all your environment
variables. **DO THIS BEFORE YOU DO ANYTHING ELSE**.

### Step 2
Change the name of the app. Do a find-all and replace purple_base
with whatever name you want for the app. Make sure not to miss any
references.

## Utilities

### Development
This repo uses docker for development. Make sure you have the [docker-toolbox](https://www.docker.com/products/docker-toolbox) installed.

Set up a new docker-machine to use for development.
```
$ docker-machine create --driver virtualbox machine-name
```

Create a data partition in order to make all changes on the machine persistent.
```
$ docker-machine ssh machine-name
$ sudo su
$ mkdir /data
$ echo 'ln -sfn /mnt/sda1/data /data' >> /var/lib/boot2docker/bootlocal.sh
```

Make your new docker-machine the active unit.
```
$ eval "$(docker-machine env machine-name)"
```

Get the IP Address of your machine, this is where you'll find your Django dev server.
```
$ docker-machine ip machine-name
```

To get everything up and running just run:
```
$ docker-compose up
```

That's it. You can now find your django dev server running at the IP Address you found using docker-machine ip.

### SASS
Sass stuff goes here.

## Resources

[cookiecutter-django docker instructions](https://cookiecutter-django.readthedocs.org/en/latest/developing-locally-docker.html)

[Real Python - Django Development with Docker Compose and Machine](https://realpython.com/blog/python/django-development-with-docker-compose-and-machine/)

[howchoo - Getting Started with Docker, Compose and Django](https://howchoo.com/g/y2y1mtkznda/getting-started-with-docker-compose-and-django)

[Docker compose and Django - Also has Celery + RabbitMQ integration](http://damdev.me/docker/2015/10/28/docker-compose-django.html)

[gulp-sass](https://github.com/dlmanning/gulp-sass)


[Celeryproject - First Steps with Django](http://docs.celeryproject.org/en/latest/django/first-steps-with-django.html)

[Docker - Quickstart: Compose and Django](https://docs.docker.com/compose/django/)

[Calazan.com - Using Docker and Docker Compose for local Django development (replacing virtualenv)](https://www.calazan.com/using-docker-and-docker-compose-for-local-django-development-replacing-virtualenv/)

... and more.
