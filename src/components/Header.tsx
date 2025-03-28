import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={{ backgroundColor: '#0066cc', padding: '1rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          color: '#fff',
        }}
      >
        <h2 style={{ margin: 0 }}>DEMO Streaming</h2>
        <div>
          <button style={{ marginRight: '1rem' }}>Log in</button>
          <button>Start your free trial</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
