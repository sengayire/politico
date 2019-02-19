/* eslint-disable no-multi-assign */
import uuid from 'uuid';
import sqlQueries from '../models/database/queries';
import database from '../models/database/database';
import connect from '../models/database';
import helper from '../helpers/helper';

const user = {
  // create user table
  async createTable() {
    const table = sqlQueries.userTable;
    const execute = database.query(table)
      .then((res) => {
        console.log(res);
        database.end();
      })
      .catch((err) => {
        console.log(err);
        connect.end();
      });
    return execute;
  },

  // sign up new user
  async signUp(req, res) {
    const {
      firstName,
      lastName,
      otherName,
      email,
      phoneNumber,
      passportUrl,
    } = req.body;

    const hasedPassword = helper.hashPassword(req.body.password);

    const data = [
      uuid(),
      firstName,
      lastName,
      otherName,
      email,
      hasedPassword,
      phoneNumber,
      passportUrl,
    ];

    if (!helper.isValidEmail(email)) {
      return res.status(400).send({ message: 'Please enter a valid email address' });
    }

    const search = sqlQueries.selectAll;
    let fetchUser = [];

    fetchUser = await connect.query(search, [email]);

    if (fetchUser.rowCount > 0) return res.send({ error: 'User already exist' });
    try {
      const queries = sqlQueries.singUp;
      const { rows } = await connect.query(queries, data);
      const token = helper.generateToken(rows[0].id);
      return res.status(201).send({
        status: 201,
        data: rows[0].id,
        token,
      });
      // return res.status(200).send({
      //   status: 200,
      //   data: rows[0],
      // });
    } catch (error) {
      return res.status(400).send({
        status: 400,
        error,
      });
    }
  },
  // user sign in
};
export default user;
