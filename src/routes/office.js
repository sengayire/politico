import express from 'express';
import office from '../controllers/office';

const officeRoute = express.Router();
// Political party APIs
officeRoute.post('/', office.create);
// router.get('/', party.getAll);
// router.get('/:id', party.getOne);
export default officeRoute;
