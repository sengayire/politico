// /* eslint-disable no-undef */
// import uuid from 'uuid';
// import chai from 'chai';
// import chaiHttp from 'chai-http';
// import Office from '../models/office';
// import app from '../app';

// const should = chai.should();
// chai.use(chaiHttp);

// // Test error 404
// describe('Error 404 test', () => {
//   it('return error', (done) => {
//     chai.request(app)
//       .post('/notexist')
//       .send({
//         id: 1,
//         type: 'hq',
//         name: 'kagugu',
//       })
//       .end((err, res) => {
//         res.should.have.status(404);
//         res.should.be.a('object');
//         done();
//       });
//   });
// });

// // test that it create political office
// describe('Office', () => {
//   const record = {
//     id: uuid(),
//     name: 'office',
//     type: 'state',
//     createdDate: Date(),
//   };
//   it('should create an office', (done) => {
//     chai.request(app)
//       .post('/api/v1/parties')
//       .send(record)
//       .end((err, res) => {
//         res.should.have.status(401);
//         res.body.should.be.a('object');
//         done();
//       });
//   });
// });

// // test that it get a specific political office by id
// describe('fetch a specific political office by id', () => {
//   it('should get a specific political office', (done) => {
//     chai.request(app)
//       .get('/api/v1/parties')
//       .end((err, res) => {
//         res.should.be.a('object');
//         res.should.have.status(302);
//         done();
//       });
//   });
// });

// describe('Get all Government offices', () => {
//   it('it should get all offices', (done) => {
//     chai.request(app)
//       .get('/api/v1/parties')
//       .end((err, res) => {
//         res.should.have.status(302);
//         res.should.be.a('object');
//         done();
//       });
//   });
// });


// // update a government office
// describe('Update political Office', () => {
//   it('should not Update an Office', (done) => {
//     const record = {
//       name: 'state office',
//       type: 'state',
//       createdDate: 23456,
//     };
//     chai.request(app)
//       .patch('/api/v1/parties/')
//       .send(record)
//       .end((err, res) => {
//         res.should.have.status(404);
//         done();
//       });
//   });
// });

// // delete a government office
// // describe('Delete a Government Office', () => {
// //   it('it should fail to Delete an Office', (done) => {
// //     const record = {
// //       name: 'state office',
// //       type: 'state',
// //       createdDate: 23456,
// //     };

// //     const office = Office.createOffice(record);
// //     chai.request(app)
// //       .delete('/api/v1/offices/dhfdafd')
// //       .send(office)
// //       .end((err, res) => {
// //         res.should.have.status(201);
// //         done();
// //       });
// //   });

// //   // it('it should delete an Office', (done) => {
// //   //   const data = {
// //   //     name: 'state office',
// //   //     type: 'state',
// //   //     createdDate: 23456,
// //   //     modifiedDate: 2345,
// //   //   };

// //   const office = Office.createOffice(data);
// //   chai.request(app)
// //     .delete(`/api/v1/offices/${office.id}`)
// //     .end((err, res) => {
// //       res.should.have.status(200);
// //       done();
// //     });
// // });
