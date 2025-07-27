import mysql from 'mysql2/promise';

let connection = null;

const dbConfig = {
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '',
  database: process.env.MYSQL_DATABASE || 'railway',
  port: parseInt(process.env.MYSQL_PORT) || 3306,
  connectTimeout: 60000,
  acquireTimeout: 60000,
  timeout: 60000,
};

export async function dbConnect() {
  try {
    if (!connection) {
      connection = await mysql.createConnection(dbConfig);
      
      console.log(`✅ Connected to MySQL database: ${dbConfig.database} on Railway`);
      
      // Create contacts table if it doesn't exist
      await connection.execute(`
        CREATE TABLE IF NOT EXISTS contacts (
          id INT AUTO_INCREMENT PRIMARY KEY,
          phone VARCHAR(15) NOT NULL UNIQUE,
          name VARCHAR(100) NULL,
          email VARCHAR(255) NULL,
          message TEXT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
          INDEX idx_phone (phone),
          INDEX idx_created_at (created_at)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
      `);
      
      console.log('✅ Contacts table ready');
    }
    return connection;
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    throw error;
  }
}

export async function dbDisconnect() {
  if (connection) {
    await connection.end();
    connection = null;
    console.log('✅ Disconnected from MySQL database');
  }
}
