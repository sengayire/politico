/* eslint-disable prefer-destructuring */
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

  // get a specific party by id
  async getOne(req, res) {
    const { Id } = req.params.id;
    const records = [data];
    const row = records.find(k => k.id === Id);
    if (row.length !== 0) {
      try {
        res.send({
          status: 200,
          message: 'record found!!!',
          data: row,
        });
      } catch (error) {
        res.send({
          error,
        });
      }
    } else {
      res.status(400).send({
        status: 400,
        message: 'party not found!!!',
      });
    }
  },
  // delete a specific political party by id
  async deleteOne(req, res) {
    const { id } = req.params.id;
    const records = [data];
    const row = records.find(k => k.id === id);
    if (row.length >= 1) {
      try {
        res.status(200).send({
          status: 200,
          message: 'political party has been deleted successfull',
          data: row[0],
        });
      } catch (error) {
        res.status(404).send({
          status: 404,
          error,
        });
      }
    } else {
      res.status(400).send({
        status: 400,
        message: 'party not deleted,plesse try again!!!',
      });
    }
  },
  async editOne(req, res) {
    const name = req.body.name;
    const { Id } = req.params.id;
    const records = [data];
    const row = records.find(k => k.id === Id);
    if (row.length >= 1) {
      try {
        res.status(200).send({
          status: 200,
          message: 'party edited successfuly',
          data: [{
            name,
          }],
        });
      } catch (error) {
        res.status(400).send({
          status: 400,
          error,
        });
      }
    } else {
      res.status(404).send({
        status: 200,
        message: 'party has not been edited',
      });
    }
  },
};
export default party;
