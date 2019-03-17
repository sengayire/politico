import express from 'express';
import voters from '../controllers/voter';

const votersRoute = express.Router();

// Political Office API endpoints
// votersRoute.post('/create', voters.vortersTable);
votersRoute.post('/', voters.create);

export default votersRoute;
