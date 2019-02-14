import express from 'express';
import office from '../controllers/office';

const officeRoute = express.Router();

// Political Office API endpoints
officeRoute.post('/', office.create);
officeRoute.get('/', office.getAllOffices);
officeRoute.get('/:id', office.getOneOffice);
officeRoute.delete('/:id', office.deleteOne);
export default officeRoute;
