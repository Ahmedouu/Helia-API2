const fs = require('fs');



function checkFileExists(filepath) {
    return fs.existsSync(filepath);
}

function readFileContent(filepath) {
    if(checkFileExists(filepath)) {
        let fileContents = fs.readFileSync(filepath);
        return fileContents
    } else {
        return('file does not exist')
    }
}
module.exports = {readFileContent}