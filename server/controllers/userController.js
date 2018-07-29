/* eslint-disable */
/* https://mherman.org/blog/2015/02/12/postgresql-and-nodejs/ */
import db from '../helpers/dbHelper';
import bcrypt from '../helpers/bcrypt';
import jwt from 'jsonwebtoken';

export default{
   createUser: (req, res, next) => {
            const {
                userName, email, password, confirmPassword
            } = req.body;
            const sql = 'INSERT INTO users ("userName", email, password) values($1, $2, $3) RETURNING *';
            // const hash = bcrypt.hashPassword(password);
            db.query(sql, [userName, email,bcrypt.hashPassword(password)]),
            (err, result) => {
                if (err) {
                    console.log(err);
                   return res.status(500).json({
                    message: 'User registration was not successful, try again please.',
                   });
                  
                } else {
                    const token = jwt.sign({ id: result.rows.id }, cert, { algorithm: 'RS256' }, {
                        expiresIn: 60 * 60,
                      });
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
            const token = jwt.sign({ id: result.rows.id }, 'shhhh', {
                expiresIn: 60 * 60,
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