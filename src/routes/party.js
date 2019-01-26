import express from 'express';
import party from '../controllers/party';

const router = express.Router();

router.post('/', party.create);
router.get('/', party.getAll);

export default router;
