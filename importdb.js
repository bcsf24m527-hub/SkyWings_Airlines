const mysql = require('mysql2/promise');
const fs = require('fs');

(async () => {
  const pool = await mysql.createPool({
    host: 'mysql-production-7094.up.railway.app', // use your Railway public host if available
    user: 'root',
    password: 'sdanrgzkqKRmSsUoNiGMRYPsMqgttZBl',
    database: 'railway',
    port: 3306
  });

  const sql = fs.readFileSync('./backend/database/schema.sql', 'utf-8');
  const statements = sql.split(/;\s*$/m);

  for (let stmt of statements) {
    if (stmt.trim()) await pool.query(stmt);
  }

  console.log('Database imported successfully!');
  process.exit(0);
})();
