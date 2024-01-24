FROM node:20-alpine

WORKDIR /back-end

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npx", "tsx","src/index.ts"]
