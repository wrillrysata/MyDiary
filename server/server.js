import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';
import router from './routes/routes';
import CreateTableSchema from './model/CreateTables';

const PORT = (process.env.PORT || 2000);
const app = express();

app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.sendfile('index.html');
});
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));

router(app);

new CreateTableSchema().run();
// returns 404 for unknown routes
app.all('/api*', (req, res) => {
  res.status(404).json({ message: 'The URL you entered does not exist' });
});
app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname,'index.html'));
});
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
export default app;
