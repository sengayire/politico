import uuid from 'uuid';
import database from '../models/database/database';
import officeQueries from '../models/office';
import connect from '../models/database';

const office = {
// // controller to create a political office table
//   async officeTable(req, res) {
//     const table = officeQueries.officeTable;
//     const execute = database.query(table)
//       .then((resolve) => {
//         res.status(201).send({
//           status: 201,
//           message: 'office table created succesfully',
//         });
//         database.end();
//       })
//       .catch((err) => {
//         res.status(500).send({
//           status: 500,
//           err,
//         });
//         database.end();
//       });
//     return execute;
//   },

  // create a new political office
  async create(req, res) {
    const { type, name } = req.body;

    if (!type || !name) {
      res.status(400).send({
        status: 400,
        message: 'please provide all information',
      });
    } else {
      try {
        const findOffice = officeQueries.fetchOffices;
        let execute = [];
        execute = await connect.query(findOffice, [name]);
        if (execute.rowCount > 0) {
          res.status(409).send({
            status: 409,
            error: 'office already exist, please try other name',
          });
        } else {
          const data = [uuid(), name, type];
          const records = officeQueries.createOffice;
          await connect.query(records, data);
          res.status(201).send({
            status: 201,
            message: 'office created successfuly',
            data,
          });
        }
      } catch (error) {
        res.status(500).send({
          status: 500,
          error,
        });
      }
    }
  },

  // Fetch all political offices
  async getAllOffices(req, res) {
    try {
      const findOffice = officeQueries.selectAll;
      let fetchOfficeQuery = [];
      fetchOfficeQuery = await connect.query(findOffice);
      if (fetchOfficeQuery.rowCount > 0) {
        res.status(200).send({
          status: 200,
          data: fetchOfficeQuery.rows,
        });
      } else {
        res.status(403).send({
          status: 403,
          error: 'Office not found!!',
        });
      }
    } catch (error) {
      res.status(500).send({
        status: 500,
        error,
      });
    }
  },

  // Fetch a specific Office by id
  async getOneOffice(req, res) {
    const { id } = req.params;
    try {
      let findOffice = officeQueries.selectAll;

      findOffice += ' WHERE id = $1';
      let fetchOfficeQuery = [];
      fetchOfficeQuery = await connect.query(findOffice, [id]);
      if (fetchOfficeQuery.rowCount > 0) {
        res.status(200).send({
          status: 200,
          data: fetchOfficeQuery.rows,
        });
      } else {
        res.status(404).send({
          status: 404,
          error: 'Office not found!!',
        });
      }
    } catch (error) {
      res.status(500).send({
        status: 500,
        error,
      });
    }
  },

  // election results
  async results(req, res) {
    try {
      const { id } = req.params;
      // Check if office not exists
      let findOffice = officeQueries.selectAll;
      findOffice += ' WHERE id = $1';
      let executeOfficeQuery = [];
      executeOfficeQuery = await connect.query(findOffice, [id]);
      if (executeOfficeQuery.rowCount === 0) {
        return res.status(404).send({
          status: 404,
          error: `The office of id: <${id}> does not exist.`,
        });
      }
      // Fetch election results
      const { results } = officeQueries;
      const fetchResults = await connect.query(results, [id]);
      if (fetchResults.rowCount !== 0) {
        return res.status(200).send({
          status: 200,
          data: fetchResults.rows,
        });
      }
      return res.status(404).send({
        status: 404,
        message: 'results not found!!!.',
      });
    } catch (error) {
      return res.status(500).send({
        status: 500,
        error: 'Internal server error',
      });
    }
  },
};

export default office;
