module.exports = {
    getRequestID(req) {
        return req.params === undefined ? req.id : req.params.id;
    },
    getRequestBody(req) {
        return req.body === undefined ? req : req.body;
    },
    getRequestParams(req) {
        return req.params === undefined ? req : req.params;
    }
};
