import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

let userToken;
chai.use(chaiHttp);
chai.should();

describe('test user login', () => {
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
describe('test office endpoints', () => {
      // create new  political office if not exist in database
  it('create new office if not exist', (done) => {
    const data = {
      name: 'MUBAT',
      type: 'state',
    };
    chai.request(app)
      .post('/api/v1/offices/')
      .set('access-token', userToken)
      .send(data)
      .end((err, res) => {
        res.body.should.be.an('object');
        res.status.should.be.eql(201);
        res.body.should.have.property('message').equal('office created successfuly');
        res.body.should.have.property('status').equal(201);
        res.body.should.have.property('data');
        done();
      });
  });

  // it should not create office if already exist
  it('fail to create new office if exist', (done) => {
    const data = {
      name: 'amatora',
      type: 'state',
    };
    chai.request(app)
      .post('/api/v1/offices/')
      .set('access-token', userToken)
      .send(data)
      .end((err, res) => {
        res.body.should.be.an('object');
        res.status.should.be.eql(409);
        res.body.should.have.property('error').equal('office already exist, please try other name');
        res.body.should.have.property('status').equal(409);
        done();
      });
  });

  // it should not create office if already exist
  it('should get all political offices', (done) => {
    chai.request(app)
      .get('/api/v1/offices/')
      .end((err, res) => {
        res.status.should.be.eql(200);
        res.body.should.have.property('status').equal(200);
        res.body.should.have.property('data');
        done();
      });
    });

 // it should fect single office
 it('should get single political office', (done) => {
  chai.request(app)
    .get('/api/v1/offices/190e9929-2bba-4217-9c31-2c1ec1ca8754')
    .end((err, res) => {
      res.status.should.be.eql(200);
      res.body.should.have.property('status').equal(200);
      res.body.should.have.property('data');
      done();
    });
  });

  // get vote result
  it('specific political office result', (done) => {
   chai.request(app)
     .get('/api/v1/offices/5d588151-7a53-4295-bcf7-f9a653e6b940/result')
     .end((err, res) => {
       res.status.should.be.eql(200);
       res.body.should.have.property('status').equal(200);
       res.body.should.have.property('data');
       done();
     });
   });
   //  if user not found
   it('fail to fetch if office not found', (done) => {
    chai.request(app)
    .get('/api/v1/offices/5d588151-7a53-4295-bcf7-f9a653e6b941/result')
    .end((err, res) => {
      res.status.should.be.eql(404);
      done();
    });
  });
   // it expect interanl server
   it('return internal server error', (done) => {
     chai.request(app)
     .get('/api/v1/offices/5d588151-7a53-4295-bcf7-f9a653e6b94034/result')
     .end((err, res) => {
       res.status.should.be.eql(500);
       done();
     });
   });

   // expect to register new vote
    it('should register new vote', (done) => {
        chai.request(app)
        .post('/api/v1/votes/')
        .send({
            createdBy: 'c1cc1140-0e95-409f-872b-6a4be64c035c',
            office: '5795c586-0bd2-4b71-8532-8035d24bd343',
            candidate: '5d588151-7a53-4295-bcf7-f9a653e6b940'
            
        }).end((err, res) => {
         res.body.should.be.an('object');
         res.status.should.be.eql(201);
         res.body.should.have.property('status').eql(201);
         res.body.should.have.property('message').eql('user voted successfuly');
         res.body.should.have.property('data');
         done();
        });
    });

    it('should fail to register new vote', (done) => {
      chai.request(app)
      .post('/api/v1/votes/')
      .send({
          createdBy: 'a8ab3809-3863-4625-b116-a014382c4c3b',
          office: '5795c586-0bd2-4b71-8532-8035d24bd343',
          candidate: '5d588151-7a53-4295-bcf7-f9a653e6b940'
          
      }).end((err, res) => {
       res.body.should.be.an('object');
       res.status.should.be.eql(409);
       res.body.should.have.property('status').eql(409);
       res.body.should.have.property('error').eql(' user already voted');
       done();
      });
    });
      // it expect to fail for missing input
    it('should fail to register new vote', (done) => {
      chai.request(app)
      .post('/api/v1/votes/')
      .send({
        office: '5795c586-0bd2-4b71-8532-8035d24bd343',
        candidate: '5d588151-7a53-4295-bcf7-f9a653e6b940'
      })
      .end((err, res) =>{
         res.status.should.be.eql(400);
         done();
       });
      });
});
