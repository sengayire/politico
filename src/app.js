import express from 'express';
import router from './routes/party';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send({
    message: 'Welcome to my API',
  });
});

app.use('/api/v1/parties', router);
// assining a port for runing node
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
export default app;
