
const partyQueries = {};

// create table to  store offices
const createPartyTableQuery = `CREATE TABLE IF NOT EXISTS parties(
  id UUID PRIMARY KEY NOT NULL,
  name VARCHAR(30) NOT NULL,
  hqAddress VARCHAR(30) NOT NULL,
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  modified_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
   )`;

// quiery to fetch paties
const fetchParties = 'SELECT * FROM parties';

// Query to create office
const createParties = 'INSERT INTO parties(id, name, hqAddress) VALUES($1,$2,$3)';

// Query to delete party
const deleteParty = 'DELETE FROM parties WHERE id = $1';

// Query to Edit party
const editParty = 'UPDATE parties SET name = $1 WHERE id = $2 RETURNING *';

partyQueries.createParties = createParties;
partyQueries.fetchParties = fetchParties;
partyQueries.deleteParty = deleteParty;
partyQueries.editParty = editParty;
partyQueries.createPartyTableQuery = createPartyTableQuery;

export default partyQueries;
