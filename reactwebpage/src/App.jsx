import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ServiceTabs from './components/ServiceTabs';
import ByPurpose from './pages/ByPurpose';
import ByWorkType from './pages/ByWorkType';
import ByTechnology from './pages/ByTechnology';

function App() {
  return (
    <>
      <ServiceTabs />
      <Routes>
        <Route path="/" element={<ByPurpose />} />
        <Route path="/work-type" element={<ByWorkType />} />
        <Route path="/technology" element={<ByTechnology />} />
      </Routes>
    </>
  );
}

export default App;
