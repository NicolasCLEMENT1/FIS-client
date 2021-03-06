FROM node:9-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY index.js .
COPY server.js .
COPY db.js .
COPY clients.js .
COPY auth.js .
COPY validations.js .
COPY .env .

EXPOSE 3000:3000

CMD npm start
