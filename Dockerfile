FROM node:8.11-slim

RUN mkdir -p /app
WORKDIR /app
COPY . /app

CMD npm run start --scripts-prepend-node-path=auto
