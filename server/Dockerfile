FROM node:12

WORKDIR /usr/app

COPY package.json yarn.lock ./

RUN yarn

COPY ./ ./

EXPOSE 8080

CMD ["yarn", "start"]
