FROM node:12

ENV PORT 3000

WORKDIR /usr/app

COPY package.json yarn.lock ./

RUN yarn

COPY ./ ./

EXPOSE 3000

CMD ["yarn", "start"]
