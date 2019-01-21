import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();
let poolConfig;

if (process.env.NODE_ENV === 'Development') {
  poolConfig = new Pool({
    connectionString: process.env.DATABASE_URL_DEV,
  });
} else if (process.env.NODE_ENV === 'Test') {
  poolConfig = new Pool({
    connectionString: process.env.DATABASE_URL_TEST,
  });
} else {
  poolConfig = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
}
const db = poolConfig;
db.connect(() => {
  console.log('Connection successful');
});
export default db;
