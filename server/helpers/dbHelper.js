import { Pool } from 'pg';
/** https://stackoverflow.com/questions/45174120/pg-connect-not-a-function */


const poolConfig = new Pool({
  connectionString: 'postgres://vanessa:password@localhost:5432/diary',
});
const db = poolConfig;
db.connect(() => {
  console.log('Connection successful');
});
export default db;
