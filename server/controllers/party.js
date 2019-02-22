import uuid from 'uuid';
import database from '../models/database/database';
import partyQueries from '../models/partyData';
import connect from '../models/database/index';

const parties = {
// controller to create a political office table
  async partyTable(req, res) {
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
          error: 'party Table not created',
        });
        database.end();
      });
    return execute;
  },

  // create a new political office
  async create(req, res) {
    const { name, hqAddress } = req.body;
    console.log('oooooooohhhh');
    if (!name || !hqAddress) {
      res.status(400).send({
        status: 400,
        message: 'please provide all information',
      });
    } else {
      try {
        let findParties = partyQueries.fetchParties;
        findParties += ' WHERE name = $1';
        let executePartyQuiery = [];
        executePartyQuiery = await connect.query(findParties, [name]);
        if (executePartyQuiery.rowCount > 0) {
          res.send({
            status: 302,
            error: 'office already exist, please try other name',
          });
        } else {
          const data = [uuid(), name, type];
          const records = partyQueries.createParties;
          await connect.query(records, data);
          res.status(200).send({
            status: 200,
            message: 'office created successfuly',
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

  // fetc all political paties
  async getAllParties(req, res) {
    try {
      const findParties = partyQueries.fetchParties;

      let fetchPartyQuery = [];
      fetchPartyQuery = await connect.query(findParties);
      if (fetchPartyQuery.rowCount > 0) {
        res.status(302).send({
          status: 302,
          data: fetchPartyQuery.rows,
        });
      } else {
        res.status(404).send({
          status: 404,
          error: 'not party found!!',
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
