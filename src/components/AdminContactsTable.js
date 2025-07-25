'use client';

import { useState, useMemo } from 'react';

export default function AdminContactsTable({ contacts }) {
  const [sortConfig, setSortConfig] = useState({ key: 'createdAt', direction: 'desc' });
  const [filterText, setFilterText] = useState('');
  const [selectedContacts, setSelectedContacts] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const contactsPerPage = 10;

  const [selectedContact, setSelectedContact] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  // Sorting functionality
  const sortedContacts = useMemo(() => {
    let sortableContacts = [...contacts];
    if (sortConfig.key) {
      sortableContacts.sort((a, b) => {
        if (sortConfig.key === 'createdAt') {
          const aDate = new Date(a[sortConfig.key]);
          const bDate = new Date(b[sortConfig.key]);
          return sortConfig.direction === 'asc' ? aDate - bDate : bDate - aDate;
        }
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableContacts;
  }, [contacts, sortConfig]);

  // Filtering functionality
  const filteredContacts = useMemo(() => {
    const searchTerm = filterText.toLowerCase();
    return sortedContacts.filter(contact =>
      contact.name?.toLowerCase().includes(searchTerm) ||
      contact.email?.toLowerCase().includes(searchTerm) ||
      contact.phone?.includes(searchTerm) ||
      contact.message?.toLowerCase().includes(searchTerm) ||
      formatDate(contact.createdAt).toLowerCase().includes(searchTerm)
    );
  }, [sortedContacts, filterText]);

  // Pagination
  const totalPages = Math.ceil(filteredContacts.length / contactsPerPage);
  const startIndex = (currentPage - 1) * contactsPerPage;
  const paginatedContacts = filteredContacts.slice(startIndex, startIndex + contactsPerPage);

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

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

  const getTimeAgo = (dateString) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffInMinutes = Math.floor((now - date) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}h ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d ago`;
    
    const diffInWeeks = Math.floor(diffInDays / 7);
    if (diffInWeeks < 4) return `${diffInWeeks}w ago`;
    
    const diffInMonths = Math.floor(diffInDays / 30);
    return `${diffInMonths}mo ago`;
  };

  const getPhoneCarrier = (phone) => {
    const firstDigit = phone.charAt(0);
    const carriers = {
      '6': 'Airtel/BSNL',
      '7': 'Airtel/Jio',
      '8': 'Airtel/Jio/Vi',
      '9': 'Airtel/Jio/Vi'
    };
    return carriers[firstDigit] || 'Unknown';
  };

  const getLocationFromPhone = (phone) => {
    // Basic location mapping based on phone prefixes (simplified)
    const prefixes = {
      '80': 'Karnataka',
      '81': 'Kolkata',
      '82': 'Delhi',
      '83': 'Tamil Nadu',
      '84': 'Punjab',
      '85': 'Odisha',
      '86': 'Kerala',
      '87': 'Gujarat',
      '88': 'West Bengal',
      '89': 'Maharashtra',
      '90': 'Mumbai',
      '91': 'Delhi',
      '92': 'Chennai',
      '93': 'Bangalore',
      '94': 'Hyderabad',
      '95': 'Pune',
      '96': 'Ahmedabad',
      '97': 'Kolkata',
      '98': 'Chennai',
      '99': 'Delhi'
    };
    const prefix = phone.substring(0, 2);
    return prefixes[prefix] || 'India';
  };

  const handleSelectAll = () => {
    if (selectedContacts.size === paginatedContacts.length) {
      setSelectedContacts(new Set());
    } else {
      setSelectedContacts(new Set(paginatedContacts.map(c => c._id)));
    }
  };

  const handleSelectContact = (contactId) => {
    const newSelected = new Set(selectedContacts);
    if (newSelected.has(contactId)) {
      newSelected.delete(contactId);
    } else {
      newSelected.add(contactId);
    }
    setSelectedContacts(newSelected);
  };

  const exportToCSV = () => {
    const csvContent = [
      ['Name', 'Email', 'Phone', 'Message', 'Submitted Date', 'Time Ago', 'Carrier', 'Location', 'ID'].join(','),
      ...filteredContacts.map(contact => [
        contact.name || '',
        contact.email || '',
        contact.phone || '',
        contact.message?.replace(/,/g, ';') || '',
        formatDate(contact.createdAt),
        getTimeAgo(contact.createdAt),
        getPhoneCarrier(contact.phone),
        getLocationFromPhone(contact.phone),
        contact._id
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sharesetu-contacts-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleViewDetails = (contact) => {
    setSelectedContact(contact);
    setIsDetailModalOpen(true);
  };

  if (contacts.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100  text-center">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">No Contact Submissions Yet</h3>
        <p className="text-gray-600 mb-6">Contact form submissions will appear here when users submit their information.</p>
        <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Waiting for first submission
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Header with Controls */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-gray-800">Contact Submissions</h3>
            <p className="text-sm text-gray-600 mt-1">
              {filteredContacts.length} of {contacts.length} contacts
              {selectedContacts.size > 0 && ` • ${selectedContacts.size} selected`}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search phone or date..."
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-64"
              />
              <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Export Button */}
            <button
              onClick={exportToCSV}
              className="inline-flex items-center px-4 py-2 bg-green-100 hover:bg-green-200 text-green-700 font-medium rounded-lg transition-colors duration-300"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Export CSV
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left">
                <input
                  type="checkbox"
                  checked={selectedContacts.size === paginatedContacts.length && paginatedContacts.length > 0}
                  onChange={handleSelectAll}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                User Details
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Contact Info
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Message
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Location & Status
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {paginatedContacts.map((contact, index) => (
              <tr key={contact._id} 
                  className={`hover:bg-gray-50 transition-colors duration-200 ${
                    selectedContacts.has(contact._id) ? 'bg-blue-50' : ''
                  }`}
              >
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    checked={selectedContacts.has(contact._id)}
                    onChange={() => handleSelectContact(contact._id)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                </td>
                
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg font-bold">
                        {contact.name?.charAt(0).toUpperCase() || '?'}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">{contact.name || 'No Name'}</div>
                      <div className="text-xs text-gray-500">ID: {contact._id.slice(-8)}</div>
                      <div className="text-xs text-gray-400">Lead #{startIndex + index + 1}</div>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm text-gray-900">{contact.email || 'No Email'}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-sm text-gray-900">+91 {contact.phone}</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Submitted {formatDate(contact.createdAt)}
                      <span className="text-green-500 ml-2">({getTimeAgo(contact.createdAt)})</span>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4">
                  <div className="max-w-xs">
                    <p className="text-sm text-gray-900 line-clamp-3">{contact.message || 'No message'}</p>
                    {contact.message?.length > 150 && (
                      <button className="text-blue-600 text-xs mt-1 hover:text-blue-800">
                        Read more...
                      </button>
                    )}
                  </div>
                </td>

                <td className="px-6 py-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm text-gray-900">{getLocationFromPhone(contact.phone)}</span>
                    </div>
                    <div className="text-xs text-gray-500">{getPhoneCarrier(contact.phone)}</div>
                    <div className="flex flex-col space-y-1 mt-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5"></span>
                        New Lead
                      </span>
                      {new Date(contact.createdAt) > new Date(Date.now() - 24*60*60*1000) && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                          🔥 Hot Lead
                        </span>
                      )}
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4">
                  <div className="flex flex-col gap-2">
                    <a
                      href={`tel:+91${contact.phone}`}
                      className="inline-flex items-center px-3 py-1.5 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg text-xs font-medium transition-colors duration-200"
                    >
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call Now
                    </a>
                    <a
                      href={`https://wa.me/91${contact.phone}?text=Hi ${contact.name || ''}! I'm from ShareSetu. I understand you're interested in recovering unclaimed funds. Let me help you with that.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1.5 bg-green-100 hover:bg-green-200 text-green-700 rounded-lg text-xs font-medium transition-colors duration-200"
                    >
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                      </svg>
                      WhatsApp
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Showing {startIndex + 1}-{Math.min(startIndex + contactsPerPage, filteredContacts.length)} of {filteredContacts.length} contacts
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 border border-gray-300 rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 border rounded text-sm transition-colors ${
                  currentPage === i + 1
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'border-gray-300 hover:bg-gray-50'
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border border-gray-300 rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Detail Modal */}
      {isDetailModalOpen && selectedContact && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-800">Contact Details</h3>
                <button 
                  onClick={() => setIsDetailModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Basic Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {selectedContact.name?.charAt(0).toUpperCase() || '?'}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{selectedContact.name}</h4>
                    <p className="text-sm text-gray-500">ID: {selectedContact._id}</p>
                    <p className="text-xs text-gray-400">Created: {formatDate(selectedContact.createdAt)}</p>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl">
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-1">Email Address</p>
                  <p className="text-sm text-gray-900">{selectedContact.email}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-1">Phone Number</p>
                  <p className="text-sm text-gray-900">+91 {selectedContact.phone}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-1">Location</p>
                  <p className="text-sm text-gray-900">{getLocationFromPhone(selectedContact.phone)}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-1">Carrier</p>
                  <p className="text-sm text-gray-900">{getPhoneCarrier(selectedContact.phone)}</p>
                </div>
              </div>

              {/* Message */}
              <div>
                <p className="text-xs font-medium text-gray-500 mb-2">Message</p>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-900 whitespace-pre-wrap">{selectedContact.message}</p>
                </div>
              </div>

              {/* Timestamps */}
              <div className="grid grid-cols-2 gap-4 text-xs text-gray-500">
                <div>
                  <p className="font-medium">Created At</p>
                  <p>{new Date(selectedContact.createdAt).toLocaleString()}</p>
                </div>
                <div>
                  <p className="font-medium">Last Updated</p>
                  <p>{new Date(selectedContact.updatedAt).toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 border-t border-gray-100 flex gap-3">
              <a
                href={`tel:+91${selectedContact.phone}`}
                className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-xl font-medium transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
              <a
                href={`https://wa.me/91${selectedContact.phone}?text=Hi ${selectedContact.name || ''}! I'm from ShareSetu. I understand you're interested in recovering unclaimed funds. Let me help you with that.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-green-100 hover:bg-green-200 text-green-700 rounded-xl font-medium transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
