FROM cypress/included:9.4.1

WORKDIR /app

COPY ./cypress ./cypress
COPY cypress.json cypress.json

RUN npx cypress open