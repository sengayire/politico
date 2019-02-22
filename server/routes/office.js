import { errors } from 'celebrate';
import express from 'express';
import office from '../controllers/office';
import validate from '../helpers/officeValidation';

const officeRoute = express.Router();

// Political Office API endpoints
officeRoute.post('/create', validate, office.officeTable);
officeRoute.post('/', validate, office.create);
officeRoute.get('/:id/result', office.results);
officeRoute.get('/', office.getAllOffices);
officeRoute.get('/:id', office.getOneOffice);


officeRoute.use(errors());
export default officeRoute;
