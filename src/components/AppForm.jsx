import * as React from 'react';
import PropTypes from 'prop-types'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';


function AppForm(props) {
  const { children } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        // replace with your own bg!!
        // backgroundImage: 'url(/static/onepirate/appCurvyLines.png)',
        // backgroundRepeat: 'no-repeat',
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{display:'flex', justifyContent: 'center', mt: 7, mb: 12 }}>
          <Paper
            elevation={3}
            
            background="light"
            sx={{ py: { xs: 4, md: 8 }, px: { xs: 3, md: 6 } }}
          >
            {children}
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}

AppForm.propTypes = {
  children: PropTypes.node,
};

export default AppForm;
