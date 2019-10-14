const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const schedule = require('node-schedule');
const notificationService = require('./services/NotificationService');
const cors = require('cors');
const jwt = require('./utils/jwt');
const config = require('./config');
const errorHandler = require('./utils/ErrorHandler');

const start = async () => {

    try {
        const app = express();
        const port = 3000;
        app.use(routes);
        app.use(jwt());
        app.use(errorHandler);
        app.listen(port, () => console.log(`Example app listening on port ${port}!`));
        mongoose
            .connect(process.env.MONGODB_URI || config.mongo,{ useCreateIndex: true, useNewUrlParser: true } )
            .then(() => console.log('MongoDB connected...'))
            .catch(err => console.log(err));
        // schedule.scheduleJob('* * * * *', notificationService.run);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }

};

start();

// // Loop over each route
// routes.forEach((route, index) => {
// 	fastify.route(route)
// });

// Run the server!
// const start = async () => {
// 	try {
// 		await fastify.listen(3000, '0.0.0.0');
// 		fastify.swagger();
// 		fastify.log.info(`server listening on ${fastify.server.address().port}`)
// 		schedule.scheduleJob('* * * * *', notificationService.run);
// 	} catch (err) {
// 		fastify.log.error(err);
// 		process.exit(1)
// 	}
// };
// start();
