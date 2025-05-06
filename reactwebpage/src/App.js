// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Tabs, Tab, Box } from '@mui/material';
import ByPurpose from './pages/ByPurpose';
import ByWorkType from './pages/ByWorkType';
import ByTechnology from './pages/ByTechnology';

function App() {
  const [value, setValue] = React.useState(0);

  return (
    <Router>
      <Container sx={{ mt: 4 }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)} centered>
          <Tab label="By Purpose" component={Link} to="/" />
          <Tab label="By Work Type" component={Link} to="/work-type" />
          <Tab label="By Technology" component={Link} to="/technology" />
        </Tabs>

        <Box sx={{ mt: 4 }}>
          <Routes>
            <Route path="/" element={<ByPurpose />} />
            <Route path="/work-type" element={<ByWorkType />} />
            <Route path="/technology" element={<ByTechnology />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
