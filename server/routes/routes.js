
import userController from '../controllers/userController';
import validation from '../middleware/validation';

const router = (app) => {
  app.get('/', (req, res) => {
    res.status(200)
      .send('Welcome to My Diary App');
  });
  app.post('/v1/api/auth/signup', validation.userSignupValidation, userController.findUser, userController.createUser);
  app.post('/v1/api/auth/login', userController.loginUser);
};


export default router;
