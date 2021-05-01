FROM node:14.5-alpine as builder

WORKDIR /app

COPY package.json package-lock.json ./app/

# disabling ssl for npm for Dev or if you are behind proxy
RUN npm set strict-ssl false

RUN npm install -g @angular/cli@latest

RUN cd ./app && npm ci

COPY . ./app/

RUN cd ./app && npm install

RUN cd ./app && ng build --prod=true

RUN ls -l ./app/dist

RUN mv ./app/server ./app/dist/

RUN cd ./app/dist/server && npm i

EXPOSE 4000

CMD ["node", "./app/dist/server/front/index.js"]