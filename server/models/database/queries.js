
const sqlQueries = {};

// creating a parcels table
const userTable = `CREATE TABLE IF NOT EXISTS users(
    id UUID PRIMARY KEY NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name   VARCHAR(30) NOT NULL,
    other_name VARCHAR(30),
    email VARCHAR(30),
    password VARCHAR(500),
    phone_number VARCHAR(30),
    passport_url VARCHAR(30),
    created_date TIMESTAMP,
    modified_date TIMESTAMP
     )`;

// user sign up
const signUp = 'INSERT INTO users(id, first_name,last_name, other_name, email,password,phone_number,passport_url) VALUES( $1,$2,$3,$4,$5,$6,$7,$8) RETURNING*';

// // search in user table
const selectAll = 'SELECT * FROM users WHERE email = $1';

sqlQueries.userTable = userTable;
sqlQueries.singUp = signUp;
sqlQueries.selectAll = selectAll;
export default sqlQueries;
