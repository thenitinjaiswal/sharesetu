// src/app/admin/page.js
'use client';
import { useState, useEffect } from 'react';

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Move all client-side logic inside useEffect
  useEffect(() => {
    // Check if already authenticated (optional)
    const savedAuth = localStorage.getItem('adminAuth');
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
      loadContacts();
    }
    setLoading(false);
  }, []);

  const loadContacts = async () => {
    try {
      const response = await fetch('/api/admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: localStorage.getItem('adminPassword') })
      });

      if (response.ok) {
        const data = await response.json();
        setContacts(data.contacts);
      }
    } catch (error) {
      console.error('Error loading contacts:', error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const response = await fetch('/api/admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });

      const data = await response.json();

      if (response.ok) {
        setIsAuthenticated(true);
        setContacts(data.contacts);
        localStorage.setItem('adminAuth', 'true');
        localStorage.setItem('adminPassword', password);
      } else {
        setError('Invalid password');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Login failed. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setContacts([]);
    localStorage.removeItem('adminAuth');
    localStorage.removeItem('adminPassword');
    setPassword('');
  };

  // Show loading during hydration
  if (loading) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <p>Loading admin panel...</p>
      </div>
    );
  }

  // Show login form if not authenticated
  if (!isAuthenticated) {
    return (
      <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px' }}>
        <h1>Admin Login</h1>
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '15px' }}>
            <input
              type="password"
              placeholder="Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '10px', 
                fontSize: '16px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
              required
            />
          </div>
          {error && (
            <div style={{ color: 'red', marginBottom: '15px' }}>
              {error}
            </div>
          )}
          <button 
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#007cba',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  // Show admin dashboard
  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1>Admin Dashboard</h1>
        <button 
          onClick={handleLogout}
          style={{
            padding: '8px 16px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Logout
        </button>
      </div>
      
      <div>
        <h2>Contacts ({contacts.length})</h2>
        {contacts.length === 0 ? (
          <p>No contacts found.</p>
        ) : (
          contacts.map((contact) => (
            <div 
              key={contact._id} 
              style={{ 
                border: '1px solid #ddd', 
                padding: '15px', 
                margin: '10px 0', 
                borderRadius: '4px',
                backgroundColor: '#f9f9f9'
              }}
            >
              <p><strong>Name:</strong> {contact.name}</p>
              <p><strong>Email:</strong> {contact.email}</p>
              <p><strong>Phone:</strong> {contact.phone}</p>
              <p><strong>Message:</strong> {contact.message}</p>
              <p><strong>Date:</strong> {new Date(contact.createdAt).toLocaleDateString()}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
