import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Series from './pages/Series';
import Movies from './pages/Movies';

const App: React.FC = () => {
  return (
    <Routes>
      {/* Layout wraps all pages */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="series" element={<Series />} />
        <Route path="movies" element={<Movies />} />
      </Route>
    </Routes>
  );
};

export default App;
