const cmd = require('node-cmd')
var usrcmd = (process.argv[2]) ? process.argv[2] : 'pwd'

cmd.get(usrcmd, (err, data, stderr) => {
		if(err) throw err
		console.log('ExeCmd Result:\n' + data)
	}
)
