
// material-ui
import { styled } from '@mui/material/styles';
import { Alert, Box, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';


// project imports
import MainCard from 'ui-component/cards/MainCard';
import OverviewDialogBox from './OverviewDialogBox';
import SearchIcon from '@mui/icons-material/Search';
import { IconClockHour2 } from '@tabler/icons';


const useStyles = makeStyles(() => ({
  focusStyle: {
    // Add your focus styles here
    // For example:
    outline: '2px solid pink',
  },
  hoverStyle: {
    // Add your hover styles here
    // For example:
    backgroundColor: 'blue',

  },
}));


const Overview = () => {
  const classes = useStyles();
  const [showSearch, setShowSearch] = useState(false);
  const [open, setOpen] = useState(false);
  const openDialog = () => setOpen(true);
  const [showMsg, setShowMsg] = useState(false);

  const handleClose = () => { setOpen(false); setShowMsg(true) }

  const CardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor: '#1565c0',
    color: '#fff',
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      width: 210,
      height: 150,
      background: '#ffab91',
      borderRadius: '50%',
      top: 3,
      right: -134,
      [theme.breakpoints.down('sm')]: {
        top: -105,
        right: -140
      }
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      width: 210,
      height: 150,
      background: '#4527a0',
      borderRadius: '50%',
      top: -7,
      right: -95,
      opacity: 0.3,
      [theme.breakpoints.down('sm')]: {
        top: -155,
        right: -70
      }
    }
  }));

  return (
    <>
      <Grid container direction="row" justifyContent={'space-between'}>
        <Grid item lg={6} md={6} sm={6} xs={6}>
          <h1>Overview</h1>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={6}>
          <Grid container direction="row" >
            <Grid item>
              {showSearch && <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
                tabIndex={0}
              />}
            </Grid>
            <Grid item>
              <IconButton onClick={() => setShowSearch(!showSearch)} type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <CardWrapper border={false} content={false} tabIndex={0} role="region" aria-label="Overview Section" >
        <Box sx={{ p: 2.25 }}>
          <Grid container direction="column">
            <Grid container justifyContent={'space-around'} style={{ alignItems: 'center' }}>
              <Grid item lg={8} md={8} sm={8} xs={8}>
                <Box className="card-content" >
                  <h2 style={{ marginBottom: '10px' }}>Get Exclusive Discount for Payment for any payment method</h2>
                  <div>by upgrading your plan to premium</div></Box>
              </Grid>
              <Grid item lg={4} md={4} sm={4} xs={4} style={{ position: 'relative', zIndex: '30000' }}>
                <Button classes={{ focusVisible: classes.focusStyle }} className={classes.hoverStyle} variant="outlined" style={{ backgroundColor: 'white', color: '#0378d5', '&:hover': { color: 'green' } }} tabIndex={0} role="button" aria-label="Upgrade Now" onClick={() => openDialog()}>Upgrade Now</Button>
                <OverviewDialogBox handleClose={handleClose} openDialog={open} />

              </Grid>
            </Grid>
          </Grid>
        </Box>

      </CardWrapper>

      {showMsg && <p role="alert" aria-live="assertive"><Alert severity="success">The email is submitted successfully!</Alert></p>}
    </>
  );
}
export default Overview;