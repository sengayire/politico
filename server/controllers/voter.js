import uuid from 'uuid';
import database from '../models/database/database';
import voter from '../models/vote';
import connect from '../models/database';

const candidates = {
// // controller to create a political office table
//   async vortersTable(req, res) {
//     const table = voter.VotersTable;
//     const executeQueries = database.query(table)
//       .then((resolve) => {
//         res.status(201).send({
//           status: 201,
//           message: 'voters table created succesfully',
//         });
//         database.end();
//       })
//       .catch((err) => {
//         res.status(400).send({
//           status: 400,
//           message: 'voters table not created',
//         });
//         console.log(err);
//         database.end();
//       });
//     return executeQueries;
//   },

  //  register new vote
  async create(req, res) {
    const {
      createdOn, createdBy, office, candidate,
    } = req.body;

    if (!createdBy || !office || !candidate) {
      res.status(400).send({
        status: 400,
        message: 'please provide all information',
      });
    } else {
      try {
        let findVoter = voter.fetchVoter;

        findVoter += ' WHERE createdBy = $1 AND office = $2';
        let executeQueries = [];
        executeQueries = await connect.query(findVoter, [createdBy, office]);
        if (executeQueries.rowCount > 0) {
          res.status(409).send({
            status: 409,
            error: ' user already voted',
          });
        } else {
          const data = [uuid(), createdOn, createdBy, candidate, office];
          const records = voter.vote;
          await connect.query(records, data);
          res.status(201).send({
            status: 201,
            message: 'user voted successfuly',
            data: {
              office,
              candidate,
              createdBy,
            },
          });
        }
      } catch (error) {
        res.send({
          status: 500,
          error,
        });
      }
    }
  },

};

export default candidates;
