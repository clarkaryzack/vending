const assert = require("assert");
const app = require('../app');
var request = require('supertest')(app);

describe('GET /api/customer/items', function() {
    it('get a list of items', function(done) {
        request
            .get('/api/customer/items')
						.expect(200)
            .expect({})
						.end(done);

    });
});

describe('POST /api/customer/items/:itemId/purchases', function() {
    it('purchase an item', function(done) {
        request
            .get('/api/vendor/purchases')
            .expect({}, done);
    });
});


describe('GET /api/vendor/purchases', function() {
    it('get a list of all purchases with their item and date/time', function(done) {
        request
            .get('/api/vendor/purchases')
            .expect({}, done);
    });
});
