FROM node:current-alpine3.10

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH


COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY public public
COPY src src
COPY tsconfig.json tsconfig.json


CMD ["yarn", "start"]