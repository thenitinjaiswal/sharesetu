import { dbConnect } from '../../../lib/mongodb';
import Contact from '../../../models/Contact';
import { isValidPhone } from '../../../lib/validatePhone';

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();
    console.log("🚀 Form data received:", { name, email, phone, message });

    // Input validation
    if (!name || !email || !phone || !message) {
      console.log("❌ Missing required fields");
      return new Response(
        JSON.stringify({ error: 'All fields are required' }), 
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }), 
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Phone validation (you imported this but didn't use it)
    if (!isValidPhone(phone)) {
      return new Response(
        JSON.stringify({ error: 'Invalid phone number' }), 
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    await dbConnect();
    console.log("✅ DB Connected");

    // Check for existing contact
    const existing = await Contact.findOne({ email });
    console.log("🔍 Existing contact check:", existing);

    if (existing) {
      return new Response(
        JSON.stringify({ error: 'Contact already submitted' }), 
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Create new contact
    const inserted = await Contact.create({ 
      name: name.trim(), 
      email: email.toLowerCase().trim(), 
      phone: phone.trim(), 
      message: message.trim(),
      createdAt: new Date()
    });
    console.log("📦 Inserted contact:", inserted);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Contact saved successfully',
        id: inserted._id 
      }), 
      { 
        status: 201,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (err) {
    console.error("❌ Error inserting contact:", err);
    console.error("Stack trace:", err.stack);
    
    return new Response(
      JSON.stringify({ 
        error: 'Server Error',
        message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
      }), 
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}

// Add GET method for testing
export async function GET() {
  return new Response(
    JSON.stringify({ message: 'Contact API is working' }), 
    { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    }
  );
}
