import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes/routes';
import CreateTableSchema from './model/CreateTables';

const PORT = (process.env.PORT || 3000);
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));

router(app);

new CreateTableSchema().run();
// returns 404 for unknown routes
app.all('*', (req, res) => {
  res.status(404).json({ message: 'The URL you entered does not exist' });
});
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
export default app;
