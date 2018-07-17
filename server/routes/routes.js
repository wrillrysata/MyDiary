import Entries from '../controllers/controlEntries';

const entry = new Entries();
// const entry2 = new Entries();

const router = (app) => {
  app.get('/', (req, res) => {
    res.status(200)
      .send('Welcome to My Diary App');
  });

  app.get('/api/v1/allentries', entry.getAllEntries); // get all their entries
};
export default router;
