var fs = require('fs');
var path = require('path');

module.exports = function printDir(dir, ext, cb) {
    fs.readdir(dir, function(err, files) {
        if (err) return cb(err);

        var filteredFiles = files.filter(function(file) {
            return path.extname(file) === '.' + ext;
        });

        cb(null, filteredFiles);
    });
};
