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

RUN ls -l

RUN cp ./app/server/index.js ./app/dist/

RUN cp ./app/server/package.json ./app/dist/

RUN cd ./app/dist && npm i

FROM node:12

COPY --from=builder /app /app

WORKDIR /app
# Expose the port the app runs in
EXPOSE 4000

CMD ["node", "dist/front/index.js"]