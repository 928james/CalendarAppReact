import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { Grid, Box, Container, Button, Typography } from '@mui/material';
// components
import Page from '../components/Page';


// sections
import {

  AppWidgetSummary,

} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const theme = useTheme();
  const navigate = useNavigate();
  

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          This is Eco Mode 
        </Typography>

        <Box sx={{ p: 1, px: 8, pb: 5, }}>
          <Button fullWidth disableRipple  onClick={() => navigate('/dashboard/app', { replace: false })}>
            Dashboard
          </Button>
        </Box>
 
      </Container>
    </Page>
  );
}