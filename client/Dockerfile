FROM node:12

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY package.json yarn.lock ./

RUN yarn

COPY ./ ./

CMD ["yarn", "start"]
