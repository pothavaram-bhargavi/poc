
// material-ui
import { styled } from '@mui/material/styles';
import { Alert, Box, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';


// project imports
import MainCard from 'ui-component/cards/MainCard';
import OverviewDialogBox from './OverviewDialogBox';
import SearchIcon from '@mui/icons-material/Search';


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
  
  const [open, setOpen] = useState(false);
  const openDialog = () => setOpen(true);
  const [showMsg, setShowMsg] = useState(false);

  const handleClose = () => {setOpen(false); setShowMsg(true)}

  const CardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.dark,
    color: '#fff',
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      width: 210,
      height: 150,
      background: theme.palette.secondary[800],
      borderRadius: '50%',
      top: -85,
      right: -95,
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
      background: theme.palette.secondary[800],
      borderRadius: '50%',
      top: -125,
      right: -15,
      opacity: 0.5,
      [theme.breakpoints.down('sm')]: {
        top: -155,
        right: -70
      }
    }
  }));

  return (
    <>
    <div style={{display:'flex', justifyContent:'space-between'}}>
      <h1>Overview</h1>
       <SearchIcon/>
       </div>
      <CardWrapper border={false} content={false} tabIndex={0} role="region" aria-label="Overview Section" >
        <Box sx={{ p: 2.25 }}>
          <Grid container direction="column">
            <Grid container >
              <Grid item lg={8} md={8} sm={8} xs={8}>
                <Box className="card-content" style={{ width: '60%' }}>
                  <div style={{marginBottom : '20px'}}>Get Exclusive Discount for Payment</div>
                  <div>by upgrading your plan to premium</div></Box>
              </Grid>
              <Grid item>
                <Button classes={{ focusVisible: classes.focusStyle}} className={classes.hoverStyle} variant="outlined" style={{ backgroundColor: 'white',color:'#0378d5','&:hover':{color:'green'}}} tabIndex={0} role="button" aria-label="Upgrade Now" onClick={()=>openDialog()} autoFocus>Upgarde Now</Button>
               <OverviewDialogBox handleClose={handleClose} openDialog={open}/>
               
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