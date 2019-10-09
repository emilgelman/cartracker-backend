const fastify = require('fastify')({
	logger: true
});

const mongoose = require('mongoose');

mongoose
	.connect('mongodb://localhost/mycargarage')
	.then(() => console.log('MongoDB connected...'))
	.catch(err => console.log(err));

module.exports = fastify;
