import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

/*
* For this this work, I've created a .env file and assigned values
* to properties like PGHOST, PGPORT, PGUSER, PGPASSWORD, and PGDATABASE
* I've also installed dotenv and called dotenv.config(); when createthe
* server is starting up. dotenv.config(); ensures the properties
* defined in the .env file are available to the app as it runs
*/
const connect = pool.on('connect', () => {
  console.log('connected to the db');
});

export default connect;
