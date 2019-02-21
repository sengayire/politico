
import express from 'express';
import candidates from '../controllers/candidates';

const candidateRoute = express.Router();

// Political Office API endpoints
candidateRoute.post('/create', candidates.candidatesTable);
candidateRoute.post('/', candidates.create);

export default candidateRoute;
