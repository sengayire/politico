import express from 'express';
import user from '../controllers/user';

const userRoute = express.Router();
// userRoute.post('/userTable', user.createTable);


/**
* @swagger
* /users/auth/signup:
*   post:
*     tags:
*       - Authantication
*     name: user SignUP
*     summary: User sigUp
*     consumes:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema:
*           type: object
*           properties:
*             FirstName:
*               type: string
*             LastName:
*               type: string
*             OtherName:
*               type: string
*             email:
*               type: string
*             password:
*               type: string
*               format: password
*             passportUrl:
*               type: string
*             phoneNumber:
*               type: string
*         required:
*           - email
*           - password
*     responses:
*       201:
*         description: User signUp successfully
*       401:
*         description: username not found in db
*/
userRoute.post('/auth/signup', user.signUp);

/**
* @swagger
* /users/auth/signin:
*   post:
*     tags:
*       - Authantication
*     name: user Signin
*     summary: User signIn API Endpoint
*     consumes:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema:
*           type: object
*           properties:
*             email:
*               type: string
*             password:
*               type: string
*               format: password
*         required:
*           - email
*           - password
*     responses:
*       200:
*         description: User signed in successfully
*       401:
*         description: username not found in db
*       403:
*         description: Username and password don't match
*/
userRoute.post('/auth/signin', user.signIn);

export default userRoute;
