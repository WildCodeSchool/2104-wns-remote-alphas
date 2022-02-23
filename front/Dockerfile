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


FROM cypress/included:9.5.0

WORKDIR /app

RUN yarn install

COPY cypress ./
COPY cypress.json cypress.json

CMD ["yarn", "run", "record:ecs"]
