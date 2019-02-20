
const candidatesQueries = {};

// create table to  store offices
const candidatesTable = `CREATE TABLE IF NOT EXISTS candidates(
  id UUID NOT NULL,
  name VARCHAR(30) NOT NULL,
  office UUID NOT NULL REFERENCES offices(id),
  party UUID NOT NULL,
  candidate UUID NOT NULL REFERENCES users(id),
  created_date TIMESTAMP,
  modified_date TIMESTAMP,
  PRIMARY KEY(office, candidate)
   )`;

// quiery to fetch paties
const fetchCandidate = 'SELECT * FROM candidates';

// Query to create office
const createCandidate = 'INSERT INTO candidates(id,name,office,Party,candidate) VALUES($1,$2,$3,$4,$5)';

candidatesQueries.createCandidate = createCandidate;
candidatesQueries.fetchCandidate = fetchCandidate;
candidatesQueries.candidatesTable = candidatesTable;

export default candidatesQueries;
