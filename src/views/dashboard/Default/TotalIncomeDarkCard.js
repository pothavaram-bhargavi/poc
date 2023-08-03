import PropTypes from 'prop-types';

// material-ui
import { styled } from '@mui/material/styles';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';

// assets
// import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';

// styles
const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.primary.light,
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    // background: `linear-gradient(210.04deg, ${theme.palette.primary[200]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
    borderRadius: '50%',
    top: -30,
    right: -180
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    // background: `linear-gradient(140.9deg, ${theme.palette.primary[200]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
    borderRadius: '50%',
    top: -160,
    right: -130
  }
}));

// ==============================|| DASHBOARD - TOTAL INCOME DARK CARD ||============================== //

const TotalIncomeDarkCard = ({ balance, isLoading }) => {
  //const theme = useTheme();

  return (
    <>
      {isLoading ? (
        <TotalIncomeCard />
      ) : (
        <><h3>Balance</h3>
          <CardWrapper border={false} content={false} tabIndex={0} role="region" aria-label="Total Income Dark Card">
            <Box sx={{ p: 2 }}>
              <List sx={{ py: 0 }}>
                <ListItem alignItems="center" disableGutters sx={{ py: 0 }} tabIndex={0}>

                  <ListItemText
                    sx={{
                      py: 0,
                      mt: 0.45,
                      mb: 0.45
                    }}
                    aria-label="bank-name-label balance-label"
                  >
                   <Typography variant="subtitle1" sx={{ color: 'primary.light', mt: 0.25,backgroundColor:'#056fcc' }}>Bank of America</Typography> 
                  <Typography variant="subtitle2" sx={{ color: 'primary.light', mt: 0.25 ,backgroundColor:'#056fcc'}}>
                    Balance
                  </Typography>
                    <Typography variant="h4" sx={{ color: '#fff',backgroundColor:'#0e78d5' }}>
                    ${balance}
                  </Typography>
                  </ListItemText>
                </ListItem>
              </List>
            </Box>
          </CardWrapper></>
      )}
    </>
  );
};

TotalIncomeDarkCard.propTypes = {
  isLoading: PropTypes.bool
};

export default TotalIncomeDarkCard;
