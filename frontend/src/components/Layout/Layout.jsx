import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-center text-2xl">Telehealth App</h1>
      </header>
      <main className="p-4">
        {children}
      </main>
      <footer className="bg-blue-600 text-white text-center p-4">
        © 2024 Telehealth App
      </footer>
    </div>
  );
};

export default Layout;
