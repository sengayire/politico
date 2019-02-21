import uuid from 'uuid';
import database from '../models/database/database';
import officeQueries from '../models/office';
import connect from '../models/database';

const office = {
// controller to create a political office table
  async officeTable(req, res) {
    const table = officeQueries.officeTable;
    const execute = database.query(table)
      .then((resolve) => {
        console.log(resolve);
        res.send({
          status: 200,
          message: 'office created succesfully',
        });
        database.end();
      })
      .catch((err) => {
        res.send({
          status: 400,
          message: 'office not created',
        });
        console.log(err);
        database.end();
      });
    return execute;
  },

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
          res.send({
            status: 302,
            error: 'office already exist, please try other name',
          });
        } else {
          const data = [uuid(), name, type];
          const records = officeQueries.createOffice;
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

};

export default office;
