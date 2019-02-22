
import express from 'express';
import validate from '../helpers/partyValidation';
import party from '../controllers/party';


const router = express.Router();

// Political party APIs
router.post('/create', validate, party.partyTable);
router.post('/', validate, party.create);
router.get('/:id', party.getOneParty);
router.delete('/:id', party.deleteOneParty);
router.patch('/:id/:name', party.editOneParty);
router.get('/', party.getAllParties);

export default router;
