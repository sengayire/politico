
import express from 'express';
import party from '../controllers/party';
import validate from '../helpers/partyValidation';


const router = express.Router();

// Political party APIs
router.post('/create', validate, party.partyTable);
router.post('/', validate, party.create);

export default router;
