FROM node:16-alpine
RUN npm install -g nodemon
WORKDIR /app
COPY . .
EXPOSE 3001
RUN npm install
CMD ["nodemon","index.js"]