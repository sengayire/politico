
const officeQueries = {};

// create table to  store offices
const officeTable = `CREATE TABLE IF NOT EXISTS offices(
  id UUID PRIMARY KEY NOT NULL,
  type VARCHAR(30) NOT NULL,
  name VARCHAR(30) NOT NULL,
  created_date TIMESTAMP,
  modified_date TIMESTAMP
   )`;

// quiery to fetch paties

const fetchOffices = 'SELECT * FROM offices WHERE id = $1';

// Query to create office
const createOffice = 'INSERT INTO offices(id, name, type) VALUES($1,$2,$3)';

// count result
const results = 'SELECT candidate, office, COUNT(candidate) AS result FROM votes WHERE office=$1 GROUP BY candidate, office';

officeQueries.createOffice = createOffice;
officeQueries.fetchOffices = fetchOffices;
officeQueries.officeTable = officeTable;
officeQueries.results = results;

export default officeQueries;
