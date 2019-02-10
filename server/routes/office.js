import express from 'express';
import office from '../controllers/office';

const officeRoute = express.Router();
// Political party APIs
officeRoute.post('/', office.create);
officeRoute.get('/', office.getAll);
officeRoute.get('/:id', office.getOne);
export default officeRoute;
