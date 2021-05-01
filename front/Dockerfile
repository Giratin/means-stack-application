# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:12 as builder

WORKDIR /app

COPY package.json package-lock.json ./app

# disabling ssl for npm for Dev or if you are behind proxy
RUN npm set strict-ssl false

RUN npm ci

COPY . ./app

RUN npm install

RUN ng build --prod=true

RUN ls -l

RUN cp ./app/server/index.js ./app/dist/

RUN cp ./app/server/package.json ./app/dist/

RUN cd ./app/dist && npm ci

FROM node:12

COPY --from=builder /app /app

WORKDIR /app
# Expose the port the app runs in
EXPOSE 4000

CMD ["node", "dist/front/index.js"]