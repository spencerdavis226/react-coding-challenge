import React, { useState, useEffect } from 'react';

interface Entry {
  title: string;
  programType: string;
  releaseYear: number;
  images: {
    'Poster Art': {
      url: string;
      width: number;
      height: number;
    };
  };
}

const Movies: React.FC = () => {
  const [moviesData, setMoviesData] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/feed/sample.json')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        const entries: Entry[] = data.entries || [];

        // Filter for movies, year >= 2010
        const filtered = entries.filter(
          (entry) => entry.programType === 'movie' && entry.releaseYear >= 2010
        );

        filtered.sort((a, b) => a.title.localeCompare(b.title));
        const top21 = filtered.slice(0, 21);

        setMoviesData(top21);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>Loading movies...</div>;
  }

  if (error) {
    return <div>Oops! Something went wrong. Please try again later.</div>;
  }

  return (
    <main>
      <div style={{ backgroundColor: '#3a3a3a', padding: '1rem' }}>
        <h1 style={{ color: '#ffffff', margin: 0 }}>Popular Movies</h1>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          padding: '1rem',
        }}
      >
        {moviesData.map((entry) => (
          <div key={entry.title} style={{ width: '150px' }}>
            <img
              src={entry.images['Poster Art'].url}
              alt={entry.title}
              style={{ width: '100%' }}
            />
            <h3 style={{ fontSize: '1rem' }}>{entry.title}</h3>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Movies;
