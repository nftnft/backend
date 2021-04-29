FROM node:16.0.0-alpine3.13

WORKDIR /project
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "run", "start:dev"]
