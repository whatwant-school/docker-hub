FROM node:latest

MAINTAINER whatwant <whatwant@whatwant.com>

RUN mkdir -p /app
WORKDIR /app
ADD server.js /app

EXPOSE 8080
CMD ["node", "server.js"]
