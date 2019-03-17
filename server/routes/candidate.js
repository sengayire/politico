import { errors } from 'celebrate';
import express from 'express';
import candidates from '../controllers/candidates';
import validate from '../helpers/validateCadidate';
import helpers from '../helpers/helper';

const candidateRoute = express.Router();

// Political Office API endpoints
// candidateRoute.post('/create', candidates.candidatesTable);
candidateRoute.post('/:office/register', helpers.verifyToken, validate, candidates.create);

candidateRoute.use(errors());
export default candidateRoute;
