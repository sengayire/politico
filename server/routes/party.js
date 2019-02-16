import { errors } from 'celebrate';
import express from 'express';
import party from '../controllers/party';
import validate from '../helpers/partyValidation';
import editValidation from '../helpers/valideteEdit';

const router = express.Router();

// Political party APIs
router.post('/', validate, party.create);
router.get('/', party.getAllParties);
router.get('/:id', party.getOneParty);
router.delete('/:id', party.deleteOne);
router.patch('/:id/:name', editValidation, party.editOne);

router.use(errors());
export default router;
