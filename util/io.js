const fs = require('fs');

exports.io = {
    getFileContents: (path) => {
        if(!fs.existsSync(path))
            throw new Error(`File '${path}' not found`);
        if(!fs.statSync(path).isFile())
            throw new Error(`${path} is a directory, not a file`);
        return fs.readFileSync(path).toString();
    }
}