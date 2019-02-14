import express from 'express';
import party from '../controllers/party';

const router = express.Router();
// Political party APIs
router.post('/', party.create);
router.get('/', party.getAllParties);
router.get('/:id', party.getOneParty);
router.delete('/:id', party.deleteOne);
router.patch('/:id/:name', party.editOne);

export default router;
