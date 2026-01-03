'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AdminPage() {
  // --- STATE ---
  const [reviews, setReviews] = useState([]);
  const [messages, setMessages] = useState([]); // <--- NEW: Messages State
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [filter, setFilter] = useState('all'); // 'all', 'pending', 'approved'

  // --- LOGIN LOGIC ---
  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') { 
      setIsLoggedIn(true);
      fetchData(); // Fetch everything on login
    } else {
      alert("Incorrect Password");
    }
  };

  // --- DATA FETCHING (MERGED) ---
  const fetchData = async () => {
    try {
      // 1. Fetch Reviews
      const resReviews = await fetch('/api/reviews?admin=true');
      const dataReviews = await resReviews.json();
      setReviews(Array.isArray(dataReviews) ? dataReviews : []);

      // 2. Fetch Messages (NEW)
      const resMessages = await fetch('/api/contacts');
      const dataMessages = await resMessages.json();
      setMessages(Array.isArray(dataMessages) ? dataMessages : []);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  };

  // --- REVIEW ACTIONS ---
  const toggleApproval = async (id, currentStatus) => {
    const updatedReviews = reviews.map(r => 
        r._id === id ? { ...r, isApproved: !currentStatus } : r
    );
    setReviews(updatedReviews);

    await fetch('/api/reviews', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, isApproved: !currentStatus }),
    });
  };

  const deleteReview = async (id) => {
    if(!confirm("Are you sure you want to permanently delete this review?")) return;
    setReviews(prev => prev.filter(r => r._id !== id));
    await fetch('/api/reviews', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
  };

  // --- MESSAGE ACTIONS (NEW) ---
  const deleteMessage = async (id) => {
    if(!confirm("Archive this message?")) return;
    setMessages(prev => prev.filter(m => m._id !== id));
    await fetch('/api/contacts', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
  };

  // --- STATS & FILTERING ---
  const pendingCount = reviews.filter(r => !r.isApproved).length;
  const approvedCount = reviews.filter(r => r.isApproved).length;

  const filteredReviews = reviews.filter(review => {
    if (filter === 'pending') return !review.isApproved;
    if (filter === 'approved') return review.isApproved;
    return true;
  });

  // --- LOGIN SCREEN (Unchanged) ---
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-900">
        <motion.form 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          onSubmit={handleLogin} 
          className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 w-full max-w-md"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Al Fateen Admin</h2>
            <p className="text-gray-500 text-sm mt-2">Secure Dashboard Access</p>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Password</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl outline-none focus:border-red-600 transition-colors"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-red-700 transition-colors">
              Access Dashboard
            </button>
          </div>
        </motion.form>
      </div>
    );
  }

  // --- MAIN DASHBOARD ---
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-[90rem] mx-auto px-6 h-20 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight">Al Fateen <span className="text-red-600">Command Center</span></h1>
          <button onClick={() => window.location.reload()} className="text-sm font-medium text-gray-500 hover:text-red-600">Logout</button>
        </div>
      </div>

      <div className="max-w-[90rem] mx-auto px-6 py-10">
        
        {/* GRID LAYOUT: Left (Messages) | Right (Reviews) */}
        <div className="grid xl:grid-cols-12 gap-10">

          {/* =========================================================
              LEFT COLUMN: INBOX MESSAGES (New Feature) - Takes 4/12 width
             ========================================================= */}
          <div className="xl:col-span-4 space-y-6">
            <div className="flex items-center justify-between">
               <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                 <span>📩</span> Inbox
               </h2>
               <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-full">{messages.length}</span>
            </div>

            <div className="space-y-4">
              {messages.length === 0 && (
                <div className="text-center py-10 bg-white rounded-xl border border-gray-200 text-gray-400 italic">
                  No new messages.
                </div>
              )}

              {messages.map((msg) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={msg._id} 
                  className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:border-red-300 transition-all group"
                >
                  {/* Message Header */}
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-gray-900">{msg.name}</h3>
                      <div className="text-xs text-red-500 font-bold uppercase tracking-wider mt-1">{msg.service}</div>
                    </div>
                    <span className="text-[10px] text-gray-400 bg-gray-100 px-2 py-1 rounded">
                      {new Date(msg.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  {/* Message Body */}
                  <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-3 border border-gray-100">
                    "{msg.message}"
                  </div>

                  {/* Message Footer */}
                  <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                    <a href={`tel:${msg.phone}`} className="text-sm font-medium text-gray-700 hover:text-green-600 flex items-center gap-1">
                      📞 {msg.phone}
                    </a>
                    <button 
                      onClick={() => deleteMessage(msg._id)}
                      className="text-xs text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      Archive
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>


          {/* =========================================================
              RIGHT COLUMN: REVIEWS (Existing Feature) - Takes 8/12 width
             ========================================================= */}
          <div className="xl:col-span-8 space-y-6">
            
            {/* Review Header Stats */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Review Management</h2>
                <p className="text-gray-500 mt-1">Manage client testimonials.</p>
              </div>
              <div className="flex gap-4">
                 <div className="text-center px-4">
                    <span className="block text-xl font-bold text-orange-500">{pendingCount}</span>
                    <span className="text-[10px] font-bold uppercase text-gray-400">Pending</span>
                 </div>
                 <div className="h-10 w-px bg-gray-200"></div>
                 <div className="text-center px-4">
                    <span className="block text-xl font-bold text-green-600">{approvedCount}</span>
                    <span className="text-[10px] font-bold uppercase text-gray-400">Live</span>
                 </div>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 border-b border-gray-200 pb-1">
              {['all', 'pending', 'approved'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-6 py-2 rounded-t-lg font-medium text-sm transition-colors relative ${
                    filter === f ? 'text-gray-900 bg-white border border-b-0 border-gray-200 top-[1px]' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>

            {/* Review List */}
            <div className="space-y-4">
              <AnimatePresence mode="popLayout">
              {filteredReviews.length === 0 ? (
                <div className="text-center py-20 text-gray-400">No reviews found.</div>
              ) : (
                filteredReviews.map((review) => (
                  <motion.div 
                    key={review._id} 
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className={`group bg-white p-6 rounded-2xl shadow-sm border transition-all hover:shadow-md ${review.isApproved ? 'border-gray-100' : 'border-orange-200 bg-orange-50/30'}`}
                  >
                    <div className="flex flex-col gap-4">
                      
                      {/* Top Row: Info & Status */}
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                           {review.image ? (
                             <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full object-cover border border-gray-200" />
                           ) : (
                             <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 font-bold text-xs">
                               {review.name.charAt(0)}
                             </div>
                           )}
                           <div>
                              <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                              <p className="text-xs text-gray-500">{review.role || review.location}</p>
                           </div>
                        </div>
                        <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded-full ${review.isApproved ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                          {review.isApproved ? "Live" : "Pending"}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="pl-13">
                         <div className="flex text-yellow-400 text-xs mb-2">{"★".repeat(review.stars || 5)}</div>
                         <p className="text-gray-800 italic font-serif">"{review.text}"</p>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3 justify-end mt-2 pt-4 border-t border-gray-100">
                        <button 
                          onClick={() => deleteReview(review._id)} 
                          className="text-xs font-bold text-red-400 hover:text-red-600 px-4 py-2"
                        >
                          Delete
                        </button>
                        <button 
                          onClick={() => toggleApproval(review._id, review.isApproved)} 
                          className={`px-4 py-2 rounded-lg font-bold text-xs transition-colors ${
                            review.isApproved 
                            ? 'bg-gray-100 text-gray-600 hover:bg-gray-200' 
                            : 'bg-green-600 text-white hover:bg-green-700'
                          }`}
                        >
                          {review.isApproved ? "Unpublish" : "Approve Review"}
                        </button>
                      </div>

                    </div>
                  </motion.div>
                ))
              )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}