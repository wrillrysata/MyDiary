import Entries from '../controllers/controlEntries';

const router = (app) => {
  app.get('/', (req, res) => {
    res.status(200)
      .send('Welcome to My Diary App');
  });

  app.get('/api/v1/allentries', Entries.getAllEntries); // get all their entries
  app.get('/api/v1/allentries/:id', Entries.getOneEntry); // get one entry
};
export default router;
