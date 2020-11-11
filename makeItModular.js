const myModule = require('./myModule.js')

const myFile = process.argv[2]
const myExtension = process.argv[3]

myModule(myFile, myExtension, function(err, data) {
    for (let i = 0; i < data.length; i++) {
        console.log(data[i])
    }
})