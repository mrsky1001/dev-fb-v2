# specify the node base image with your desired version node:<version>
FROM node:18 AS build
WORKDIR /app
COPY app/package.json package.json
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:1.19-alpine
COPY --from=build /app/dist /opt/site
COPY nginx.conf /etc/nginx/nginx.conf