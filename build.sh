#!/usr/bin/env bash

cd front-end-app
ng build --prod
cd ../backend-adman
rm -rf dist
mkdir dist
cd dist
mkdir front-end-app
cd ../../
cp -a front-end-app/dist/front-end-app/. backend-adman/dist/front-end-app
cd backend-adman
node server.js