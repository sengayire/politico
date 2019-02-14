import Office from '../models/office';

const office = {
// controller to create apolitical office
  async create(req, res) {
    const { id, type, name } = req.body;

    if (!type || !name) {
      res.status(200).send({
        status: 400,
        message: 'please provide all information',
      });
    } else {
      try {
        const find = Office.findOneByName(req.body.name);
        if (find) {
          res.send({
            status: 400,
            error: 'office already exist, please try other name',
          });
        }
        const data = { id, type, name };
        const record = Office.createOffice(data);
        res.status(200).send({
          status: 200,
          message: 'office created successfuly',
          data: [record],
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
  async getAllOffice(req, res) {
    const record = Office.fetchAll();
    try {
      res.status(200).send({
        status: 200,
        record,
      });
    } catch (error) {
      res.status(404).send({
        status: 404,
        error,
      });
    }
  },

  // get a specific office
  async getOneOffice(req, res) {
    const record = Office.findOneOffice(req.params.id);
    if (!record) {
      try {
        res.status(200).send({
          status: 404,
          message: 'Office not found!!!',
        });
      } catch (error) {
        res.status(400).send({
          error,
        });
      }
    } else {
      res.status(404).send({
        status: 200,
        message: 'office has been found',
        data: [{
          Office: record.name,
          type: record.type,
        }],
      });
    }
  },

  // delete todo object data
  async deleteOne(req, res) {
    const record = Office.findOneOffice(req.params.id);
    if (record) {
      Office.deleteOffice();
      res.send({
        message: 'office delete',
      });
    } else {
      return res.send({
        message: 'oops can\'t delete the item',
      });
    }
    return Office;
  },
};

export default office;
