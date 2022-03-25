# build stage
FROM node:lts-alpine as build-stage
ARG VITE_PROJECT_SERVER_HOST="/zracni-udar-service"
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]