import { dbConnect } from './mysql.js';

export class ContactModel {
  static async create(contactData) {
    try {
      const connection = await dbConnect();
      
      // Handle both old format (just phone) and new format (full contact)
      if (typeof contactData === 'string') {
        // Old format - just phone number
        const [result] = await connection.execute(
          'INSERT INTO contacts (phone) VALUES (?)',
          [contactData]
        );
        
        const [contact] = await connection.execute(
          'SELECT * FROM contacts WHERE id = ?',
          [result.insertId]
        );
        return contact[0];
      } else {
        // New format - full contact object
        const { name, email, phone, message } = contactData;
        
        const [result] = await connection.execute(
          'INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)',
          [name || null, email || null, phone, message || null]
        );
        
        const [contact] = await connection.execute(
          'SELECT * FROM contacts WHERE id = ?',
          [result.insertId]
        );
        return contact[0];
      }
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new Error('Phone number already exists');
      }
      throw error;
    }
  }

  static async findByPhone(phone) {
    try {
      const connection = await dbConnect();
      const [contacts] = await connection.execute(
        'SELECT * FROM contacts WHERE phone = ?',
        [phone]
      );
      return contacts[0] || null;
    } catch (error) {
      throw error;
    }
  }

  static async findByEmail(email) {
    try {
      const connection = await dbConnect();
      const [contacts] = await connection.execute(
        'SELECT * FROM contacts WHERE email = ?',
        [email]
      );
      return contacts[0] || null;
    } catch (error) {
      throw error;
    }
  }

  static async findAll(orderBy = 'created_at', order = 'DESC') {
    try {
      const connection = await dbConnect();
      const [contacts] = await connection.execute(
        `SELECT * FROM contacts ORDER BY ${orderBy} ${order}`
      );
      return contacts;
    } catch (error) {
      throw error;
    }
  }

  static async count() {
    try {
      const connection = await dbConnect();
      const [result] = await connection.execute(
        'SELECT COUNT(*) as count FROM contacts'
      );
      return result[0].count;
    } catch (error) {
      throw error;
    }
  }

  static async deleteById(id) {
    try {
      const connection = await dbConnect();
      const [result] = await connection.execute(
        'DELETE FROM contacts WHERE id = ?',
        [id]
      );
      return result.affectedRows > 0;
    } catch (error) {
      throw error;
    }
  }
}
