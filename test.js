const fs = require('fs');

function checkFileExists(filepath) {
    return fs.existsSync(filepath);
}

function logFileContents(filepath) {
    if(checkFileExists(filepath)) {
        let fileContents = fs.readFileSync(filepath);
        return fileContents
    } else {
        return('file does not exist')
    }
}

// Test
let filepath = 'C:\\Users\\USER\\Helia-API2\\tesst.js';
console.log(logFileContents(filepath))
