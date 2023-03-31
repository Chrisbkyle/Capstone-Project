FROM node.16
WORKDIR /client
COPY . /client/

RUN npm run build
EXPOSE 3000

CMD npm start