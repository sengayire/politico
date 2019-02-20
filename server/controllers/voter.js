import uuid from 'uuid';
import database from '../models/database/database';
import voter from '../models/vote';
import connect from '../models/database';

const candidates = {
// controller to create a political office table
  async vortersTable(req, res) {
    const table = voter.VotersTable;
    const execute = database.query(table)
      .then((resolve) => {
        console.log(resolve);
        res.send({
          status: 200,
          message: 'voters table created succesfully',
        });
        database.end();
      })
      .catch((err) => {
        res.send({
          status: 400,
          message: 'voters table not created',
        });
        console.log(err);
        database.end();
      });
    return execute;
  },

  //  create a new political office
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
        let execute = [];
        execute = await connect.query(findVoter, [createdBy, office]);
        if (execute.rowCount > 0) {
          res.send({
            status: 302,
            error: ' user already voted',
          });
        } else {
          const data = [uuid(), createdOn, createdBy, candidate, office];
          const records = voter.vote;
          await connect.query(records, data);
          res.status(200).send({
            status: 200,
            message: 'user voted successfuly',
            data: {
              office,
              candidate,
              createdBy,
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
