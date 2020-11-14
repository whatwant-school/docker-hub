$ curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

$ sudo apt-get install -y nodejs

$ node server.js

http://localhost:8080

$ docker build -t whatwant/count:v1 .

$ docker images

$ docker run -d -p 80:8080 whatwant/count:v1

http://localhost
