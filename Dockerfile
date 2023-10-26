FROM nginx:1.25.2-alpine3.18

WORKDIR /usr/share/nginx/html

RUN wget -q -O honey.zip https://github.com/dani3l0/honey/releases/download/v2.1.1/honey-v2.1.1-stable.zip && unzip -q -o honey.zip && rm honey.zip

EXPOSE 80

HEALTHCHECK CMD wget -nv --spider --tries=1 http://127.0.0.1:80
