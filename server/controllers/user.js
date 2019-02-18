/* eslint-disable no-multi-assign */
import uuid from 'uuid';
import execute from '../models/database/database';
import db from '../models/database/queries';

const user = {
  // create user table
  async createTable(req, res) {
    const create = db.UserTable;
    if (create) {
      try {
        res.send({
          msg: 'table created',
        });
        await execute(create);
      } catch (error) {
        res.status(400).send({
          status: 400,
          error,
        });
      }
    }
  },

  // sign up new user
  async signUp(req, res) {
    const {
      firstName,
      lastName,
      otherName,
      email,
      password,
      phoneNumber,
      passportUrl,
    } = req.body;

    const User = [
      uuid(),
      firstName,
      lastName,
      otherName,
      email,
      password,
      phoneNumber,
      passportUrl,
    ];
    const search = db.selectAll;
    const found = await execute(search, [email]);
    if (found) {
      res.status(300).send({
        status: 300,
        message: 'user email alread exist',
      });
    } else {
      const queries = db.singUp;
      const signUp = await execute(queries, User);
      if (signUp) {
        try {
          res.status(200).send({
            status: 200,
            message: 'Account has been created successfull',
          });
        } catch (error) {
          res.status(400).send({
            status: 400,
            message: 'Account not created',
          });
        }
      }
    }
  },
};

export default user;
