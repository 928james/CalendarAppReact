import { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { alpha , styled} from '@mui/material/styles';
import { Box, Link, Divider, Typography, Stack, MenuItem, Avatar, IconButton } from '@mui/material';
// components
import MenuPopover from '../../components/MenuPopover';
// mocks_
import account from '../../_mock/account';

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: 'Home',
    icon: 'eva:home-fill',
    linkTo: '/',
  },
  {
    label: 'Profile',
    icon: 'eva:person-fill',
    linkTo: '#',
  },
  {
    label: 'Settings',
    icon: 'eva:settings-2-fill',
    linkTo: '#',
  },
];

const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  width : '250px',
  height:'100px',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.grey[500_12],
}));

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const anchorRef = useRef(null);

  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <Box sx={{ mb: 5, mx: 2.5, mt:10 }}>
      
        <Link underline="none" component={RouterLink} to="#">

        <Box sx={{ mb: 1, mx: 2.5, mt:3}}/>

          <AccountStyle >
          
          <Box
            component="img"
            src="/static/illustrations/illustration_avatar.png"
            sx={{ width: 60, position: 'absolute', top: 25 }}
           />
            <Box sx={{ ml: 1, mb:5 , mx:8}}>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                {account.displayName}
              </Typography>
              
            </Box>


            <Stack direction="row" alignItems="center" spacing={{ xs: 2.5, sm: 1.5 }}>
              
              <Box
                component="img"
                src="/static/illustrations/illustration_avatar.png"
                sx={{ width: 40, position: 'absolute', top: 82, right:'190px'}}
              />

              <Box
                component="img"
                src="/static/illustrations/illustration_avatar.png"
                sx={{ width: 40, position: 'absolute', top: 82, right:'145px' }}
              />

              <Box
                component="img"
                src="/static/illustrations/illustration_avatar.png"
                sx={{ width: 40, position: 'absolute', top: 82, right:'100px' }}
              />

            </Stack>
            
          </AccountStyle>
        </Link>
      </Box>


    </>
  );
}
