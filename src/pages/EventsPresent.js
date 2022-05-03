import { faker } from '@faker-js/faker';
import { useState } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Box, Container, Button, Typography } from '@mui/material';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ReactWeather, { useOpenWeather } from 'react-open-weather';

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

  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '329310856995266d8c660ed476a67e36',
    lat: '34.052235',
    lon: '-118.243683',
    lang: 'en',
    unit: 'imperial', // values are (metric, standard, imperial)
  });

  const customStyles = {
    fontFamily:  'Helvetica, sans-serif',
    gradientStart:  '#0181C2',
    gradientMid:  '#04A7F9',
    gradientEnd:  '#4BC4F7',
    locationFontColor:  '#FFF',
    todayTempFontColor:  '#FFF',
    todayDateFontColor:  '#B5DEF4',
    todayRangeFontColor:  '#B5DEF4',
    todayDescFontColor:  '#B5DEF4',
    todayInfoFontColor:  '#B5DEF4',
    todayIconColor:  '#FFF',
    forecastBackgroundColor:  '#FFF',
    forecastSeparatorColor:  '#DDD',
    forecastDateColor:  '#777',
    forecastDescColor:  '#777',
    forecastRangeColor:  '#777',
    forecastIconColor:  '#4BC4F7',
  };

  const [addEventPopUp, setAddEventPopUp] = useState(false);

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

            <Grid item xs={12} md={6} lg={6}>
              <div>
                <ReactWeather
                  theme={customStyles}
                  isLoading={isLoading}
                  errorMessage={errorMessage}
                  data={data}
                  lang="en"
                  locationLabel="Los Angeles, CA"
                  unitsLabels={{ temperature: 'F', windSpeed: 'm/h' }}
                  showForecast
                />
              </div>
            </Grid>

        </Grid>
      </Container>
    </Page>
  );
}