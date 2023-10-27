const fs = require('fs');
const path = require('path');
const os = require('os');

function searchForScript(scriptName, callback) {
    // Get the root directory based on the operating system.
    const rootDir = os.platform() === 'win32' ? 'C:\\' : '/';

    function search(dir) {
        fs.readdir(dir, (err, files) => {
            if (err) {
                return callback(err);
            }

            files.forEach(file => {
                const filePath = path.join(dir, file);

                fs.stat(filePath, (err, stats) => {
                    if (err) {
                        return callback(err);
                    }

                    if (stats.isDirectory()) {
                        // If it's a directory, recursively search it.
                        search(filePath);
                    } else if (file === scriptName) {
                        // If it's the script you're looking for, execute the callback.
                        callback(null, filePath);
                    }
                });
            });
        });
    }

    search(rootDir);
}

const scriptName = 'yourScript.js';

searchForScript(scriptName, (err, scriptPath) => {
    if (err) {
        console.error('Error:', err);
    } else {
        console.log('Script found at:', scriptPath);
    }
});
