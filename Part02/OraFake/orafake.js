const ora = require('ora')

const spinner = ora('Earn 10 bucks if waiting for 10 seconds ...').start();

setTimeout(() => {
    spinner.color = 'red';
    spinner.text = 'Ha, don\'t be silly! [Press crtl + c to exit]';
}, 10000);
