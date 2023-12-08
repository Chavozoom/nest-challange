FROM node:20-slim

WORKDIR /home/node/app

RUN npm install -g @nestjs/cli@10.1.17
RUN npm install -g typescript

RUN apt-get update -y && apt-get install -y openssl

COPY package*.json .
RUN npm install
COPY . .

USER node

CMD [ "npm", "run", "start:dev" ]