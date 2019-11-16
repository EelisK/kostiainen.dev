FROM node:12 as client_build
WORKDIR /client
COPY client/package.json client/yarn.lock ./
RUN yarn
COPY client/ ./
RUN yarn build

FROM node:12 as server_build
WORKDIR /server
COPY server/package.json server/yarn.lock ./
RUN yarn
COPY server/ ./
COPY --from=client_build /client /client
EXPOSE ${PORT}
CMD ["yarn", "start"]
