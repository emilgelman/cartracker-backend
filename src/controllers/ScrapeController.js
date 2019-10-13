const boom = require('boom');
const utils = require ('../utils');
// Get Data Models
const Alert = require('../models/Alert');
const Car = require('../models/Car');
const mongoose = require('mongoose');
const scrapeService = require('../services/ScrapeService');

// Get all cars for single alert
exports.scrape = async req => {
    try {
        return scrapeService.scrape();
    } catch (err) {
        throw boom.boomify(err)
    }
};
