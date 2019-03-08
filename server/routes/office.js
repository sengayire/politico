import { errors } from 'celebrate';
import express from 'express';
import office from '../controllers/office';
import validate from '../helpers/officeValidation';
import helpers from '../helpers/helper';

const officeRoute = express.Router();

// Political Office API endpoints
officeRoute.post('/create', validate, office.officeTable);
/**
* @swagger
* /offices/:
*   post:
*     tags:
*       - offices
*     name: create new office
*     summary: create new office API Endpoint
*     consumes:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema:
*           type: object
*           properties:
*             type:
*               type: string
*             name:
*               type: string
*         required:
*           - type
*           - name
*     responses:
*       201:
*         description: office created successfully
*       401:
*         description: office already exists
*/
officeRoute.post('/', helpers.verifyToken, validate, office.create);


officeRoute.get('/:id/result', office.results);

/**
* @swagger
* /offices/:
*   get:
*     tags:
*       - offices
*     name: fecth all offices
*     summary: get all  offices
*     consumes:
*       - application/json
*     responses:
*       201:
*         description: success
*       404:
*         description:  no party found
*/
officeRoute.get('/', office.getAllOffices);

/**
* @swagger
* /offices/{id}:
*   get:
*     tags:
*       - offices
*     name: get one office by id
*     summary: fetch office by id API Endpoint
*     consumes:
*       - application/json
*     parameters:
*       - name: id
*         in: query
*         schema:
*           type: object
*           properties:
*             id:
*               type: string
*         required:
*           - id
*     responses:
*       200:
*         description: office found successfully
*       404:
*         description: office not found
*/
officeRoute.get('/:id', office.getOneOffice);


officeRoute.use(errors());
export default officeRoute;
