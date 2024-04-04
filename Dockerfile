FROM node:18-alpine

WORKDIR /app-xl

COPY . .

RUN npm i

CMD ["node", "build/src/index.js"]

EXPOSE 3001
