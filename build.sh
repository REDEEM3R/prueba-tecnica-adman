#!/usr/bin/env bash
npm install
cd frontend-adman
npm install
ng build --prod
cd ../backend-adman
npm install
rm -rf dist
mkdir dist
cd dist
mkdir frontend-adman
cd ../../
cp -a frontend-adman/dist/front-end-app/. backend-adman/dist/front-end-app
cd backend-adman
node server.js