import express from 'express';
import dotenv from 'dotenv';
import router from './routes/party';
import officeRoute from './routes/office';
import user from './routes/user';
import vote from './routes/voter';
import 'babel-polyfill';

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send({
    message: 'Welcome to my API',
  });
});
// political parties API
app.use('/api/v1/parties', router);

// political Office API
app.use('/api/v1/offices', officeRoute);

// user API
app.use('/api/v1/users', user);

app.use('/api/v1/vote', vote);
// assining a port for runing node
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
export default app;
