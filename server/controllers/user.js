/* eslint-disable no-multi-assign */
import uuid from 'uuid';
import sqlQueries from '../models/database/queries';
// import connect from '../models/database/database';
import connect from '../models/database/index';

const user = {
  // create user table
  async createTable() {
    const table = sqlQueries.userTable;
    const execute = connect.query(table)
      .then((res) => {
        console.log(res);
        connect.end();
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
      password,
      phoneNumber,
      passportUrl,
    } = req.body;

    const data = [
      uuid(),
      firstName,
      lastName,
      otherName,
      email,
      password,
      phoneNumber,
      passportUrl,
    ];
    const search = sqlQueries.selectAll;
    let get = [];
    get = await connect.query(search, [email]);
    if (get.rowCount > 0) return res.send({ error: 'User already exist' });
    try {
      const queries = sqlQueries.singUp;
      const { rows } = await connect.query(queries, data);

      return res.status(200).send({
        status: 200,
        data: rows[0],
      });
    } catch (error) {
      return res.status(400).send({
        status: 400,
        error,
      });
    }
  },

  // user sign in
  async signIn(req, res) {
    const { email, password } = req.body;
    const data = [email, password];
    try {
      const search = sqlQueries.selectAll += ' AND password = $2';
      let get = [];
      get = await connect.query(search, data);
      console.log(get);
      if (get.rowCount > 0) {
        return res.send({ data: 'User sign in successfully' });
      }
      return res.send({
        error: 'user not found!!!',

      });
    } catch (error) {
      return res.send({
        error,
      });
    }
  },
};
export default user;
