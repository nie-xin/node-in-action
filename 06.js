var printDir = require('./printDir');

var dir = process.argv[2];
var ext = process.argv[3];
printDir(dir, ext, function(err, files) {
    if (err) throw err;

    files.forEach(function(file) {
        console.log(file);
    })
});