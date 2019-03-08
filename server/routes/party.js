import { errors } from 'celebrate';
import express from 'express';
import validate from '../helpers/partyValidation';
import editValidation from '../helpers/valideteEdit';
import party from '../controllers/party';
import helper from '../helpers/helper';


const router = express.Router();

// Political party APIs
router.post('/create', party.partyTable);
/**
* @swagger
* /parties/:
*   post:
*     tags:
*       - Parties
*     name: create new party
*     summary: create new party API Endpoint
*     consumes:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema:
*           type: object
*           properties:
*             name:
*               type: string
*             HQAddress:
*               type: string
*         required:
*           - name
*           - HQAddress
*     responses:
*       201:
*         description: Party created successfully
*       404:
*         description: Party not found
*/
router.post('/', helper.verifyToken, validate, party.create);

/**
* @swagger
* /parties/{id}:
*   get:
*     tags:
*       - Parties
*     name: get one party by id
*     summary: fetch party by id API Endpoint
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
*         description: Party found successfully
*       404:
*         description: Party not found
*/
router.get('/:id', party.getOneParty);
/**
* @swagger
* /parties/{id}:
*   delete:
*     tags:
*       - Parties
*     name: delete one party
*     summary: delete party by id
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
*         description: Party deleted successfully
*       404:
*         description: Party not deleted
*/
router.delete('/:id', helper.verifyToken, party.deleteOneParty);
/**
* @swagger
* /parties/{id}:
*   patch:
*     tags:
*       - Parties
*     name: update party
*     summary: update party by id
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
*         description: Party updated successfully
*       404:
*         description: Party not updated
*/
router.patch('/:id/:name', helper.verifyToken, editValidation, party.editOneParty);
/**
* @swagger
* /parties/:
*   get:
*     tags:
*       - Parties
*     name: fecth all parties
*     summary: get all  available parties API Endpoint
*     consumes:
*       - application/json
*     responses:
*       201:
*         description: success
*       404:
*         description:  no party found
*/
router.get('/', party.getAllParties);

router.use(errors());
export default router;
