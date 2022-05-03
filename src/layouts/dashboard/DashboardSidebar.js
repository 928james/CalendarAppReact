import PropTypes from 'prop-types';
import { useEffect } from 'react';

import { Link as RouterLink, useHistory, useLocation, useNavigate } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Link, Divider, Button, Card, Drawer, Typography, Avatar, Stack } from '@mui/material';

// hooks
import useResponsive from '../../hooks/useResponsive';
// components

import Scrollbar from '../../components/Scrollbar';


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
                0
          </Typography>

          <Typography variant="body1" sx={{ mt:2, color: 'text.primary' , opacity: 0.82 }}>
                tasks due.
          </Typography>
              
      </Stack>

      <Box sx={{ px: 2.5, pb: 3, mt: 2 }}>

          <Card
            sx={{
              py: 15,
              flexGrow: 1,
              boxShadow: 1,
              textAlign: 'center',
            }}
            >
            <Typography variant="body1" sx={{ color: 'text.secondary' , opacity: 0.72 }}>
              Add tasks to view them here.
            </Typography>
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
