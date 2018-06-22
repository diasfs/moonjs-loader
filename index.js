//jshint esversion:6
const Moon = require('moonjs');

module.exports = function(source) {
	var fn = Moon.compile(source).toString();

	return `
		import Moon from 'moonjs';
		export default ${ fn }
	`;
};