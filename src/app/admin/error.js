// src/app/admin/error.js
'use client';

export default function Error({ error, reset }) {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Something went wrong in Admin Panel</h2>
      <p style={{ color: 'red' }}>{error.message}</p>
      <button 
        onClick={reset}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007cba',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Try again
      </button>
    </div>
  );
}
