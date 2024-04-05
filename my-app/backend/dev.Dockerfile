FROM node:20

WORKDIR /usr/src/app

COPY --chown=node:node . .

ENV NODE_ENV=development
RUN npm install

ENV DEBUG=debug:*

USER node

CMD npm run dev