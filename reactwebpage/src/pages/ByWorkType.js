import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

const workTypes = [
  'Dedicated Development Team',
  'Offshore Development Services',
  'Consulting & Strategy',
  'Custom Software Development',
];

export default function ByWorkType() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Services by Work Type</Typography>
      <Grid container spacing={2}>
        {workTypes.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                border: '1px solid #eee',
                borderRadius: 2,
                padding: 2,
                backgroundColor: '#fdfdfd',
                '&:hover': { boxShadow: 2 },
              }}
            >
              <Typography>🛠 {item}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
