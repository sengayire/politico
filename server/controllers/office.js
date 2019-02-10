import data from '../models/office';

const office = {

  async create(req, res) {
    const { id, type, name } = req.body;

    if (!type || !name) {
      res.status(200).send({
        status: 400,
        message: 'please provide all information',
      });
    } else {
      try {
        res.status(200).send({
          status: 200,
          message: 'office created successfuly',
          data: {
            id,
            type,
            name,
          },
        });
      } catch (error) {
        res.send({
          status: 400,
          error,
        });
      }
    }
  },
  // get all available political office
  async getAll(req, res) {
    try {
      res.status(200).send({
        status: 200,
        data,
      });
    } catch (error) {
      res.status(404).send({
        status: 404,
        error,
      });
    }
  },

  // get a specific office
  async getOne(req, res) {
    const { id } = req.params.id;
    const records = [data];
    const row = records.find(k => k.id === id);
    if (row.length >= 1) {
      try {
        res.status(200).send({
          status: 200,
          message: 'office has been found',
          data: row[0],
        });
      } catch (error) {
        res.status(400).send({
          error,
        });
      }
    } else {
      records.status(404).send({
        status: 404,
        message: 'Office not found!!!',
      });
    }
  },
};
export default office;
