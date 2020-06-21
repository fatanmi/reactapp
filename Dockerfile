FROM node:alpine as builder

WORKDIR /app

COPY package.json .

RUN npm install
COPY . .
RUN npm run build

FROM nginx

RUN rm /usr/share/nginx/html/*
COPY /default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx
CMD ["nginx", "-g", "daemon off;"]