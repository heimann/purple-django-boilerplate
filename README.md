Purple Base Project
===================

This is the Django starter project I use. It is optimized for [Docker Compose](https://docs.docker.com/compose/ use in development and to deploy on Heroku.

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
docker-machine create --driver virtualbox *dev1*
```

Get the IP Address of your machine, this is where you'll find your Django dev server.
```
docker-machine ip *dev1*
```

To get everything up and running just run:
```
docker-compose up
```

That's it. You can now find your django dev server running at the IP Address you found using docker-machine ip.

### SASS
Sass stuff goes here.

## References
(cookiecutter-django)[]
(cookiecutter-simple-django)[]
(cookiecutter-django docker instructions)[https://cookiecutter-django.readthedocs.org/en/latest/developing-locally-docker.html]
... and more.
