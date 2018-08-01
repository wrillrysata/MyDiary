import { Pool } from 'pg';
import dotenv from 'dotenv';
/** https://stackoverflow.com/questions/45174120/pg-connect-not-a-function */

dotenv.config();
const poolConfig = new Pool({
  connectionString: process.env.DATABASE_URL,
});
const db = poolConfig;
db.connect(() => {
  console.log('Connection successful');
});
export default db;
