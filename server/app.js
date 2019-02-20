import express from 'express';
import dotenv from 'dotenv';
import router from './routes/party';
import officeRoute from './routes/office';
import candidateRoute from './routes/candidate';
import user from './routes/user';
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

// political Office API route
app.use('/api/v1/offices', officeRoute);

// user API
app.use('/api/v1/users', user);

// candidate route
app.use('/api/v1/office', candidateRoute);

// assining a port for runing node
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
export default app;
