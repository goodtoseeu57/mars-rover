FROM node:14

WORKDIR /usr/src

COPY ["package.json", "tsconfig.json", "jest.config.ts", "package-lock.json*", "./"]

RUN npm install

COPY . .
