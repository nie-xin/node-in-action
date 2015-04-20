var bl = require('bl');
var http = require('http');

http.get(process.argv[2], function(response) {
  response.pipe(bl(function(err, data) {
    if (err) console.error(err);
    console.log(data.toString());
  }));
  http.get(process.argv[3], function(response) {
    response.pipe(bl(function(err, data) {
      if (err) console.error(err);
      console.log(data.toString());
    }));
    http.get(process.argv[4], function(response) {
      response.pipe(bl(function(err, data) {
        if (err) console.error(err);
        console.log(data.toString());
      }));
    });
  });
});
