import { ContactModel } from '../../../lib/contactModel.js';

export async function POST(req) {
  try {
    const { password } = await req.json();
    
    if (password !== process.env.NEXT_PUBLIC_ADMIN_PASS) {
      return new Response('Unauthorized', { status: 401 });
    }

    const contacts = await ContactModel.findAll('created_at', 'DESC');
    
    // Format contacts for frontend with ALL fields
    const formattedContacts = contacts.map(contact => ({
      _id: contact.id.toString(),
      name: contact.name || 'No Name',
      email: contact.email || 'No Email',
      phone: contact.phone,
      message: contact.message || 'No Message',
      createdAt: contact.created_at,
      updatedAt: contact.updated_at
    }));

    return Response.json({ 
      contacts: formattedContacts,
      total: contacts.length 
    });

  } catch (error) {
    console.error('Admin API Error:', error);
    return new Response('Server error', { status: 500 });
  }
}
