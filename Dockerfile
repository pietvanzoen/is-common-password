FROM node:12-alpine

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN yarn install --frozen-lockfile

COPY . /app

RUN yarn build

ENV NODE_ENV production
RUN yarn install # clean dev dependencies

EXPOSE 3000
CMD [ "yarn", "start" ]
