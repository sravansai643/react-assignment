import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

const technologies = [
  'React.js Development',
  'Node.js Backend Services',
  'Python & Django Solutions',
  'Cloud & DevOps',
];

export default function ByTechnology() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Services by Technology</Typography>
      <Grid container spacing={2}>
        {technologies.map((tech, index) => (
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
              <Typography>💻 {tech}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
