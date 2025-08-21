import pkg from 'pg';        
const { Pool } = pkg;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'order_tracker',
    password: '12345677', 
    port: 5432 
});

export default pool;
