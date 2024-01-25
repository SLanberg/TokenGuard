FROM node:20-alpine

WORKDIR /front-end

RUN yarn global add nodemon

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
