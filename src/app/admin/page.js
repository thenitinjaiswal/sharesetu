'use client';

import { useState } from 'react';
import AdminContactsTable from '../../components/AdminContactsTable';

export default function AdminPage() {
  const [pass, setPass] = useState('');
  const [authed, setAuthed] = useState(false);
  const [contacts, setContacts] = useState(null);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    if (pass === process.env.ADMIN_PASS || pass === '') {
      // fallback if NEXT_PUBLIC_ADMIN_PASS is not accessible on client (which it isn't)
    }
    const submittedPass = pass;
    const res = await fetch('/api/admin', {
      method: 'POST',
      body: JSON.stringify({ password: submittedPass }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (res.ok) {
      setAuthed(true);
      const { contacts } = await res.json();
      setContacts(contacts);
    } else {
      setError('Invalid password');
    }
  };

  const handleLogout = () => {
    setAuthed(false);
    setPass('');
    setContacts(null);
  };

  return (
    <main className="">
      {!authed ? (
        <form onSubmit={handleLogin} className="bg-white shadow rounded max-w-lg mx-auto py-10">
          <div className="font-bold text-lg mb-3">Admin Login</div>
          <input
            type="password"
            required
            value={pass}
            onChange={e => setPass(e.target.value)}
            placeholder="Admin password"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          <button type="submit" className="bg-green-700 text-white font-bold px-5 py-2 rounded w-full">
            Login
          </button>
          {error && <div className="text-red-500 text-sm">{error}</div>}
        </form>
      ) : (
        <>
          <div className="flex items-center justify-between mb-5">
            <div className="font-bold text-xl">Contacts Submissions</div>
            <button onClick={handleLogout} className="py-1 px-3 bg-red-600 text-white rounded text-sm">Logout</button>
          </div>
          {contacts ? <AdminContactsTable contacts={contacts} /> : <div>Loading...</div>}
        </>
      )}
    </main>
  );
}
