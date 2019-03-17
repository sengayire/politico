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
describe('test candidate endpoints', () => {
      // create new  political office if not exist in database
  it('create new candidate', (done) => {
    const data = {
      username: 'semugabe',
      office: '5d588151-7a53-4295-bcf7-f9a653e6b940',
      party: 'a89c4f16-34b2-4bab-ad39-468db5fa79b7',
      user : '5b087714-21d2-4a00-abd1-df0684b84a68',
    };
    chai.request(app)
      .post('/api/v1/office/5d588151-7a53-4295-bcf7-f9a653e6b940/register')
      .set('access-token', userToken)
      .send(data)
      .end((err, res) => {
        res.body.should.be.an('object');
        res.status.should.be.eql(201);
        res.body.should.have.property('message').equal('candidate created successfuly');
        res.body.should.have.property('status').equal(201);
        done();
      });
  });
});