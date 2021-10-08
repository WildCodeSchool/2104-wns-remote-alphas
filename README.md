![workflow](https://github.com/WildCodeSchool/2104-wns-remote-alphas/actions/workflows/ci.yml/badge.svg)

Masterize is à POC for an accessible e-learning application, displaying a text integral version of the student’s courses in a weekly timeline. It provides full support for screen readers and keyboard navigation.

# Quick Setup

## Install dependancies

If you just cloned the repo, don't forget do `yarn` in the front and back folders before trying to launch the app. Warning : don't "yarn" in the root folder !
You'll need the .env files.

## Launch app (without Docker)

To start both the server and the UI, open the front folder and write the following command :
`yarn start`

## Launch app (with Docker)

Launch docker compose in dev mode with the following command :
`docker-compose -f docker-compose.dev.yml up --build`

## Stop containers

To stop the containers from the command line :
`docker-compose down`

test CI BUG
