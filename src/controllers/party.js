const party = {
  // creating a parties
  async create(req, res) {
    const {
      id, name, hqAddress, logoUrl,
    } = req.body;
    if (!name || !hqAddress || !logoUrl) {
      res.send({
        status: 400,
        message: 'please fill into all information',
      });
    } else {
      try {
        res.send({
          status: 200,
          data: [{
            id,
            name,
          }],
        });
      } catch (error) {
        res.send({
          status: 404,
          error: 'con\'t create party',
        });
      }
    }
  },
};
export default party;
