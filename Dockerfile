FROM node:20-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

COPY .next ./.next

CMD [ "npm", "run", "dev"]
