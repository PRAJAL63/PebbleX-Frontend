import React from 'react';

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">PebbleX</h2>
      <nav>
        <ul className="space-y-2">
          <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">Dashboard</li>
          <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">Analytics</li>
          <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">Settings</li>
        </ul>
      </nav>
    </div>
  );
}
