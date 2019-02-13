import express from 'express';
import office from '../controllers/office';

const officeRoute = express.Router();

// Political Office API endpoints
officeRoute.post('/', office.create);
officeRoute.get('/', office.getAll);
officeRoute.get('/:id', office.getOne);
officeRoute.delete('/:id', office.deleteOne);
export default officeRoute;
