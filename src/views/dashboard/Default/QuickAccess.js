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
    width: 80,
    height: 80,
    padding:5
    //   color: '#fff',
    //   overflow: 'hidden',
    //   position: 'relative',
    //   '&:after': {
    //     content: '""',
    //     position: 'absolute',
    //     width: 100,
    //     height: 100,
    //     borderRadius: '50%',
    //     top: -85,
    //     right: -95,
    //     [theme.breakpoints.down('sm')]: {
    //       top: -105,
    //       right: -140
    //     }
    //   },
    //   '&:before': {
    //     content: '""',
    //     position: 'absolute',
    //     width: 100,
    //     height: 100,
    //     borderRadius: '50%',
    //     top: -125,
    //     right: -15,
    //     opacity: 0.5,
    //     [theme.breakpoints.down('sm')]: {
    //       top: -155,
    //       right: -70
    //     }
    //   }
}));

const QuickAccess = ({ name, icon, addTransaction }) => {
    const theme = useTheme();


    const [open, setOpen] = useState(false);
    const openDialog = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [transactiontype, setTransactiontype] = React.useState('');


    React.useEffect(() => {
        if (name == 'Electricity') {
            setTransactiontype('Power');
        }

    }, [name])




    return (
        <>

            <CardWrapper role="button" onClick={openDialog} onKeyDown={(event) => { if (event.key === "Enter") { openDialog() } }} border={false} content={false} tabIndex={0} aria-label={`Quick Access to ${name}`} >
                <Box>
                    <Grid container direction="column" alignItems={'center'}>
                        <Grid item>
                            <Avatar
                                variant="rounded"
                                sx={{
                                    ...theme.typography.commonAvatar,
                                    ...theme.typography.largeAvatar,
                                    backgroundColor: '#ffffff',
                                    bordeRadius: '20px',
                                    textAlign: 'center',
                                }}
                            >
                                {icon}
                            </Avatar>
                        </Grid>
                        <Grid item >
                            <Typography
                                sx={{
                                    fontSize: '0.8rem',
                                    fontWeight: 300,
                                    color: 'black',
                                    textAlign: 'center',


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