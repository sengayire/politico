import chai from 'chai';
import chaiThings from 'chai-things';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
chai.should();
chai.use(chaiThings);

// test to sign up new user
describe('user signup', () => {
  it('Should register new user', (done) => {
    const user = {
      firstName: 'giramata',
      lastName: 'hababagabo',
      otherName: 'wamata',
      email: 'sengaprince@gmail.com',
      password: '123456',
      phoneNumber: '0788990672',
      passportUrl: 'www.google.rw',
    };
    chai.request(app)
      .post('/api/v1/users/auth/signup')
      .send(user)
      .end((err, res) => {
        res.body.should.be.an('object');
        res.body.should.have.property('status').equal(201);
        res.body.should.have.property('token');
        res.body.should.have.property('data');
        done();
      });
  });
  it('Should fail to register new user if exists', (done) => {
    const user = {
      firstName: 'Bobo',
      lastName: 'NIYO',
      otherName: 'ynwa',
      email: 'bobo12@gmail.com',
      password: '123456',
      phoneNumber: '0783200000',
      passportUrl: 'www.go.rw',
    };
    chai.request(app)
      .post('/api/v1/users/auth/signup')
      .send(user)
      .end((err, res) => {
        res.body.should.be.an('object');
        res.body.should.have.property('status').equal(409);
        res.body.should.have.property('error').equal('User already exist');
        done();
      });
  });
});

it('Should fail to register with invalid email', (done) => {
  const user = {
    firstName: 'Bobo',
    lastName: 'NIYO',
    otherName: 'ynwa',
    email: 'bobo12mail.com',
    password: '123456',
    phoneNumber: '0783200000',
    passportUrl: 'www.go.rw',
  };
  chai.request(app)
    .post('/api/v1/users/auth/signup')
    .send(user)
    .end((err, res) => {
      res.body.should.be.an('object');
      res.status.should.be.eql(400);
      res.body.should.have.property('status').equal(400);
      res.body.should.have.property('error').equal('Please enter a valid email address');
      done();
    });
});

// user sign in endpoint test
describe('test user login', () => {
  // sign in user
  it('login user', (done) => {
    const user = {
      email: 'bobo123@gmail.com',
      password: '123456',
    };
    chai.request(app)
      .post('/api/v1/users/auth/signin')
      .send(user)
      .end((err, res) => {
        res.body.should.be.an('object');
        res.status.should.be.eql(200);
        res.body.should.have.property('status').equal(200);
        res.body.data[0].should.have.property('token');
      });
    done();
  });
  it('fail to login with invalid email', (done) => {
    const invalid = {
      email: 'psengayire',
      password: 'passw',
    };
    chai.request(app)
      .post('/api/v1/users/auth/signin')
      .send(invalid)
      .end((err, res) => {
        res.body.should.be.an('object');
        res.status.should.be.eql(400);
        res.body.should.have.property('message').eql('Please enter a valid email address');
      });
    done();
  });

  // test fail if user not exists
  
  it('fail to login if user credentials are wrong', (done) => {
    const notExist = {
      email: 'fred1@email.com',
      password: 'passw',
    };
    chai.request(app)
      .post('/api/v1/users/auth/signin')
      .send(notExist)
      .end((err, res) => {
        res.body.should.be.an('object');
        res.status.should.be.eql(403);
        res.body.should.have.property('status').equal(403);
      });
    done();
  });
});
