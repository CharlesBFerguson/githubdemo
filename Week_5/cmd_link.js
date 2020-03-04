/*
Exercise cmd
(/)	- Create a Javascript file and load it to your command line tool (cmd || powershell || terminal || git bash)
(/)	- Create a second Javascript file and call it from the first file using exports
*/

const EventEmitter = require('events');

module.exports = new EventEmitter();

// Do some work, and after some time emit
// the 'ready' event from the module itself.
setTimeout(() => {
	function sayAge(age) {
			console.log(`You are ${age} years old.`);
	}
	
	sayAge('51');
	
	module.exports.emit('ready');
}, 1000);



