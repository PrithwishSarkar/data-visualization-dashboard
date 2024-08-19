import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Hidden from '@mui/material/Hidden';

export default function Footer() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '25px' }}>
      <Typography span sx={{ width: '50%' }}>&copy; 2024 Made with <span style={{ color: "red" }}>&hearts;</span> by <a href="https://prithwish.free.nf" target="_blank">Prithwish</a>
      </Typography>
      <Hidden smDown>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '50%' }}>
          <a href="https://www.linkedin.com/in/prithwish17" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
          <a href="https://github.com/PrithwishSarkar" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
          <a href="javascript:void(0)">License</a>
          <a href="javascript:void(0)">More Themes</a>
          <a href="javascript:void(0)">Documentation</a>
          <a href="javascript:void(0)">Support</a>
        </Box>
      </Hidden>
    </Box>
  );
}