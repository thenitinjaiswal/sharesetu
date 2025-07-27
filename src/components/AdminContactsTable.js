export default function AdminContactsTable({ contacts }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  if (contacts.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-12 text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-3">No Contact Submissions Yet</h3>
        <p className="text-gray-600">Contact form submissions will appear here when users submit their information.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <h3 className="text-lg font-bold text-gray-800">Contact Submissions ({contacts.length})</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Name</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Email</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Phone</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Message</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Date</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {contacts.map((contact, index) => (
              <tr key={contact._id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="font-medium text-gray-900">
                    {contact.name || 'No Name'}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-gray-700">
                    {contact.email || 'No Email'}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="font-medium text-blue-600">
                    +91 {contact.phone}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="max-w-xs text-sm text-gray-700">
                    {contact.message || 'No Message'}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">
                    {formatDate(contact.createdAt)}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <a
                      href={`tel:+91${contact.phone}`}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium hover:bg-blue-200"
                    >
                      Call
                    </a>
                    {contact.email && contact.email !== 'No Email' && (
                      <a
                        href={`mailto:${contact.email}`}
                        className="px-3 py-1 bg-green-100 text-green-700 rounded text-xs font-medium hover:bg-green-200"
                      >
                        Email
                      </a>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
