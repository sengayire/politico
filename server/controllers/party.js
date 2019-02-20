import uuid from 'uuid';
import database from '../models/database/database';
import partyQueries from '../models/partyData';
import connect from '../models/database';

const parties = {
// controller to create a political office table
  async partyTable(req, res) {
    const table = partyQueries.partyTable;
    const execute = database.query(table)
      .then((resolve) => {
        console.log(resolve);
        res.send({
          status: 200,
          message: 'party created succesfully',
        });
        database.end();
      })
      .catch((err) => {
        res.send({
          status: 400,
          message: 'party not created',
        });
        console.log(err);
        database.end();
      });
    return execute;
  },

  // create a new political office
  async create(req, res) {
    const { name, hqAddress } = req.body;

    if (!hqAddress || !name) {
      res.status(400).send({
        status: 400,
        message: 'please provide all information',
      });
    } else {
      try {
        let findParties = partyQueries.fetchParties;

        findParties += ' WHERE name = $1';
        let execute = [];
        execute = await connect.query(findParties, [name]);
        if (execute.rowCount > 0) {
          res.send({
            status: 302,
            error: 'party already exist, please try other name',
          });
        } else {
          const data = [uuid(), name, hqAddress];
          const records = partyQueries.createParties;
          await connect.query(records, data);
          res.status(200).send({
            status: 200,
            message: 'party created successfuly',
            data: data[name],
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

export default parties;
