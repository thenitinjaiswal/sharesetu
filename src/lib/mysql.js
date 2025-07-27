import mysql from 'mysql2/promise';

let connection = null;

const dbConfig = {
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '',
  database: process.env.MYSQL_DATABASE || 'sharesetu_local',
  port: parseInt(process.env.MYSQL_PORT) || 3306,
  // Remove these problematic options:
  // acquireTimeout: 60000,     ❌ Invalid for single connections
  // timeout: 60000,           ❌ Invalid for single connections  
  // reconnect: true,          ❌ Invalid for single connections
  
  // Keep only valid connection options:
  connectTimeout: 20000,        // ✅ Valid connection timeout
  multipleStatements: false,    // ✅ Security best practice
};

export async function dbConnect() {
  try {
    if (!connection) {
      // Create connection
      connection = await mysql.createConnection(dbConfig);
      
      console.log(`✅ Connected to MySQL database: ${dbConfig.database} on ${dbConfig.host}`);
      
      // Create contacts table if it doesn't exist
      await connection.execute(`
        CREATE TABLE IF NOT EXISTS contacts (
          id INT AUTO_INCREMENT PRIMARY KEY,
          phone VARCHAR(15) NOT NULL UNIQUE,
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
    console.error('❌ Database connection failed:', error.message);
    
    // Detailed error handling
    if (error.code === 'ECONNREFUSED') {
      console.error('💡 Fix: Start your MySQL service');
    } else if (error.code === 'ER_ACCESS_DENIED_ERROR') {
      console.error('💡 Fix: Check your username and password in .env.local');
    } else if (error.code === 'ER_BAD_DB_ERROR') {
      console.error('💡 Fix: Create the database first');
    }
    
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
