import { faker } from '@faker-js/faker';
import { useState } from 'react';


import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css'


// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Box, Container, Button, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import AddEventPopUp from '../sections/@dashboard/app/AddEventPopUp'

// sections
import {

  AppWidgetSummary,


} from '../sections/@dashboard/app';


// ----------------------------------------------------------------------



export default function DashboardApp() {
  const theme = useTheme();
  const [value, onChange] = useState(new Date());
  const eventsObj = [];


  // Weather using OpenWeatherApi, react-open-weather. 
  // Calendar using, react-calendar

  const [addEventPopUp, setAddEventPopUp] = useState(null);

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Welcome back, Jane. 
        </Typography>

        <Grid container spacing={3}>

          <Grid item xs={12} md={6} lg={8}>
            <div>
              <Calendar onChange={onChange} value={value} />
            </div>
          </Grid>

      
          <Grid item xs={15} sm={6} md={3} lg={10}>
            
            <AppWidgetSummary title="You have no planned events for today." />
            
            <Box sx={{ py: 2 , mx:50, pb: 5}}>
              <Button onClick = {() => setAddEventPopUp(true)} variant="contained" >
                      Add Event     
              </Button>

              <AddEventPopUp addEventPopUp = {addEventPopUp} setAddEventPopUp = {setAddEventPopUp}/>
                
            </Box>

          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

