/* eslint-disable prefer-destructuring */
import Party from '../models/partyData';

const party = {
  // api to create creating a party
  async create(req, res) {
    const {
      id, name, hqAddress, logoUrl,
    } = req.body;

    if (!name) {
      res.status(200).send({
        status: 400,
        message: 'please provide all information',
      });
    } else {
      try {
        const data = {
          id, name, hqAddress, logoUrl,
        };
        const record = Party.createParty(data);
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

  // get all available party
  async getAll(req, res) {
    const record = Party.fetchAll();
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

  // get a specific party by id
  async getOne(req, res) {
    const record = Party.findOne(req.params.id, 10);
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
          party: record.name,
          hqAddress: record.hqAddress,
        }],
      });
    }
  },

  // delete a specific political party by id
  async deleteOne(req, res) {
    const record = Party.findOne(req.params.id);
    if (record) {
      Party.delete();
      res.send({
        status: 200,
        message: 'party deleted successfully',
      });
    } else {
      return res.send({
        status: 400,
        error: 'oops can\'t delete a party',
      });
    }
    return Party;
  },

  // delete a specific political party by id
  async editOne(req, res) {
    const record = Party.findOne(req.params.id);
    if (record) {
      Party.edit();
      res.send({
        status: 200,
        message: 'party edited successfully',
        data: {
          record,
        },
      });
    } else {
      return res.send({
        status: 400,
        error: 'oops can\'t edit a party',
      });
    }
    return Party;
  },
};
export default party;
