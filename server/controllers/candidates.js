import uuid from 'uuid';
import database from '../models/database/database';
import candidatesQueries from '../models/candidates';
import connect from '../models/database';

const candidates = {
// controller to create a political office table
  async candidatesTable(req, res) {
    const table = candidatesQueries.candidatesTable;
    const execute = database.query(table)
      .then((resolve) => {
        console.log(resolve);
        res.send({
          status: 200,
          message: 'candidate table created succesfully',
        });
        database.end();
      })
      .catch((err) => {
        res.send({
          status: 400,
          message: 'candidate table not created',
        });
        console.log(err);
        database.end();
      });
    return execute;
  },

  // create a new political office
  async create(req, res) {
    const {
      username, party, candidate,
    } = req.body;
    const { office } = req.params;
    console.log(office);
    if (!party || !candidate) {
      res.status(400).send({
        status: 400,
        message: 'please provide all information',
      });
    } else {
      try {
        let findCandidate = candidatesQueries.fetchCandidate;

        findCandidate += ' WHERE office = $1 AND candidate = $2';
        let execute = [];
        execute = await connect.query(findCandidate, [office, candidate]);
        if (execute.rowCount > 0) {
          res.send({
            status: 302,
            error: 'candidate  already exists',
          });
        } else {
          const data = [uuid(), username, office, party, candidate];
          const records = candidatesQueries.createCandidate;
          await connect.query(records, data);
          res.status(200).send({
            status: 200,
            message: 'candidate created successfuly',
            data: {
              office,
              candidate,
            },
          });
        }
      } catch (error) {
        console.log(error);
        res.send({
          status: 400,
          error,
        });
      }
    }
  },

};

export default candidates;
