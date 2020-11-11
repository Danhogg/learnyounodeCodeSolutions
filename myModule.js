const fs = require('fs')
const path = require('path')

module.exports = function(directName, ext, callback) {
    const fileEnding = '.' + ext
    fs.readdir(directName, function(err, data) {
        if (err) {
            callback(err, null)
        }
        else {
            const fileResults = [] 
            data.forEach(function(item) {
                if (path.extname(item) === fileEnding) {
                    fileResults.push(item)
                }
            })
        callback(null, fileResults)
        }
    })
}