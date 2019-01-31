import Office from '../data/office';

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
  async getAll(req, res) {
    try {
      res.status(200).send({
        status: 200,
        data: Office,
      });
    } catch (error) {
      res.status(404).send({
        status: 404,
        error,
      });
    }
  },
};
export default office;
