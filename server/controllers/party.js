import uuid from 'uuid';
import database from '../models/database/database';
import partyQueries from '../models/partyData';
import connect from '../models/database/index';

const parties = {
// // controller to create a political office table
//   async partyTable(req, res) {
//     const table = partyQueries.createPartyTableQuery;
//     const execute = database.query(table)
//       .then((resolve) => {
//         res.status(201).send({
//           status: 201,
//           message: 'party table created succesfully',
//         });
//         database.end();
//       })
//       .catch((error) => {
//         res.status(500).send({
//           status: 500,
//           error: 'party Table not created',
//         });
//         database.end();
//       });
//     return execute;
//   },

  // create a new political Party
  async create(req, res) {
    const { name, hqAddress } = req.body;
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
          res.status(409).send({
            status: 409,
            error: 'political party already exist',
          });
        } else {
          const data = [uuid(), name, hqAddress];
          const records = partyQueries.createParties;
          await connect.query(records, data);
          res.status(200).send({
            status: 200,
            message: 'Party created successfuly',
            data: data[name],
          });
        }
      } catch (error) {
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
        res.status(200).send({
          status: 200,
          data: fetchPartyQuery.rows,
        });
      } else {
        res.status(404).send({
          status: 404,
          error: 'party not found!!',
        });
      }
    } catch (error) {
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
        res.status(200).send({
          status: 200,
          data: fetchPartyQuery.rows,
        });
      } else {
        res.status(404).send({
          status: 404,
          error: 'not party found!!',
        });
      }
    } catch (error) {
      res.status(500).send({
        status: 500,
        error,
      });
    }
  },

  // Delete a specific party by id
  async deleteOneParty(req, res) {
    const { id } = req.params;
    try {
      let findParties = partyQueries.fetchParties;

      findParties += ' WHERE id = $1';
      let fetchPartyQuery = [];
      fetchPartyQuery = await connect.query(findParties, [id]);
      if (fetchPartyQuery.rowCount > 0) {
        const { deleteParty } = partyQueries;
        await connect.query(deleteParty, [id]);
        res.status(200).send({
          status: 200,
          data: {
            message: `party with id: ${id} deleted successfully`,
          },
        });
      } else {
        res.status(404).send({
          status: 404,
          error: 'party not found!!',
        });
      }
    } catch (error) {
      res.status(500).send({
        status: 500,
        error,
      });
    }
  },

  // Edit a specific party by id
  async editOneParty(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    try {
      let getParties = partyQueries.fetchParties;
      getParties += ' WHERE name = $1';
      let fetchPartyName = [];
      fetchPartyName = await connect.query(getParties, [name]);

      if (fetchPartyName.rowCount > 0) {
        res.status(409).json({
          error: 'party with name already exists',
        });
      } else {
        let findParties = partyQueries.fetchParties;
        findParties += ' WHERE id = $1';
        let fetchPartyQuery = [];
        fetchPartyQuery = await connect.query(findParties, [id]);
        if (fetchPartyQuery.rowCount > 0) {
          const { editParty } = partyQueries;
          await connect.query(editParty, [name, id]);
          res.status(200).send({
            status: 200,
            data: {
              id,
              name,
            },
          });
        } else {
          res.status(404).send({
            status: 404,
            error: 'party not found!!',
          });
        }
      }
    } catch (error) {
      res.status(500).send({
        status: 500,
        error,
      });
    }
  },
};

export default parties;
