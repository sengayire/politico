import express from 'express';
import router from './routes/party';
import officeRoute from './routes/office';

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

// assining a port for runing node
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
export default app;
