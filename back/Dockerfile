FROM node:alpine

RUN mkdir /app
WORKDIR /app

COPY package*.json ./
RUN yarn install
COPY src src

CMD yarn dev