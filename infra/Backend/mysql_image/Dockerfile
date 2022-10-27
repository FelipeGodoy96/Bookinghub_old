FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=DigitalHouse2022
ENV MYSQL_DATABASE=ecommerce
ENV MYSQL_USER=admin
ENV MYSQL_PASSWORD=DigitalHouse2022

VOLUME [ "/var/lib/mysql" ]

COPY ./db/ /docker-entrypoint-initdb.d/