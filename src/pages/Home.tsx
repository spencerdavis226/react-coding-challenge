import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <main style={{ margin: 0, padding: 0 }}>
      {/* Subheader bar */}
      <div style={{ backgroundColor: '#3a3a3a', padding: '1rem' }}>
        <h1 style={{ color: '#ffffff', margin: 0 }}>Popular Titles</h1>
      </div>

      {/* Tile container */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'left',
          gap: '2rem',
          padding: '2rem',
          backgroundColor: '#fff',
        }}
      >
        {/* SERIES Tile */}
        <div style={{ textAlign: 'center' }}>
          <Link
            to="/series"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div
              style={{
                backgroundColor: '#1c1c1c',
                width: '150px',
                height: '220px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src="/public/assets/placeholder.png"
                alt="Series Placeholder"
                style={{ width: '50px', opacity: 0.5, marginBottom: '0.5rem' }}
              />
              <h3 style={{ color: '#fff', margin: 0 }}>SERIES</h3>
            </div>
          </Link>
          <p style={{ marginTop: '0.5rem' }}>Popular Series</p>
        </div>

        {/* MOVIES Tile */}
        <div style={{ textAlign: 'center' }}>
          <Link
            to="/movies"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div
              style={{
                backgroundColor: '#1c1c1c',
                width: '150px',
                height: '220px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src="/public/assets/placeholder.png"
                alt="Movies Placeholder"
                style={{ width: '50px', opacity: 0.5, marginBottom: '0.5rem' }}
              />
              <h3 style={{ color: '#fff', margin: 0 }}>MOVIES</h3>
            </div>
          </Link>
          <p style={{ marginTop: '0.5rem' }}>Popular Movies</p>
        </div>
      </div>
    </main>
  );
};

export default Home;
