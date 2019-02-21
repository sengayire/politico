
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
const fetchOffices = 'SELECT * FROM offices WHERE name = $1';

// Query to create office
const createOffice = 'INSERT INTO offices(id, name, type) VALUES($1,$2,$3)';

officeQueries.createOffice = createOffice;
officeQueries.fetchOffices = fetchOffices;
officeQueries.officeTable = officeTable;

export default officeQueries;
