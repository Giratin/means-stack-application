FROM node:12

RUN npm set strict-ssl false

WORKDIR /usr/server

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm","run","start"]