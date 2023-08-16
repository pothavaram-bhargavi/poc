import PropTypes from 'prop-types';
//import { useState } from 'react';

// material-ui
//import { useTheme } from '@mui/material/styles';
import { Avatar, CardContent, Divider, Grid, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { useEffect } from 'react';

// assets
// import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
// import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const PopularCard = ({ transactions }) => {

  

  return (


    <MainCard content={false}>
      <CardContent>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Grid container alignContent="center" justifyContent="space-between">
              <Grid item>
                <Typography variant="h4">Recent Transactions</Typography>
              </Grid>
              <Grid item>
                ...
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            {transactions && transactions.map((item) => {
              return (<><Grid container direction="column">

                <Grid item xs={12}>
                  <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item xs={2}>
                      <Avatar
                        variant="rounded"
                        backgroundColor={item.type === 'credit' ? "#def5de" : '#fce8d7'}
                        style={{backgroundColor: item.type === 'credit' ? "#def5de" : '#fce8d7', color: item.type === 'credit' ? "#6faf6f" : '#d68b88'}}
                      >
                        {item.icon}
                      </Avatar>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant="h5" color="inherit">
                        {item.name}
                      </Typography>
                      <Typography variant="subtitle2" color="inherit">
                        {item.date}
                      </Typography>
                    </Grid>
                    <Grid item  xs={2}>
                      <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                          {item.type === 'credit' && <Typography  variant="h5" size="14pt" color="#448444">
                            ${item.amount}
                          </Typography>}
                          {item.type !== 'credit' && <Typography variant="h5" size="14pt" color="#ac615e">
                            -${item.amount}
                          </Typography>}

                          <Typography variant="subtitle2" size="14pt" color={item.type === 'credit' ? "inherit" : 'inherit'}>
                            {item.type}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

              </Grid><Divider sx={{ my: 1.5 }} /></>)

            })}

          </Grid>
        </Grid>
      </CardContent>
      
    </MainCard>
  );
};

PopularCard.propTypes = {
  transactions: PropTypes.any
}

export default PopularCard;
