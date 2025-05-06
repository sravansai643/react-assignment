// src/pages/ByPurpose.js
import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import PsychologyIcon from '@mui/icons-material/Psychology';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import GroupsIcon from '@mui/icons-material/Groups';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SyncAltIcon from '@mui/icons-material/SyncAlt';

const services = [
  { name: 'AI Integration Services', icon: <IntegrationInstructionsIcon color="primary" /> },
  { name: 'Product Discovery Phase', icon: <PsychologyIcon color="secondary" /> },
  { name: 'Software Re-Engineering', icon: <EngineeringIcon color="action" /> },
  { name: 'Application Modernization', icon: <SettingsSuggestIcon color="primary" /> },
  { name: 'CTO as a Service', icon: <ManageAccountsIcon color="success" /> },
  { name: 'Offshore Development', icon: <GroupsIcon color="warning" /> },
  { name: 'Software Audit', icon: <AssessmentIcon color="error" /> },
  { name: 'Data Migration', icon: <SyncAltIcon color="info" /> },
];

export default function ByPurpose() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Services by Purpose
      </Typography>
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                padding: 2,
                border: '1px solid #ccc',
                borderRadius: 2,
                backgroundColor: '#fafafa',
                boxShadow: 1,
                transition: '0.3s',
                '&:hover': { boxShadow: 4, backgroundColor: '#f5f5f5' },
              }}
            >
              {service.icon}
              <Typography>{service.name}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
