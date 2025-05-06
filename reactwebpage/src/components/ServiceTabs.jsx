import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const ServiceTabs = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const tabMap = {
    '/': 0,
    '/work-type': 1,
    '/technology': 2,
  };

  const handleChange = (event, newValue) => {
    switch (newValue) {
      case 0: navigate('/'); break;
      case 1: navigate('/work-type'); break;
      case 2: navigate('/technology'); break;
      default: break;
    }
  };

  return (
    <Box sx={{ p: 2, bgcolor: 'background.default' }}>
      <Tabs
        value={tabMap[location.pathname] ?? 0}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        centered
      >
        <Tab label="By purpose" />
        <Tab label="By work type" />
        <Tab label="By technology" />
      </Tabs>
    </Box>
  );
};

export default ServiceTabs;
