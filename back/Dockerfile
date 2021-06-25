FROM node:alpine

RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN yarn
COPY tsconfig.json tsconfig.json
COPY ./src ./src
CMD yarn dev