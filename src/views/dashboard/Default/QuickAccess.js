import * as React from 'react';
import { useState } from 'react';
import TransactionDialog from './transctionDialogBox';


// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Box, Grid, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: '#fff',
  color: '#fff',
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 100,
    height: 100,
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
    width: 100,
    height: 100,
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

const QuickAccess = ({ name, icon, addTransaction }) => {
    const theme = useTheme();

  
    const [open, setOpen] = useState(false);
    const openDialog = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [transactiontype, setTransactiontype] = React.useState('credit');


    React.useEffect(() => {
        if (name == 'Electricity') {
            setTransactiontype('Power');
        }

    }, [name])




    return (
        <>

            <CardWrapper onClick={openDialog} border={false} content={false} tabIndex={0} role="button" aria-label={`Quick access to ${name}`} >
                <Box sx={{ p: 2.25 }}>
                    <Grid container direction="column">
                        <Grid item>
                            <Grid container justifyContent="space-between">
                                <Grid item>
                                    <Avatar
                                        variant="rounded"
                                        sx={{
                                            ...theme.typography.commonAvatar,
                                            ...theme.typography.largeAvatar,
                                            backgroundColor: theme.palette.secondary[800],
                                            mt: 1
                                        }}
                                    >
                                        {icon}
                                    </Avatar>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sx={{ mb: 1.25 }}>
                            <Typography
                                sx={{
                                    fontSize: '1rem',
                                    fontWeight: 500,
                                    color:'#816ba9',
                                    marginTop: '20px'
                                    
                                }}
                            >
                                {name}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </CardWrapper>
            <TransactionDialog handleClose={handleClose} openDialog={open} setTransactiontype={setTransactiontype} transactiontype={transactiontype} addTransaction={addTransaction} />
        </>

    )
}
export default QuickAccess;