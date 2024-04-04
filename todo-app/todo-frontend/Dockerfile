FROM node:20

WORKDIR /usr/src/app

COPY . .

RUN npm ci

# Run tests
RUN npm run test

RUN npm run build

CMD [ "npm", "run", "preview" ]