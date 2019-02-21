import uuid from 'uuid';
import database from '../models/database/database';
import partyQueries from '../models/partyData';
import connect from '../models/database';

const parties = {
// controller to create a political office table
    const table = partyQueries.createPartyTableQuery;
    const execute = database.query(table)
      .then((resolve) => {
        console.log(resolve);
        res.status(201).send({
          status: 201,
          message: 'party table created succesfully',
        });
        database.end();
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send({
          status: 500,
          error,
        });
        database.end();
      });
    return executeQueries;
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
          res.status(302).send({
            status: 302,
            error: 'party already exist, please try other name',
          });
        } else {
          const data = [uuid(), name, hqAddress];
          const records = partyQueries.createParties;
          await connect.query(records, data);
          res.status(201).send({
            status: 201,
            message: 'party created successfuly',
            data: data[name],
          });
        }
      } catch (error) {
        console.log(error);
        res.status(500).send({
          status: 500,
          error,
        });
      }
    }
  },

  // Fetch a specific party by id
  async getOneParty(req, res) {
    const { id } = req.params;
    try {
      let findParties = partyQueries.fetchParties;

      findParties += ' WHERE id = $1';
      let fetchPartyQuery = [];
      fetchPartyQuery = await connect.query(findParties, [id]);
      if (fetchPartyQuery.rowCount > 0) {
        res.status(302).send({
          status: 302,
          data: fetchPartyQuery.rows,
        });
      } else {
        res.status(404).send({
          status: 404,
          error: 'party not found!!',
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({
        status: 500,
        error,
      });
    }
  },
};

export default parties;
