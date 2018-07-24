import Entries from '../controllers/controlEntries';

const router = (app) => {
  app.get('/', (req, res) => {
    res.status(200)
      .send('Welcome to My Diary App');
  });

  app.get('/api/v1/allentries', Entries.getAllEntries); // get all their entries
  app.get('/api/v1/allentries/:id', Entries.getOneEntry); // get one entry
  app.post('/api/v1/new/:id/:note', Entries.addEntry); // add entry
  app.put('/api/v1/edit/:id/:note', Entries.editEntry); // edit entry
};
export default router;
