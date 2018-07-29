
const router = (app) => {
  app.get('/', (req, res) => {
    res.status(200)
      .send('Welcome to My Diary App');
  });
};


export default router;
