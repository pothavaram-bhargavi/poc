import PropTypes from 'prop-types';

// material-ui
import { Box, Chip,  Stack } from '@mui/material';

// third-party
// import PerfectScrollbar from 'react-perfect-scrollbar';
import { BrowserView, MobileView } from 'react-device-detect';

// project imports
import MenuList from './MenuList';
import LogoSection from '../LogoSection';
//import MenuCard from './MenuCard';
//import { drawerWidth } from 'store/constant';

// ==============================|| SIDEBAR DRAWER ||============================== //

const Sidebar = () => {
  // const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

  const drawer = (
    <>
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <Box sx={{ display: 'flex', p: 2, mx: 'auto' }}>
          <LogoSection />
        </Box>
      </Box>
      <BrowserView>
        
          <MenuList   role="menu"        aria-label="MenuList" tabIndex="-1"
/>
          <Stack direction="row" justifyContent="center" sx={{ mb: 2 }}>
            <Chip label={process.env.REACT_APP_VERSION} disabled chipcolor="secondary" size="small" sx={{ cursor: 'pointer' }} />
          </Stack>
      </BrowserView>
      <MobileView>
        <Box sx={{ px: 2 }}>
          <MenuList />
          <Stack direction="row" justifyContent="center" sx={{ mb: 2 }}>
            <Chip label={process.env.REACT_APP_VERSION} disabled chipcolor="secondary" size="small" sx={{ cursor: 'pointer' }} />
          </Stack>
        </Box>
      </MobileView>
    </>
  );

 // const container = window !== undefined ? () => window.document.body : undefined;

  return (
    <Box component="nav" sx={{ flexShrink: { md: 0 }, width:  '100px', padding: '10px' }} aria-label="mailbox folders">
      <section
        // container={container}
        // component="section"
        // variant={matchUpMd ? 'persistent' : 'temporary'}
        // anchor="left"
        // open={drawerOpen}
        // onClose={drawerToggle}
        aria-label="drawer"
        // sx={{
        //   '& .MuiDrawer-paper': {
        //     width: '100px',
        //     background: theme.palette.background.default,
        //     color: theme.palette.text.primary,
        //     borderRight: 'none',
        //     [theme.breakpoints.up('md')]: {
        //       top: '10px'
        //     }
        //   }
        // }}
        // ModalProps={{ keepMounted: true }}
        color="inherit"
      >
        {drawer}
      </section>
    </Box>
  );
};

Sidebar.propTypes = {
  drawerOpen: PropTypes.bool,
  drawerToggle: PropTypes.func,
  window: PropTypes.object
};

export default Sidebar;
