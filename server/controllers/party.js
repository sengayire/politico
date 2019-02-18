/* eslint-disable prefer-destructuring */

import Party from '../models/partyData';

const party = {
  // api to create creating a party
  async create(req, res) {
    const {
      name, hqAddress, logoUrl,
    } = req.body;

    if (!name) {
      res.status(200).send({
        status: 400,
        message: 'please provide all information',
      });
    } else {
      try {
        const find = Party.findByName(req.body.name);
        if (find) {
          return res.send({
            status: 400,
            error: 'Party already exist, please try other name',
          });
        }

        const data = {
          name, hqAddress, logoUrl,
        };
        const record = Party.createParty(data);
        res.status(200).send({
          status: 200,
          message: 'Party created successfuly',
          data: [record],
        });
      } catch (error) {
        res.send({
          status: 400,
          error,
        });
      }
    }
    return null;
  },

  // get all available party
  async getAllParties(req, res) {
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
  async getOneParty(req, res) {
    const record = Party.findOne(req.params.id, 10);
    if (!record) {
      try {
        res.status(200).send({
          status: 404,
          message: 'Party not found!!!',
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
      Party.deleteParty();
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
    const { id } = req.params;
    console.log(id);
    const {
      name, hqAddress, logoUrl,
    } = req.body;

    const object = Party.parties.find(k => k.id === id);
    console.log(object);
    if (object) {
      try {
        const update = {
          name, hqAddress, logoUrl,
        };
        object.name = update.name;
        object.hqAddress = update.hqAddress;
        object.logoUrl = update.logoUrl;
        console.log(object);
        return res.status(200).send({
          status: 200,
          data: [update],
        });
      } catch (error) {
        res.send({
          status: 400,
          error,
        });
      }
    } else {
      return res.send({
        status: 400,
        error: 'oops can\'t party not found!!',
      });
    }
    return object;
  },
};
export default party;
