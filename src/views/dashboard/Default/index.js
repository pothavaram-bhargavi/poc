import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
// import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import TotalIncomeDarkCard from './TotalIncomeDarkCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';
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
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={8} md={8} sm={8} xs={8}>
            <Overview />
          </Grid>
          <Grid item sm={4} xs={4} md={4} lg={4}>
            <TotalIncomeDarkCard balance={balance} isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={8}>
            <Grid container spacing={gridSpacing} >
            <Grid item xs={12} md={12} >
              <h3>Quick Access</h3>
              <div style={{backgroundColor: '#eceff1', display: 'flex', gap:'5px', padding:'10px'}}>
              <QuickAccess name='Transfer' icon={<PaymentOutlinedIcon />} addTransaction={addTransaction} />
              <QuickAccess name='Electricity' icon={<BoltOutlinedIcon />} addTransaction={addTransaction} />
              <QuickAccess name='Gas' icon={<LocalFireDepartmentOutlinedIcon />} addTransaction={addTransaction} />
              <QuickAccess name='Data' icon={<CropPortraitIcon />} addTransaction={addTransaction} />
              <QuickAccess name='Shopping' icon={<LocalMallOutlinedIcon />} addTransaction={addTransaction} />
              <QuickAccess name='Shopping' icon={<LocalMallOutlinedIcon />} addTransaction={addTransaction} />
              <QuickAccess name='Shopping' icon={<LocalMallOutlinedIcon />} addTransaction={addTransaction} />
              </div>
            </Grid>
              <Grid item xs={12} md={12}>
                <img style={{width: '90%'}} src={graph}  alt='bar graph'/>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} md={4}>
            <PopularCard transactions={transactions}  />
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
