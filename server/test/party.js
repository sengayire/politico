import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

const should = chai.should();
chai.use(chaiHttp);

// Test error 404
describe('Error 404 test', () => {
  it('should return error', (done) => {
    chai.request(app)
      .post('/notexist')
      .send({
        logoUrl: 'hiensisss',
        createdDate: 23456,
        modifiedDate: 2345,
      })
      .end((err, res) => {
        res.should.have.status(404);
        res.should.be.a('object');
        done();
      });
  });
});
