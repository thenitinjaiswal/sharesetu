import { dbConnect } from '../../../lib/mongodb';
import Contact from '../../../models/Contact';

export async function POST(req) {
  try {
    const { password } = await req.json();
    if (password !== process.env.ADMIN_PASS) {
      return new Response('Unauthorized', { status: 401 });
    }
    await dbConnect();
    const contacts = await Contact.find({}).sort({ createdAt: -1 }).lean();
    const simplified = contacts.map(c => ({
      _id: c._id,
      phone: c.phone,
      createdAt: c.createdAt,
    }));
    return Response.json({ contacts: simplified });
  } catch {
    return new Response('Server error', { status: 500 });
  }
}
