import data from '../data/partyData';

const party = {
  // api to create creating a party
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
          message: 'Party created successfuly',
          data: [{
            id,
            name,
            hqAddress,
            logoUrl,
          }],
        });
      } catch (error) {
        res.send({
          status: 404,
          error: 'can\'t create table',
        });
      }
    }
  },

  // api to get all political parties
  async getAll(req, res) {
    try {
      res.send({
        status: 200,
        data,
      });
    } catch (e) {
      res.send({
        status: 404,
        error: 'party can\'t be created',

      });
    }
  },
};
export default party;
