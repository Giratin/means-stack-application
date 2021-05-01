FROM node:14.5-alpine as builder

RUN npm install -g @angular/cli@latest

# disabling ssl for npm for Dev or if you are behind proxy
RUN npm set strict-ssl false

COPY . .

RUN  npm install

RUN ng build --prod=true

RUN mv ./server ./dist/

RUN cd ./dist/server && npm i

EXPOSE 4000

RUN ls -R

CMD ["node", "./dist/server/index.js"]