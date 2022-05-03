import PropTypes from 'prop-types';
import { useEffect } from 'react';

import ReactWeather, { useOpenWeather } from 'react-open-weather';

import { Link as RouterLink, useHistory, useLocation, useNavigate } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Link, Divider, Button, Card, Drawer, Typography, Avatar, Stack } from '@mui/material';

// hooks
import useResponsive from '../../hooks/useResponsive';
// components

import Scrollbar from '../../components/Scrollbar';
import NavSection from '../../components/NavSection';
import navConfig from './NavConfig';



// ----------------------------------------------------------------------

const DRAWER_WIDTH = 320;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));

// ----------------------------------------------------------------------

DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  const { pathname } = useLocation();

  const isDesktop = useResponsive('up', 'lg');

  const navigate = useNavigate();

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

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
      }}
    >
      
     <Stack direction="column" alignItems="center" spacing={{ xs: 0, sm: 0 }}
                 sx={{ px: 0.5, pb: 1, mt: 6 }}>
      
          <Typography variant="body1" sx={{ color: 'red' , opacity: 0.95, fontSize:"85px" }}>
                3
          </Typography>

          <Typography variant="body1" sx={{ mt:2, color: 'text.primary' , opacity: 0.82 }}>
                tasks due.
          </Typography>
              
      </Stack>

      <Box sx={{ px: 2.5, pb: 3, mt: 2 }}>

          <Card
            sx={{
              py: 4,
              flexGrow: 1,
              boxShadow: 1,
              textAlign: 'center',
            }}
            >

           <NavSection navConfig={navConfig} />

          </Card> 
          
      </Box>

      <Box sx={{ px: 2.5, pb: 3, mt: 2 }}>
          
          <Card
            sx={{
              py: 1,
              flexGrow: 1,
              boxShadow: 1,
              textAlign: 'center',
            }}
            >
              
            <Box sx={{ p: 1 }}>

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

            </Box>

            <Box sx={{ p: 1 }}>
              <Button fullWidth disableRipple>
                Settings
              </Button>
            </Box>

            <Divider sx={{ borderStyle: 'dashed' }} />

            <Box sx={{ p: 1 }}>

                <Button fullWidth disableRipple  onClick={() => navigate('/ecoMode', { replace: true })}>
                   Enable Eco-Mode
                </Button>
           
            </Box>




          </Card>
      </Box>

    </Scrollbar>
  );

  return (
    <RootStyle>
      {!isDesktop && (
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}

      {isDesktop && (
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: 'background.default',
              borderRightStyle: 'dashed',
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </RootStyle>
  );
}
