/* eslint-disable */
/* https://mherman.org/blog/2015/02/12/postgresql-and-nodejs/ */
import db from '../helpers/dbHelper';
import bcrypt from '../helpers/bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

 dotenv.config()
 const secret = process.env.SECRET_KEY;

export default{
   createUser: (req, res, next) => {
            const {
                userName, email, password, confirmPassword
            } = req.body;
            const sql = 'INSERT INTO users ("userName", email, password) values($1, $2, $3) RETURNING *';
            db.query(sql, [userName, email,bcrypt.hashPassword(password)]),
            (err, result) => {
                if (err) {
                    console.log(err);
                   return res.status(500).json({
                    message: 'User registration was not successful, try again please.',
                   });
                  
                } else {
                    return res.status(201).json({
                       message: 'User registration successful',
                       token
                      });
                      console.log('inserted');
        }
  next();
    }
    },
    loginUser: (req, res) => {
        const {
            email, password
        } = req.body;
       
        const sql = 'SELECT * FROM users WHERE email = $1';
        db.query(sql, [email], (err, result) => {
            if(err){
                console.log(err);
                return res.status(500).json({
                    message: 'There was an error while signing in user'
                });
            }else if (!result){
                return res.status(404).json({
                    message: 'No user was found'
                })
            }
            const user = result.rows[0];
            
            const rightPassword = bcrypt.comparePassword(password,user.password);
            if(!rightPassword){
                return res.status(401).json({
                    message: 'Password does not match',
                    token: null,
                  });
            }else{
                const payload = {
                    name: user.userName 
                  };
                  const token = jwt.sign(payload, secret, {
                    expiresIn: 1440
                  });
              return res.status(200).json({
                message: 'Successfully logged in',
                token,
              });
            
        }
    });
}
}

        
/* eslint-disable */