import express from 'express';
import dotenv from 'dotenv';
// import swagger from 'swagger-ui-express';
// import docs from 'swagger-jsdoc';
// import swaggerDefinition from '../swagger.json';
import router from './routes/party';
import officeRoute from './routes/office';
import candidateRoute from './routes/candidate';
import user from './routes/user';
import vote from './routes/voter';
import 'babel-polyfill';

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const swaggerDefinition = {
//   info: {
//     title: 'Politico api Documentation',
//     version: '2.0',
//     description: 'Endpoints to test the user registration routes',
//   },
//   host: 'localhost:5000',
//   basePath: '/api/v1',
//   securityDefinitions: {
//     bearerAuth: {
//       type: 'apiKey',
//       name: 'Authorization',
//       scheme: 'bearer',
//       in: 'header',
//     },
//   },
// };
// const options = {
//   swaggerDefinition,
//   apis: ['./server/routes/*.js'],
// };
// const swaggerSpec = docs(options);
// app.get('/swagger', (req, res) => {
//   res.setHeader('Content-Type', 'application/json');
//   res.send(swaggerSpec);
// });
// // adding swagger documantation to my endpoints
// app.use('/', swagger.serve, swagger.setup(swaggerSpec));

// political parties API
app.use('/api/v1/parties', router);

// political Office API route
app.use('/api/v1/offices', officeRoute);

// user API
app.use('/api/v1/users', user);

app.use('/api/v1/votes/', vote);

// candidate route
app.use('/api/v1/office', candidateRoute);

// assining a port for runing node
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
export default app;
