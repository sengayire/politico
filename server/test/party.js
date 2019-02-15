import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import Party from '../models/partyData';

const should = chai.should();
chai.use(chaiHttp);

// Test error 404
describe('Error 404 test', () => {
  it('return error', (done) => {
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
// describe('Party', () => {
//   const record = {
//     id: data.id,
//     name: data.name,
//     hqAddress: data.hqAddress,
//     logoUrl: data.logoUrl,
//     createdDate: Date(),
//   };
//   it('should create an office', (done) => {
//     chai.request(app)
//       .post('/api/v1/offices')
//       .send(record)
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.have.property('message');
//         res.body.should.be.a('object');
//         done();
//       });
//   });
// });
// // // Test the Create Party EndPoint
// // describe('Create a Politico Party', () => {
// //   it('should not create a party without all contents filled', (done) => {
// //     const data = {
// //       logoUrl: 'hiensisss',
// //       createdDate: 23456,
// //       modifiedDate: 2345,
// //     };

// //     chai.request(app)
// //       .post('/api/v1/parties')
// //       .send(data)
// //       .set('content-type', 'application/json')
// //       .end((err, res) => {
// //         res.should.have.status(400);
// //         res.body.should.have.property('message');
// //         done();
// //       });
// //   });

// //   it('it should create a party', (done) => {
// //     const data = {
// //       id: 1,
// //       name: 'democrats',
// //       hqAdress: 'Washngton DC',
// //       logoUrl: 'hiensisss',
// //       createdDate: 23456,
// //     };
// //     const record = Party.createParty(data);
// //     chai.request(app)
// //       .post('/api/v1/parties')
// //       .send(record)
// //       .set('content-type', 'application/json')
// //       .end((err, res) => {
// //         res.should.have.status(201);
// //         res.body.should.have.property('name');
// //         done();
// //       });
// //   });
// // });
// // test Get all parties endpoint
// describe('Get all Politico Parties', () => {
//   it('it should get all parties', (done) => {
//     chai.request(app)
//       .get('/api/v1/parties')
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.shaould.have.property('name');
//         done();
//       });
//   });
// });

// describe('Get a specific Politico Parties', () => {
//   it('it should fail to get a specific party', (done) => {
//     const data = {
//       name: 'hie',
//       hqAdress: 'kigali',
//       logoUrl: 'hiensisss',
//       createdDate: 23456,
//     };

//     const party = Party.createParty(data);
//     chai.request(app)
//       .get('/api/v1/parties/dhfdafd')
//       .send(party)
//       .end((err, res) => {
//         res.shaould.have.status(404);
//         res.body.should.have.property('name');
//         done();
//       });
//   });

//   it('it should get a specific party', (done) => {
//     const data = {
//       name: 'hie',
//       hqAdress: 'kigali',
//       logoUrl: 'hiensisss',
//       createdDate: 23456,
//     };

//     const party = Party.createParty(data);
//     chai.request(app)
//       .get(`/api/v1/parties/${party.id}`)
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.be.an('Object');
//         res.body.should.have.property('name');
//         done();
//       });
//   });
// });

// describe('Update a Political Party', () => {
//   it('it should fail to Update a party', (done) => {
//     const data = {
//       name: 'democrats',
//       hqAdress: 'kigali',
//       logoUrl: 'hiensisss',
//       createdDate: 23456,
//     };

//     const party = Party.createParty(data);
//     chai.request(app)
//       .patch('/api/v1/parties/dhfdafd')
//       .send(party)
//       .end((err, res) => {
//         res.shaould.have.status(404);
//         res.body.should.have.property('name');
//         done();
//       });
//     it('it should update a party', (done) => {
//       const data = {
//         name: 'democrats',
//         hqAdress: 'kigali',
//         logoUrl: 'hiensisss',
//         createdDate: 23456,
//       };

//       const party = Party.createParty(data);
//       chai.request(app)
//         .patch(`/api/v1/parties/${party.id}`)
//         .send({ name: 'demo' })
//         .end((err, res) => {
//           res.status.should.be.to.equal(200);
//           res.body.shaould.to.be.an('Object');
//           done();
//         });
//     });
//   });
// });

// describe('Delete a Political Party', () => {
//   it('it should fail to Delete a party', (done) => {
//     const data = {
//       name: 'democrats',
//       hqAdress: 'kigali',
//       logoUrl: 'hiensisss',
//       createdDate: 23456,
//       modifiedDate: 2345,
//     };

//     const party = Party.createParty(data);
//     chai.request(app)
//       .delete('/api/v1/parties/dhfdafd')
//       .end((err, res) => {
//         res.should.have.status.to.equal(404);
//         res.body.should.have.property('name');
//         done();
//       });

//     it('it should delete a party', (done) => {
//       const data = {
//         name: 'democrats',
//         hqAdress: 'kigali',
//         logoUrl: 'hiensisss',
//         createdDate: 23456,
//       };

//       const party = Party.createParty(data);
//       chai.request(app)
//         .delete(`/api/v1/parties/${party.id}`)
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.body.should.be.an('object');
//           res.body.should.have.property('name');
//           done();
//         });
//     });
//   });
// });
