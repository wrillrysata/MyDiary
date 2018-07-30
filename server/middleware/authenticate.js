/* eslint-disable */
/* https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens#the-actual-node-application-serverjs */
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config()
const secret = process.env.SECRET_KEY;

export default {
  
  checkToken : (req, res) => {
    // check if there's a token
    const token = req.body.token || req.params || req.headers['x-access-token'];
  
    // decode token
    if (token) {
   // console.log(token);
   // console.log(' token present');
      // verifies secret 
      jwt.verify(token, secret, function(err, decoded) {      
        if (err) {
          return res.json({ success: false, message: 'Failed to authenticate token.' });    
        } else {
            return res.json({ success: 'success', message: 'Access granted' }); 
          req.decoded = decoded;    
        }
      });
  
    } else {
  
      // if there is no token
      // return an error
      return res.status(403).send({ 
          success: false, 
          message: 'No token provided.' 
      });
  
    }
}
}
  