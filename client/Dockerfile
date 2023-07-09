FROM node:20-alpine AS alpine

WORKDIR /usr/src/app

COPY . .

# RUN apt-get update && apt-get upgrade -y && \
#     apt-get install -y nodejs \
#     npm

RUN npm install


# RUN npm build
CMD ["npm", "start"]  