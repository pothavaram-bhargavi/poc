
// material-ui
import { styled } from '@mui/material/styles';
import { Alert, Box, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import './Overview.css';

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
  const [searchValue, setSearchValue] = useState('');
  const [focusButton, setFocusButton] = useState(false);

  const [open, setOpen] = useState(false);
  const openDialog = () => setOpen(true);
  const [showMsg, setShowMsg] = useState(false);

  const handleClose = () => {
    setOpen(false); 
    setFocusButton(true);
  }

  const addEmail = () => {
    setOpen(false); setShowMsg(true); setTimeout(() => {setShowMsg(false); setFocusButton(true)}, 2500)

  }

  const CardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor: '#505cc2',
    color: '#fff',
    overflow: 'hidden',
    position: 'relative',
    zIndex: 50,
    width: '90%',
    '&:after': {
      content: '""',
      position: 'absolute',
      width: 250,
      height: 200,
      background: '#fe9a3c',
      borderRadius: '50%',
      top: -5,
      right: -150,
      [theme.breakpoints.down('sm')]: {
        top: -105,
        right: -140
      }
    },
    '.topCorner': {
      content: '""',
      position: 'absolute',
      width: 245,
      height: 166,
      background: '#6570c8',
      borderRadius: '50%',
      top: -63,
      left: -107,
      zIndex: 100,
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      width: 270,
      height: 200,
      background: '#6570c8',
      borderRadius: '50%',
      top: -10,
      right: -84,
      [theme.breakpoints.down('sm')]: {
        top: -155,
        right: -70
      }
    }
  }));

  return (
    <>
      <Grid container direction="row" justifyContent={'space-between'} style={{ width: '90%' }}>
        <Grid item lg={6} md={6} sm={6} xs={6}>
          <h1>Overview</h1>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={6}>
          <Grid container direction="row" justifyContent={'space-between'}>
            <Grid item>
              {showSearch && <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
                tabIndex={0}
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
              />}
            </Grid>
            <Grid item>
              <IconButton onClick={() => { !searchValue ? setShowSearch(!showSearch) : setShowSearch(true) }} type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <CardWrapper border={false} content={false} tabIndex={0} role="region" aria-label="Overview Section" >
        <div className='topCorner'></div>
        <Box sx={{ p: 1.25, borderRadius: '20px' }}>
          <Grid container direction="column">
            <Grid container justifyContent={'space-between'} style={{ alignItems: 'center', zIndex: 10000, paddingLeft: '20px', justifyContent: 'space-between' }}>
              <Grid item lg={8} md={8} sm={8} xs={8}>
                <Box className="card-content" >
                  <h2 style={{ marginBottom: '10px', zIndex: 10000, fontSize: '18px' }}>Get Exclusive discounts for any payment method</h2>
                  <h3 style={{ fontSize: '12px' }}>by upgrading your plan to premium</h3></Box>
              </Grid>
              <Grid item lg={4} md={4} sm={4} xs={4} style={{ position: 'relative' }}>
                <Button autoFocus={focusButton}  className={classes.hoverStyle} variant="outlined" style={{ backgroundColor: 'white', color: '#0378d5', border: '1px solid white', borderRadius: '18px', marginLeft: '80px' }} tabIndex={0} role="button" aria-label="Upgrade Now" onClick={() => openDialog()}>Upgrade Now</Button>
                <OverviewDialogBox addEmail={addEmail} handleClose={handleClose} openDialog={open} tabIndex={0}/>
              </Grid>
            </Grid>
          </Grid>
        </Box>

      </CardWrapper>

      {showMsg && <div className={showMsg ? "visible" : "alert"} role="alert" aria-live="assertive"><Alert severity="success">The email is submitted successfully!</Alert></div>}
    </>
  );
}
export default Overview;