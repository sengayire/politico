import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

let userToken;
chai.use(chaiHttp);
chai.should();

describe('login user before access endpoint', () => {
  // sign in user
  it('login user', (done) => {
    const user = {
      email: 'psengayire@gmail.com',
      password: 'pw',
    };
    chai.request(app)
      .post('/api/v1/users/auth/signin')
      .send(user)
      .end((err, res) => {
        res.body.should.be.an('object');
        res.status.should.be.eql(200);
        res.body.should.have.property('status').equal(200);
        res.body.data[0].should.have.property('token');
        userToken = res.body.data[0].token;
        done();
      });
  });
});
describe('test party endpoints', () => {
      // create new  political office if not exist in database
  it('create new party', (done) => {
    const data = {
      name: 'MUSANZE',
      hqAddress: 'Kigali',
      logoUrl : 'logo',
    };
    chai.request(app)
      .post('/api/v1/parties/')
      .set('access-token', userToken)
      .send(data)
      .end((err, res) => {
        res.body.should.be.an('object');
        res.status.should.be.eql(200);
        res.body.should.have.property('message').equal('Party created successfuly');
        res.body.should.have.property('status').equal(200);
        done();
      });
  });

  // it should not create office if already exist
  it('fail to create new party if exist', (done) => {
    const data = {
      name: 'FPR',
      hqAddress: 'Kigali',
      logoUrl : 'logo',
    };
    chai.request(app)
      .post('/api/v1/parties/')
      .set('access-token', userToken)
      .send(data)
      .end((err, res) => {
        res.body.should.be.an('object');
        res.status.should.be.eql(409);
        res.body.should.have.property('error').equal('political party already exist');
        res.body.should.have.property('status').equal(409);
        done();
      });
  });

  // it should not create office if already exist
  it('should get all political party', (done) => {
    chai.request(app)
      .get('/api/v1/parties/')
      .end((err, res) => {
        res.status.should.be.eql(200);
        res.body.should.have.property('status').equal(200);
        res.body.should.have.property('status').equal(200);
        res.body.should.have.property('data');
        done();
      });
    });

    // it get single political party
    it('should get single political party', (done) => {
     chai.request(app)
       .get('/api/v1/parties/3262afbe-af5c-4ecd-a223-8228c6c667a0')
       .end((err, res) => {
         res.status.should.be.eql(200);
         res.body.should.have.property('status').equal(200);
         res.body.should.have.property('data');
         done();
       });
     });
// it delete a specific political party
it('should delete single political party', (done) => {
  chai.request(app)
    .delete('/api/v1/parties/5f62b4b9-2c06-4c12-93f8-b52b7230a16a')
    .set('access-token', userToken)
    .end((err, res) => {
      res.status.should.be.eql(200);
      res.body.should.have.property('status').equal(200);
      res.body.should.have.property('data');
      done();
    });
  });

  it('should edit a single party name', (done) => {
    const data = {
      name: 'MUSATA',
    };
    chai.request(app)
      .patch('/api/v1/parties/7b75dc69-5e76-4fda-b254-ceb0c0cbcfd1/name')
      .set('access-token', userToken)
      .send(data)
      .end((err, res) => {
        res.body.should.be.an('object');
        res.status.should.be.eql(200);
        res.body.should.have.property('data');
        res.body.should.have.property('status').equal(200);
        done();
      });
  });

});
