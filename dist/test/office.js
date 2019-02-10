"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

require("@babel/polyfill");

var _app = _interopRequireDefault(require("../app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable no-undef */
_chai["default"].should();

_chai["default"].use(_chaiHttp["default"]); // Test error 404


describe('Error 404 test', function () {
  it('return error', function (done) {
    _chai["default"].request(_app["default"]).post('/notexist').send({
      id: 1,
      type: 'hq',
      name: 'kagugu'
    }).end(function (err, res) {
      res.should.have.status(404);
      res.should.be.a('object');
      done();
    });
  });
}); // test that it create political office

describe('should create a political office', function () {
  it('create an office', function (done) {
    _chai["default"].request(_app["default"]).post('/api/v1/offices').end(function (err, res) {
      res.should.have.status(200);
      res.body.should.have.property('message');
      res.body.should.be.a('object');
      done();
    });
  });
}); // test that it get a specific political office by id

describe('fetch a specific political office by id', function () {
  it('should get a specific political office', function (done) {
    _chai["default"].request(_app["default"]).get('/api/v1/offices/id').end(function (err, res) {
      res.should.be.a('object');
      res.should.have.status(200);
      done();
    });
  });
});