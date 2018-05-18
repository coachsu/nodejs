const file = require('fs')

file.readFile('./hello.txt', function(err, data) {
    if(err) throw err
    console.log(data.toString())	
})

console.log('Reading file ...')

