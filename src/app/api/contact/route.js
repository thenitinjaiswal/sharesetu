import { ContactModel } from '../../../lib/contactModel.js';
import { isValidPhone } from '../../../lib/validatePhone.js';

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req) {
  try {
    const body = await req.json();
    
    // Handle both old format (just phone) and new format (full contact)
    if (typeof body === 'object' && body.name) {
      // New format with all fields
      const { name, email, phone, message } = body;
      
      if (!name?.trim()) {
        return new Response('Name is required', { status: 400 });
      }

      if (!email?.trim() || !isValidEmail(email)) {
        return new Response('Valid email is required', { status: 400 });
      }

      if (!phone || !isValidPhone(phone)) {
        return new Response('Valid Indian phone number is required', { status: 400 });
      }

      // Check if phone already exists
      const existingContact = await ContactModel.findByPhone(phone);
      if (existingContact) {
        return new Response('Phone number already submitted', { status: 400 });
      }

      // Create new contact with all fields
      const contact = await ContactModel.create({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        message: message?.trim() || null
      });
      
      return Response.json({ 
        success: true, 
        message: 'Contact saved successfully',
        id: contact.id 
      }, { status: 201 });
      
    } else {
      // Old format - just phone
      const { phone } = body;
      
      if (!phone || !isValidPhone(phone)) {
        return new Response('Invalid phone number', { status: 400 });
      }

      const existingContact = await ContactModel.findByPhone(phone);
      if (existingContact) {
        return new Response('Phone already submitted', { status: 400 });
      }

      const contact = await ContactModel.create(phone);
      
      return Response.json({ 
        success: true, 
        message: 'Contact saved successfully',
        id: contact.id 
      }, { status: 201 });
    }

  } catch (error) {
    console.error('Contact API Error:', error);
    
    if (error.message.includes('already exists')) {
      return new Response('Contact information already submitted', { status: 400 });
    }
    
    return new Response('Server Error', { status: 500 });
  }
}
