import { dbConnect } from '../../../lib/mongodb';
import Contact from '../../../models/Contact';

export async function POST(req) {
  try {
    const { password } = await req.json();
    
    // Enhanced password validation
    if (!password) {
      return new Response(
        JSON.stringify({ error: 'Password required' }), 
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    if (password !== process.env.ADMIN_PASS) {
      console.log("🚫 Unauthorized access attempt");
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }), 
        { 
          status: 401,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    await dbConnect();
    console.log("✅ Admin DB Connected");

    const contacts = await Contact.find({})
      .sort({ createdAt: -1 })
      .lean();
    
    const simplified = contacts.map(c => ({
      _id: c._id.toString(),
      name: c.name,
      email: c.email,
      phone: c.phone,
      message: c.message?.substring(0, 100) + (c.message?.length > 100 ? '...' : ''), // Truncate long messages
      createdAt: c.createdAt,
    }));

    console.log(`📊 Returning ${simplified.length} contacts`);
    
    return new Response(
      JSON.stringify({ 
        success: true,
        contacts: simplified,
        total: simplified.length 
      }), 
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (err) {
    console.error("❌ Admin API Error:", err);
    return new Response(
      JSON.stringify({ 
        error: 'Server error',
        message: process.env.NODE_ENV === 'development' ? err.message : 'Internal error'
      }), 
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
