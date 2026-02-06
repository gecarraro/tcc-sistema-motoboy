FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# gera prisma client dentro do container
RUN npx prisma generate

EXPOSE 8080

CMD ["node", "server.js"]