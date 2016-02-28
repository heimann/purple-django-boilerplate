FROM python:3.5
ENV PYTHONUNBUFFERED 1

ADD requirements.txt /code/
ADD requirements/* /code/requirements/
RUN pip install -r requirements.txt
WORKDIR /code
