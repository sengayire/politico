
import express from 'express';
import candidates from '../controllers/candidates';

const candidateRoute = express.Router();

// Political Office API endpoints
candidateRoute.post('/create', candidates.candidatesTable);
candidateRoute.post('/', candidates.create);
// officeRoute.get('/', office.getAllOffices);
// officeRoute.get('/:id', office.getOneOffice);
// officeRoute.delete('/:id', office.deleteOne);

// officeRoute.use(errors());
export default candidateRoute;
