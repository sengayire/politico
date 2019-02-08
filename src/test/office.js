/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import '@babel/polyfill';
import app from '../app';

chai.should();

chai.use(chaiHttp);

// Test error 404
describe('Error 404 test', () => {
  it('return error', (done) => {
    chai.request(app)
      .post('/notexist')
      .send({
        id: 1,
        type: 'hq',
        name: 'kagugu',
      })
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});

// test that it create political office
describe('should create a political office', () => {
  it('create an office', (done) => {
    chai.request(app)
      .post('/api/v1/offices')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('message');
        res.body.should.be.a('object');
        done();
      });
  });
});
