FROM node:18-alpine

WORKDIR /app

COPY package.json ./
# If package-lock exists copy it, otherwise just package.json. 
# Since we manually created package.json, we don't have lock file yet. 
# RUN npm install will generate one.
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
