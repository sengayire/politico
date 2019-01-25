class party {
  // creating a parties
  static async create(req, res) {
    const {
      id, name, hqAddress, logoUrl,
    } = req.body;
    if (!name || !hqAddress || !logoUrl) {
      res.send({
        status: 400,
        message: 'please fill into all information',
      });
    } else {
      res.send({
        status: 200,
        data: [{
          id,
          name,
        }],
      });
    }
  }
}
export default party;
