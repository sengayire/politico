import express from 'express';
import user from '../controllers/user';

const userRoute = express.Router();
userRoute.post('/userTable', user.createTable);
userRoute.post('/signup', user.signUp);
userRoute.post('/signin', user.signIn);

export default userRoute;
