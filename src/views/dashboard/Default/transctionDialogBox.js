import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function TransactionDialog({ openDialog, transactiontype, setTransactiontype, addTransaction, handleClose }) {
    const [open, setOpen] = React.useState(openDialog);

    const [amount, setAmount] = React.useState(0);
    const [transactionName, setTransactionName] = React.useState('');

    const [errors, setErrors] = React.useState({ type: '', amount: '', name: '' });

    const changeType = (e) => {
        setTransactiontype(e.target.value);
    }

    const add = () => {
        const err = { ...errors };
        if (transactiontype === '') {
            err.type = 'Transction type required';
        } else {
            err.type = '';
        }

        if (transactionName === '') {
            err.name = 'Transction name required';
        } else {
            err.name = '';
        }

        if (amount === '' || amount === 0) {
            err.amount = 'Transction amount required';
        } else {
            err.amount = '';
        }

        setErrors(err);

        console.log(transactionName, transactiontype, amount);
        console.log(errors);

        if (transactionName !== '' && transactiontype !== '' && (amount !== '' || amount > 0)) {
            addTransaction(transactionName, transactiontype, amount);
            setTransactiontype('');
            setTransactionName('');
            setAmount('');
            handleClose()
        }
    }

    React.useEffect(() => {
        setTransactiontype(transactiontype);
    }, [transactiontype])


    React.useEffect(() => {
        setOpen(openDialog);
    }, [openDialog])


    const closeBox = () => {
        setTransactiontype('');
            setTransactionName('');
            setAmount('');
            handleClose()
    }



    return (
        <div>
            <Dialog open={open} onClose={closeBox} aria-label="Add Transaction Dialog">
                <DialogTitle>Add Transaction</DialogTitle>
                <DialogContent>
                    <Box sx={{ minWidth: 300, marginTop: 2 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Select Transfer Type</InputLabel>
                            
                            <Select
                                required
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={transactiontype}
                                label="Transction type"
                                error={errors.type}
                                onChange={(event) => changeType(event)}
                                
                            >

                                <MenuItem  tabIndex={0} value={'credit'}>Add Money</MenuItem>

                                <MenuItem tabIndex={0} value={'deposit'}>Withdraw Money</MenuItem>
                            </Select>

                            <TextField
                                required
                                margin="dense"
                                id="tname"
                                label="Transction Name"
                                type="text"
                                fullWidth
                                error={errors.name}
                                variant="standard"
                                placeholder="Transction Name" value={transactionName} onChange={(e) => setTransactionName(e.target.value)} 
                            />

                            <TextField
                                required
                                margin="dense"
                                id="amount"
                                label="Amount"
                                type="number"
                                fullWidth
                                error={errors.amount}
                                variant="standard"
                                placeholder='Enter money' value={amount} onChange={(e) => setAmount(e.target.value)} 
                            />

                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} tabIndex={0}>Cancel</Button>
                    <Button onClick={() => add()} tabIndex={0}>Add Transction </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}