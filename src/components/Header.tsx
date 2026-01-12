import React from 'react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Dashboard Overview</h1>
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-600">User</span>
      </div>
    </header>
  );
}
