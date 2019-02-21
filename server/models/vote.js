const votersQueries = {};

// create table to  store offices
const VotersTable = `CREATE TABLE IF NOT EXISTS votes(
  id UUID NOT NULL,
  createdOn TIMESTAMP,
  createdBy UUID NOT NULL REFERENCES users(id),
  candidate UUID NOT NULL,
  office UUID NOT NULL REFERENCES offices(id),
  PRIMARY KEY(createdBy, office)
   )`;

// quiery to fetch paties
const fetchVoter = 'SELECT * FROM votes';

// Query to create office
const vote = 'INSERT INTO votes(id,createdOn,createdBy,candidate,office) VALUES($1,$2,$3,$4,$5)';

votersQueries.vote = vote;
votersQueries.fetchVoter = fetchVoter;
votersQueries.VotersTable = VotersTable;

export default votersQueries;
