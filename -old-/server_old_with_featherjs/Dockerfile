FROM node:20

WORKDIR /usr/src/app

ENV NODE_ENV=production

COPY package.json .

RUN npm install

COPY . .

RUN npm run compile

RUN npm run migrate

EXPOSE 3030

CMD [ "npm", "start" ]
