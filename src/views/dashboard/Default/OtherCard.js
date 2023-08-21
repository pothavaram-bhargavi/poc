import PropTypes from 'prop-types';

// material-ui
import { styled } from '@mui/material/styles';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useState, useEffect } from 'react';


// project imports
import MainCard from 'ui-component/cards/MainCard';
import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';

// assets
// import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';

// styles
const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: '#bd5900',
  color: '#6570c8',
  fontWeight: 'bold',
  overflow: 'hidden',
  position: 'fixed',
  right: '-170px',
  top:'85px',
  width:'300px',
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

const OtherCard= ({ balance, isLoading }) => {
  //const theme = useTheme();

  const [isVisible, setIsVisible] = useState(true);
  const [height, setHeight] = useState(0)
  
  useEffect(() => {   
    window.addEventListener("scroll", listenToScroll);
    return () => 
       window.removeEventListener("scroll", listenToScroll); 
  }, [])
  
  const listenToScroll = () => {
    let heightToHideFrom = 30;
    const winScroll = document.body.scrollTop || 
        document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToHideFrom) {  
         isVisible && setIsVisible(false);
    } else {
         setIsVisible(true);
    }  
  };

  return (
    <>
      {isLoading ? (
        <TotalIncomeCard />
      ) : (
        <>
          {isVisible && <CardWrapper border={false} content={false} role="region" aria-label="Total Income Dark Card">
            <Box sx={{ p: 2,borderRadius:'20px' }}>
              <List sx={{ py: 0 }}>
                <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>

                  <ListItemText
                    sx={{
                      py: 0,
                      mt: 0.45,
                      mb: 0.45
                    }}
                    
                  >
                  <div className="cardType">VISA</div>
                   <Typography variant="h3" sx={{ color: '#fcfefb', mt: 0.15,fontSize:'14px'}}>Bank of America</Typography> 
                  <Typography variant="h4" sx={{ color: '#fcfefb', mt: 0.35,fontSize:'11px' }}>
                    Balance
                  </Typography>
                    <Typography variant="h4" sx={{ fontSize:'16px', color: '#fff',mt: 0.35 }}>
                    ${balance}
                  </Typography>
                  </ListItemText>
                </ListItem>
              </List>
            </Box>
          </CardWrapper>}</>
      )}
    </>
  );
};

OtherCard.propTypes = {
  isLoading: PropTypes.bool
};

export default OtherCard;
