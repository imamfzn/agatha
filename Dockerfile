FROM node:14.15-alpine3.13

WORKDIR agatha

COPY package*.json src ./

ENV NODE_ENV=production

RUN npm install

EXPOSE 8000

CMD [ "node", "app.js" ]
