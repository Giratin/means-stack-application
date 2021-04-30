# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:12 as build

# Set the working directory
WORKDIR /usr/app

RUN npm i -g @angular/cli@11.2.6

# Add the source code to app
COPY . .

# Install all the dependencies
RUN npm install

CMD ng serve --host 0.0.0.0
# Generate the build of the application
#RUN ng build --prod=true

# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
#FROM nginx:latest

# Copy the build output to replace the default nginx contents.
#COPY --from=build /usr/app/dist/front /usr/share/nginx/html
#COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port 80
#EXPOSE 80