import { dbConnect } from '../../../lib/mongodb';
import Contact from '../../../models/Contact';
import { isValidPhone } from '../../../lib/validatePhone';
export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();
    console.log("🚀 Form data received:", { name, email, phone, message });

    await dbConnect();
    console.log("✅ DB Connected");

    const existing = await Contact.findOne({ email });
    console.log("🔍 Existing contact check:", existing);

    if (existing) {
      return new Response('Contact already submitted', { status: 400 });
    }

    const inserted = await Contact.create({ name, email, phone, message });
    console.log("📦 Inserted contact:", inserted);

    return new Response('Success', { status: 201 });
  } catch (err) {
    console.error("❌ Error inserting contact:", err);
    return new Response('Server Error', { status: 500 });
  }
}
