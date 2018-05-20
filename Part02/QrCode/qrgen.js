var qr = require('qrcode')
 
qr.toFile('./qr.png', process.argv[2], (err)=> {
	if(err) throw err
	console.log('Successfully generate ./qr.png for ' + process.argv[2])
})
