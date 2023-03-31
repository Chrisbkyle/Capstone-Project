FROM node:16
WORKDIR /server
COPY . /server/
RUN npm run build

EXPOSE 3001

CMD nodemon index