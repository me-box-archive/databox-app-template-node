FROM node:alpine

ADD . .
RUN npm install

LABEL databox.type="app"

#EXPOSE 8080

CMD ["npm","start"]
