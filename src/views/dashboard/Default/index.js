import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
// import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import TotalIncomeDarkCard from './TotalIncomeDarkCard';
import OtherCard from './OtherCard';
import { gridSpacing } from 'store/constant';
import Overview from './Overview';
import QuickAccess from './QuickAccess';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import CropPortraitIcon from '@mui/icons-material/CropPortrait';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import graph from 'assets/images/graph.PNG';




// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transactionName, transactiontype, amount) => {
    if (transactiontype == 'credit') {
      setBalance(parseInt(balance) + parseInt(amount));
    } else {
      setBalance(parseInt(balance) - parseInt(amount));
    }


    setTransactions([...transactions, {
      "icon": <CropPortraitIcon />,
      "transactionName": transactionName,
      "date": new Date().toLocaleString(),
      "amount": amount,
      "type": transactiontype
    }]);
  }

  return (
    <Grid container spacing={gridSpacing} style={{overflow:'hidden'}}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing} >
          <Grid item lg={8} md={8} sm={8} xs={8} style={{position:'relative'}}>
            <Overview stlye={{ width: '90%', padding: '10px' }} />
          </Grid>
          <Grid item sm={4} xs={4} md={4} lg={4} >
            <TotalIncomeDarkCard balance={balance} isLoading={isLoading} />
            <OtherCard balance={balance} isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={8}>
            <Grid container spacing={gridSpacing} >
              <Grid item xs={12} md={12} >
                <h3 style={{ color: 'black' }}>Quick Access</h3>
                <div style={{ display: 'flex', background: '#f7f8fa', gap: '25px', padding: '5px', width: '91.5%' }}>
                  <div style={{ boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)', borderRadius: '5px' }}>
                    <QuickAccess name='Transfer' icon={<PaymentOutlinedIcon />} addTransaction={addTransaction} />
                  </div>
                  <div style={{ boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)' }}>
                    <QuickAccess name='Electricity' icon={<BoltOutlinedIcon />} addTransaction={addTransaction} />
                  </div>
                  <div style={{ boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)' }}>
                    <QuickAccess name='Gas' icon={<LocalFireDepartmentOutlinedIcon />} addTransaction={addTransaction} />
                  </div>
                  <div style={{ boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)' }}>
                    <QuickAccess name='Data' icon={<CropPortraitIcon />} addTransaction={addTransaction} />
                  </div>
                  <div style={{ boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)' }}>
                    <QuickAccess name='Shopping' icon={<LocalMallOutlinedIcon />} addTransaction={addTransaction} />
                  </div>
                  <div style={{ boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)' }}>
                    <QuickAccess name='fooder' icon={<LocalMallOutlinedIcon />} addTransaction={addTransaction} />
                  </div>
                  <div style={{ boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)' }}>
                    <QuickAccess name='groceries' icon={<LocalMallOutlinedIcon />} addTransaction={addTransaction} />
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={12}>
                <img style={{ width: '90%' }} src={graph} alt='bar graph' tabIndex={0} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} md={4} style={{width:'80%'}}>
            <PopularCard transactions={transactions} />
          </Grid>

        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>

        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
