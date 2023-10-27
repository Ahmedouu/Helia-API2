const fs = require('fs');
const path = require('path');

let found = false;

function findFiles(dir, filename, callback) {
    if (found) return;
    fs.readdir(dir, function(err, items) {
        if (err) {
            return callback(err);
        }
        items.forEach(function(item) {
            if (found) return;
            var fullPath = path.join(dir, item);
            fs.stat(fullPath, function(err, stat) {
                if (err) {
                    return callback(err);
                }
                if (stat.isDirectory()) {
                    findFiles(fullPath, filename, callback);
                } else if (stat.isFile() && path.basename(fullPath) === filename) {
                    found = true;
                    callback(null, fullPath);
                }
            });
        });
    });
}

findFiles('/path/to/start', 'filename', function(err, fullPath) {
    if (err) {
        console.error(err);
    } else {
        console.log(fullPath);
    }
});
