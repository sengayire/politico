import { errors } from 'celebrate';
import express from 'express';
import validate from '../helpers/partyValidation';
import editValidation from '../helpers/valideteEdit';
import party from '../controllers/party';
import helper from '../helpers/helper';


const router = express.Router();

// Political party APIs
router.post('/create', party.partyTable);
router.post('/', helper.verifyToken, validate, party.create);
router.get('/:id', party.getOneParty);
router.delete('/:id', helper.verifyToken, party.deleteOneParty);
router.patch('/:id/:name', helper.verifyToken, editValidation, party.editOneParty);
router.get('/', party.getAllParties);

router.use(errors());
export default router;
