import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

/*
* For this this work, I've created a .env file and assigned values
* to properties like PGHOST, PGPORT, PGUSER, PGPASSWORD, and PGDATABASE
* I've also installed dotenv and called dotenv.config(); when the
* server is starting up. dotenv.config(); ensures the properties
* defined in the .env file are available to the app as it runs
*/
const connect = async () => pool.connect();

const execute = async (sql, data = []) => {
  const connection = await connect();
  try {
    return await connection.query(sql, data);
  } catch (error) {
    console.log(error.message);
  } finally {
    connection.release();
  }
  return connection;
};
export default execute;
