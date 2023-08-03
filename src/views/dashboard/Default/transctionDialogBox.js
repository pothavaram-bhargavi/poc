import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function TransactionDialog({ openDialog, transactiontype, setTransactiontype, addTransaction, handleClose }) {
    const [open, setOpen] = React.useState(openDialog);

    const [amount, setAmount] = React.useState(0);
    const [transactionName, setTransactionName] = React.useState('')

    const changeType = (e) => {
        setTransactiontype(e.target.value);
    }



    React.useEffect(() => {
        setOpen(openDialog);
    }, [openDialog])

    

    return (
        <div>
            <Dialog open={open} onClose={handleClose} role="dialog" aria-modal="true" aria-label="Add Transaction Dialog">
                <DialogTitle>Add Transction</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Add Transction Details
                    </DialogContentText>
                    {(transactiontype == 'credit' || transactiontype == 'deposit') && 
                                        <><InputLabel id="demo-simple-select-label">Select Transfer Type</InputLabel>

                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={transactiontype || ''}
                        label="Age"
                        onChange={(event) => changeType(event)}
                        required
                        tabIndex={0}
                    >
                        <MenuItem value={''}>Select Type</MenuItem>

                        <MenuItem value={'credit'}>Add Money</MenuItem>

                        <MenuItem value={'deposit'}>Withdraw Money</MenuItem>
                    </Select></>}
                    <TextField
                        autoFocus
                        margin="dense"
                        id="tname"
                        label="Transction Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        placeholder="Transction Name" value={transactionName} onChange={(e) => setTransactionName(e.target.value)}
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="amount"
                        label="Amount"
                        type="text"
                        fullWidth
                        variant="standard"
                        placeholder='Enter money' value={amount} onChange={(e) => setAmount(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} tabIndex={0}>Cancel</Button>
                    <Button onClick={() => { addTransaction(transactionName, transactiontype, amount); handleClose() }} tabIndex={0}>Add Transction </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}