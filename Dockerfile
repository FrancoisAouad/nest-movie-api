FROM node:alpine
WORKDIR /user/app/src
COPY package*.json .
RUN npm i
COPY . .
CMD ["npm","start"] 