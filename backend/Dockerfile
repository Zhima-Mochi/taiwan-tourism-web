
FROM python:3.8

COPY ./requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /app/requirements.txt
WORKDIR /app
CMD uvicorn main:app --host 0.0.0.0 --port $PORT
# CMD gunicorn main:app --workers $PROCESS_NUM --worker-class uvicorn.workers.UvicornWorker --bind 0.0.0.0:8080