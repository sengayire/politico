import express from 'express';
import user from '../controllers/user';

const userRoute = express.Router();
// userRoute.post('/userTable', user.createTable);
userRoute.post('/signUp', user.signUp);

export default userRoute;
