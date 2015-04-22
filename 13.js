var http = require('http');
var url = require('url');

server = http.createServer(function (req, res) {
  if (req.method != 'GET') return res.error('You should send me a GET\n');

  var response = route(req.url);
  var json = JSON.stringify(response);
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(json);
});
server.listen(process.argv[2]);

function route(reqUrl) {
  var parse = url.parse(reqUrl, true);
  var res = {};
  switch (parse.pathname) {
    case '/api/parsetime':
      res = parsetimeIso(parse.query);
      break;
    case '/api/unixtime':
      res = parsetimeUnix(parse.query);
      break;
    default:
      console.error('Unknown route');
  }

  return res;
}

function parsetimeIso(query) {
  var date = new Date(query.iso);
  return {
    'hour': date.getHours(),
    'minute': date.getMinutes(),
    'second': date.getSeconds()
  };
}

function parsetimeUnix(query) {
  return {'unixtime': Date.parse(query.iso)};
}
