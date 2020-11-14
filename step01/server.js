var count = 0;

var fs = require('fs');
var http = require('http');

http.createServer(function(request, response) {
  fs.readFile('./count.txt', 'utf8', function(err, data){
    if ( !err ) count = parseInt(data);

    count = count + 1;
    fs.writeFileSync('./count.txt', count.toString());

    response.writeHead(200);
    response.end(count.toString());
  });
}).listen(8080);
