FROM node:14.1-alpine as build
WORKDIR /app
COPY /app /app
RUN npm install
RUN REACT_APP_API_HOST_NAME=http://localhost:8081 npm run build
RUN npm install -g serve
CMD serve -s build -l 8086
# FROM nginx:alpine
# COPY --from=build /app/build /usr/share/nginx/html
# RUN rm /etc/nginx/conf.d/default.conf
# COPY nginx/nginx.conf /etc/nginx/conf.d
# EXPOSE ${DOCKER_NGINX_PORT:-80}
# CMD ["nginx", "-g", "daemon off;"]