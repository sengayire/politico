import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

const { expect } = chai;
chai.use(chaiHttp);
chai.should();

// test welcome endpoint
describe('GET /', () => {
  it('Should return welcome message', () => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.status.should.be.equal(200);
        res.body.should.have.property('status');
        res.body.should.have.property('message');
        res.body.message.should.be.equal('Welcome to Politico API');
      });
  });
});

describe('POST /', () => {
  it('Should fail and return status code 404', () => {
    chai.request(app)
      .post('/')
      .end((err, res) => {
        res.status.should.be.equal(404);
      });
  });
});

// test to sign up new user 
describe('POST /api/v1/users/auth/signup', () => {
  it('Should return status code 201', () => {
    chai.request(app)
      .post('/api/v1/users/auth/signup')
      .send({
      	firstname: 'SENGAYRE',
      	lastname: 'prince',
      	othername: 'Rugwiro',
      	email: 'psengayire@gmail.com',
      	password: 'password',
      	phonenumber: '0788990672',
      	passporturl: 'https://www.google.com',
      })
      .end((err, res) => {
        res.status.should.be.equal(201);
        res.body.should.have.property('status');
        res.body.should.have.property('data');
        res.body.should.have.property('message');
        res.body.message.should.be.equal('Success!');
        res.body.data.should.be.an('array');
      });
  });
});


