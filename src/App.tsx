import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { About } from './pages/About/About';
import { Home } from './pages/Home/Home';
import { Error } from './pages/Error/Error';
import { Forms } from './pages/Forms/Forms';
import '../src/scss/style.scss';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Forms />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
