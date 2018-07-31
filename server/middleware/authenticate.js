/* https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens#the-actual-node-application-serverjs */
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();
const secret = process.env.SECRET_KEY;

export default {
  checkToken: (req, res, next) => {
    // check if there's a token
    const token = req.body.token || req.params || req.headers['x-access-token'];
  
    // Decode token
    if (token) {
      // Verifies secret 
      jwt.verify(token, secret, function(err, decoded) {      
        if (err) {
          return res.json({ success: false, message: 'Failed to authenticate token.' });    
        } else {
            return res.json({ success: 'success', message: 'Access granted' }); 
          req.decoded = decoded;    
        }
      });
  
    } else {
      return res.status(401).send({ 
          success: false, 
          message: 'No token provided.' 
      });
  
    }
    next();
}
}
  