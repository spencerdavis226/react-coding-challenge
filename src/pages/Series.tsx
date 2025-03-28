import React, { useEffect, useState } from 'react';

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

const Series: React.FC = () => {
  const [seriesData, setSeriesData] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/public/feed/sample.json')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        const entries: Entry[] = data.entries || [];

        // Filter to only series with release year >= 2010
        const filtered = entries.filter(
          (entry) => entry.programType === 'series' && entry.releaseYear >= 2010
        );

        // Sort by title, ascending
        filtered.sort((a, b) => a.title.localeCompare(b.title));

        // Only show first 21
        const top21 = filtered.slice(0, 21);

        setSeriesData(top21);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  // Render states
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Oops, something went wrong...</div>;
  }

  return (
    <main>
      <div style={{ backgroundColor: '#3a3a3a', padding: '1rem' }}>
        <h1 style={{ color: '#ffffff', margin: 0 }}>Popular Series</h1>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          padding: '1rem',
        }}
      >
        {seriesData.map((entry) => (
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

export default Series;
