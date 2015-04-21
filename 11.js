var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request,response) {
  var readStream = fs.createReadStream(process.argv[3]);
  readStream.on('open', function() {
    readStream.pipe(response);
  });

  readStream.on('error', function(err) {
    res.end(err);
  });
});

server.listen(Number(process.argv[2]));
