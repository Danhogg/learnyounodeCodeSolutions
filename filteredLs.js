const fs = require('fs')

const fileEnding = process.argv[3]

function readData(err, data) {
    if (err) {
        console.log(err)
    } 
    else {
        for (let i = 0; i < data.length; i++) {
            let fileType = data[i].split('.')[1]
            if (fileType === fileEnding) {
                console.log(data[i])
            }
        }
    }
}

const fileInDir = fs.readdir(process.argv[2], readData)
