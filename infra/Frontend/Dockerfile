FROM node:alpine

WORKDIR /usr/app

COPY . /usr/app/

RUN npm install

EXPOSE 5137

CMD ["npm", "run", "dev"  ]
# CMD ["npm", "start"  ]