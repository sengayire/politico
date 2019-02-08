import express from 'express';
import party from '../controllers/party';

const router = express.Router();
// Political party APIs
router.post('/', party.create);
router.get('/', party.getAll);
router.get('/:id', party.getOne);
router.delete('/:id', party.deleteOne);

export default router;
