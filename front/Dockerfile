FROM node:current-alpine3.10

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH


COPY package.json ./
COPY yarn.lock ./

COPY public public
COPY src src
COPY .env .env
COPY tsconfig.json tsconfig.json

RUN yarn install

CMD ["yarn", "start"]