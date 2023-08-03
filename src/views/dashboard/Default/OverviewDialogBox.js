import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const OverviewDialogBox = ({openDialog, handleClose})=>{
    const [email,setEmail] = React.useState('')

    
    return(
        <div>
    <Dialog open={openDialog} onClose={handleClose} role="dialog" aria-modal="true">
      <DialogTitle>Enter Email</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard" value={email} onChange={(e)=>setEmail(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} tabIndex={0}>Submit</Button>
        
      </DialogActions>
    </Dialog>
  </div>
        
    )
}
export default OverviewDialogBox;