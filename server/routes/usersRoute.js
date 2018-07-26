import express from 'express';
import UserController from '../controllers/UserController';

const usersRouter = express.Router();
const User = new UserController();

usersRouter.post('/auth/signup', (req, res) => {
  User.signUp(req, res);
});
export default usersRouter;
