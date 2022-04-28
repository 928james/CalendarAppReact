import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ReactWeather, { useOpenWeather } from 'react-open-weather';

// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';



// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
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
  // Weather using OpenWeatherApi, react-open-weather. 
  // Calendar using, react-calendar
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>
        
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

        <Grid item xs={12} md={6} lg={8}>
          <AppNewsUpdate
            title="News Update"
            list={[...Array(5)].map((_, index) => ({
              id: faker.datatype.uuid(),
              title: faker.name.jobTitle(),
              description: faker.name.jobTitle(),
              image: `/static/mock-images/covers/cover_${index + 1}.jpg`,
              postedAt: faker.date.recent(),
            }))}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={8}>
          <AppTasks
            title="Tasks"
            list={[
            { id: '1', label: 'Create FireStone Logo' },
              { id: '2', label: 'Add SCSS and JS files if required' },
              { id: '3', label: 'Stakeholder Meeting' },
              { id: '4', label: 'Scoping & Estimations' },
              { id: '5', label: 'Sprint Showcase' },
            ]}
          />
        </Grid>
      </Container>
    </Page>
  );
}
