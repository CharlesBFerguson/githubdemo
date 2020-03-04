/*
Exercise cmd
(/)	- Create a Javascript file and load it to your command line tool (cmd || powershell || terminal || git bash)
(/)	- Create a second Javascript file and call it from the first file using exports
*/

const cmdLink = require('./cmd_link');
cmdLink.on('ready', () => {
    console.log('module "cmd_link" is ready');
});


function sayHello(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName}`);
}

sayHello('Chuck', 'Ferguson');