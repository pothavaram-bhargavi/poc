import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';


const OverviewDialogBox = ({ openDialog, addEmail, handleClose }) => {
  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState('');

  const sendEmail = () => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email === '') {
      setEmailError('Email is required');
    } else if (!email.match(validRegex)) {
      setEmailError('Valid Email id is required');
    } else {
      setEmailError('')
      addEmail();
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email:email })
    };
    fetch('http://localhost:3000/subscribe', requestOptions)
        .then(response => response.json())
        .then((data)=> handleClose());
    }

  }

  return (
    <div>
      <Dialog open={openDialog} onClose={handleClose} role="dialog" aria-modal="true">
        <DialogTitle>Enter Email</DialogTitle>
        <DialogContent>
          <Box sx={{ minWidth: 300 }}>
            <FormControl fullWidth>
              <TextField
                autoFocus
                margin="dense"
                required
                id="name"
                label="Email Address"
                type="email"
                error={emailError}
                fullWidth
                variant="standard" value={email} onChange={(e) => setEmail(e.target.value)}

              />
              {emailError && <span style={{color:'red'}}>{emailError}</span>}
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => sendEmail()} tabIndex={0}>Submit</Button>
        </DialogActions>
      </Dialog>

    </div>

  )
}
export default OverviewDialogBox;