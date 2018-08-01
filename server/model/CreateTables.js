import dotenv from 'dotenv';
import pool from '../helpers/dbHelper';

/**
 * @class
*/
dotenv.config();


export default class CreateTableSchema {
  /**
   * @constructor
  */
  constructor() {
    this.pool = pool;
    this.createTables = `CREATE TABLE IF NOT EXISTS users(
            id serial PRIMARY KEY NOT NULL,
            username varchar(255) NOT NULL,
            email varchar(255) NOT NULL,
            password varchar(255) NOT NULL,
            created_at timestamp DEFAULT NOW()
          );
          
          CREATE TABLE IF NOT EXISTS entries(
            id serial PRIMARY KEY NOT NULL,
            user_id integer NOT NULL, 
            body varchar(255) NOT NULL,
            created_at timestamp DEFAULT NOW()
          );
          CREATE TABLE IF NOT EXISTS extrastuff(
            id serial PRIMARY KEY NOT NULL,
            user_id integer NOT NULL, 
            body varchar(255) NOT NULL,
            created_at timestamp DEFAULT NOW()
          );
          
          CREATE TABLE IF NOT EXISTS notifications(
            id serial PRIMARY KEY NOT NULL,
            title varchar(255) NOT NULL,
            user_id varchar(255) NOT NULL,
            created_at timestamp DEFAULT NOW(),
            time timestamp NOT NULL
          )`


  }
  run() {
        return this.pool.query(this.createTables)
          .then(() => {
              this.pool.end();
          })
          .catch(err => {
              console.log(err);
        });
    };
}
