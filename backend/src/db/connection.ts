import { Pool } from 'pg';

const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'your_database',
  password: 'your_password',
  port: 5432,
});

export const query = (text: string, params?: any[]) => {
  return pool.query(text, params);
};

export default {
  query,
};