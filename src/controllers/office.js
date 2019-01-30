const office = {

  async create(req, res) {
    const { id, type, name } = req.body;

    if (!type || !name) {
      res.send({
        status: 400,
        message: 'please provide all information',
      });
    } else {
      try {
        res.send({
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
};
export default office;
