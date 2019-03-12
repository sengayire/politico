// import chai from 'chai';
// import chaiHttp from 'chai-http';
// import app from '../app';

// chai.use(chaiHttp);
// chai.should();

// // test to sign up new user
// describe('POST /api/v1/users/auth/signup', () => {
//   it('Should return status code 201', (done) => {
//     chai.request(app)
//       .post('/api/v1/users/auth/signup')
//       .send({
//       	firstname: 'SENGAYRE',
//       	lastname: 'prince',
//       	othername: 'Rugwiro',
//       	email: 'psengayire@gmail.com',
//       	password: 'password',
//       	phonenumber: '0788990672',
//         passporturl: 'https://www.google.com',
//       })
//       .end((err, res) => {
//         res.body.should.be.an('Object');
//         res.status.should.be.equal(201);
//         res.body.should.have.property('data');
//         res.body.data.should.be.an('Array');
//         res.body.data.should.all.have.property('token');
//         res.body.data.should.all.have.property('user');
//       });
//     done();
//   });
// });

// // sign up new user with missing information
// describe('test signup new user with missing body property', () => {
//   it('Should fail to sign up new user and return status code 400', (done) => {
//     chai.request(app)
//       .post('/api/v1/users/auth/signup')
//       .send({
//       	firstname: '',
//       	lastname: '',
//       	othername: '',
//       	email: 'psengayiregmail.com',
//       	password: 'password',
//       	phonenumber: '',
//       	passporturl: 'https://www.google.com',
//       })
//       .end((err, res) => {
//         res.status.should.be.equal(400);
//         res.body.should.have.property('status');
//         res.body.should.have.property('error');
//       });
//     done();
//   });
// });
// // test to register an exists user
// describe('sign up user with exist iformation ', () => {
//   it('Should return status code 400', (done) => {
//     chai.request(app)
//       .post('/api/v1/users/auth/signup')
//       .send({
//         firstname: 'SENGAYIRE',
//         lastname: 'Prince',
//         othername: 'Rugwiro',
//         email: 'psengayire@gmail.com',
//         password: 'password',
//         phonenumber: '0788990672',
//         passporturl: 'https://www.google.com',
//       })
//       .end((err, res) => {
//         res.status.should.be.equal(400);
//         // res.body.should.have.property('status');
//         res.body.should.have.property('data');
//         res.body.should.have.property('message');
//         res.body.message.should.equal('Success!');
//         res.body.data.should.be.an('array');
//       });
//     done();
//   });
// });
