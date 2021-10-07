#!/bin/sh
echo "PORT=$PORT"
git fetch origin && git reset --hard origin/main && git clean -f -d
GATEWAY_PORT=$PORT docker-compose -f docker-compose-prod.yml up --build -d