import { Pool } from 'pg';

const connection = process.env.DATABASE_URL || 'postgres://vanessa:password@localhost:5432/diary';

const pool = new Pool({
  connectionString: connection,
});

export default pool;
