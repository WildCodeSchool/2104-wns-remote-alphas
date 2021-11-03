FROM node:14.17.3-alpine

RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN yarn
COPY tsconfig.json tsconfig.json
COPY ./src ./src
COPY ./fixtures ./fixtures
CMD yarn dev