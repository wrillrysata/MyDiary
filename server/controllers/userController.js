/* eslint-disable */
/* https://mherman.org/blog/2015/02/12/postgresql-and-nodejs/ */
import db from '../helpers/dbHelper';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default{
        createUser: (req, res, next) => {
            const {
                userName, email, password, confirmPassword
            } = req.body;
            const sql = 'INSERT INTO users ("userName", email, password) values($1, $2, $3) RETURNING *';
            const saltRounds = 10;
          const salt = bcryptjs.genSaltSync(saltRounds);
            const hash = bcryptjs.hashSync(password, salt);
            db.query(sql, [userName, email,password]),
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

    }
    }

}
        
/* eslint-disable */