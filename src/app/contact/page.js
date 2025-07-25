import ContactForm from '../../components/ContactForm';

export default function ContactPage() {
  return (
    <main className="max-w-lg mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-2">Contact Us</h1>
      <p className="mb-4">
        Enter your phone number and our team will connect to help recover your unclaimed assets.
      </p>
      <ContactForm />
      <div className="mt-4 text-sm text-gray-600">
        Or call us: <b>+91-99999-99999</b><br />
        Email: <b>support@sharesetu.in</b>
      </div>
    </main>
  );
}
