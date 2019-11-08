FROM node:12

RUN mkdir -p /usr/client
WORKDIR /usr/client

COPY package.json yarn.lock ./

RUN yarn

COPY ./ ./

CMD ["yarn", "start"]
