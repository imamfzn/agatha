FROM node:14.15-alpine3.13

ENV NODE_ENV=production

WORKDIR agatha

COPY . ./

RUN npm install

EXPOSE 8000

CMD [ "npm", "start" ]
