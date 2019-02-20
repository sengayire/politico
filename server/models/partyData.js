
const partyQueries = {};

// create table to  store offices
const createPartyTableQuery = `CREATE TABLE IF NOT EXISTS parties(
  id UUID PRIMARY KEY NOT NULL,
  name VARCHAR(30) NOT NULL,
  hqAddress VARCHAR(30) NOT NULL,
  created_date TIMESTAMP,
  modified_date TIMESTAMP
   )`;

// quiery to fetch paties
const fetchParties = 'SELECT * FROM parties';

// Query to create office
const createParties = 'INSERT INTO parties(id, name, hqAddress) VALUES($1,$2,$3)';

partyQueries.createParties = createParties;
partyQueries.fetchParties = fetchParties;
partyQueries.createPartyTableQuery = createPartyTableQuery;

export default partyQueries;
