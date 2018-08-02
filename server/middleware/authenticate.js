/* https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens#the-actual-node-application-serverjs */
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();
const secret = process.env.SECRET_KEY;

export default {
  checkToken: (req, res, next) => {
    console.log('req headers', req.headers);
    const token = req.headers.authorization;

    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, secret, (err, decoded) => {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      req.decoded = decoded;
    });
    next();
  }
};
