// src/AdminDashboard.js
import React from 'react';
import { getAuth, signOut } from 'firebase/auth';

const AdminDashboard = () => {
  const auth = getAuth();

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminDashboard;
