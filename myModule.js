const fs = require('fs')
const { pathToFileURL } = require('url')

module.exports = function(directName, ext, callback) {
    const fileEnding = '.' + ext
    fs.readdir(directname, function(err, data) {
        if (err) {
            console.log(err)
        }
        else {
            fileResults = [] 
            data.forEach(function(item) {
                if (path.extname(item) === fileEnding) {
                    fileResults.push(path(item))
                }
            })
        callback(null, fileResults)
        }
    })
}