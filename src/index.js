const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const schedule = require('node-schedule');
const notificationService = require('./services/NotificationService');
const cors = require('cors');
const jwt = require('./utils/jwt');
const config = require('./config');
const errorHandler = require('./utils/ErrorHandler');
const bodyParser = require('body-parser');

const start = async () => {

    try {
        const app = express();
        const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 3000;
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        app.use(cors());
        app.use(routes);
        app.use(jwt());
        app.use(errorHandler);
        app.listen(port, () => console.log(`Example app listening on port ${port}!`));
        mongoose
            .connect(process.env.MONGODB_URI || config.mongo,{ useCreateIndex: true, useNewUrlParser: true } )
            .then(() => console.log('MongoDB connected...'))
            .catch(err => console.log(err));
        schedule.scheduleJob('*/30 * * * *', notificationService.run);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }

};

start();
