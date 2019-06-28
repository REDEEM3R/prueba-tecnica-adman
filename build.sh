#!/usr/bin/env bash

cd frontend-adman
ng build --prod
cd ../backend-adman
rm -rf dist
mkdir dist
cd dist
mkdir frontend-adman
cd ../../
cp -a frontend-adman/dist/front-end-app/. backend-adman/dist/front-end-app
cd backend-adman
node server.js