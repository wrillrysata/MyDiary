/* eslint disable */
import bcryptjs from 'bcryptjs';
import pool from '../helpers/dbHelper';


class User {
/**
 * @constructor
 */
 constructor() {
     this.pool = pool;
}
 create(req, callback){
     const{ 
         email, username, password 
        } = req.body;
        const saltRounds = 10;
        const salt = bcryptjs.genSaltSync(saltRounds);
        const hash = bcryptjs.hashSync(password, salt);
                const sql = 'INSERT INTO users(username, email, password) VALUES($1, $2, $3)';
                const values = [ email, username, hash ];
                this.pool.query(sql, values, (error) => {
                    (error) ?  callback(error.message) : callback(error); 
                       
                    })

                    }
                }
        
export default User;
