import express from 'express';
import user from '../controllers/user';

const userRoute = express.Router();
userRoute.post('/userTable', user.createTable);
userRoute.post('/auth/signup', user.signUp);
userRoute.post('/auth/signin', user.signIn);

export default userRoute;
