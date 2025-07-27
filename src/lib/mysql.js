import mysql from 'mysql2/promise';

let connection = null;

const dbConfig = {
  // Use Railway's auto-generated variables first, fallback to custom ones
  host: process.env.MYSQLHOST || process.env.MYSQL_HOST,
  user: process.env.MYSQLUSER || process.env.MYSQL_USER || 'root',
  password: process.env.MYSQLPASSWORD || process.env.MYSQL_PASSWORD,
  database: process.env.MYSQLDATABASE || process.env.MYSQL_DATABASE || 'railway',
  port: parseInt(process.env.MYSQLPORT || process.env.MYSQL_PORT) || 3306,
  connectTimeout: 60000,
  // Remove problematic options
  ssl: false, // Railway handles SSL automatically
};

export async function dbConnect() {
  try {
    // Create fresh connection each time for serverless
    const newConnection = await mysql.createConnection(dbConfig);
    
    console.log(`✅ Connected to Railway MySQL: ${dbConfig.database}`);
    console.log(`✅ Host: ${dbConfig.host}`);
    
    // Create table if needed
    await newConnection.execute(`
      CREATE TABLE IF NOT EXISTS contacts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        phone VARCHAR(15) NOT NULL UNIQUE,
        name VARCHAR(100) NULL,
        email VARCHAR(255) NULL,
        message TEXT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `);
    
    return newConnection;
  } catch (error) {
    console.error('❌ Railway MySQL connection failed:', {
      error: error.message,
      code: error.code,
      host: dbConfig.host,
      database: dbConfig.database,
      user: dbConfig.user
    });
    throw error;
  }
}

export async function dbDisconnect() {
  // Handle disconnection if needed
}
