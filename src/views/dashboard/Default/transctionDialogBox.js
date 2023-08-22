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

        if (amount === '') {
            err.amount = 'Transction amount required';
        } else if (amount < 1){ 
            err.amount = 'Transcation amount must be greater than 0'
        } else {
            err.amount = '';
        }

        setErrors(err);

        console.log(transactionName, transactiontype, amount);
        console.log(errors);

        if (transactionName !== '' && transactiontype !== '' && (amount !== '' && amount > 0)) {
            addTransaction(transactionName, transactiontype, amount);
            setTransactiontype('');
            setTransactionName('');
            setAmount('');
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type:transactiontype,name:transactionName,amount:parseInt(amount) })
            };
            fetch('http://localhost:3000/createTransaction', requestOptions)
                .then(response => response.json())
                .then((data)=> handleClose());
            
        }
        closeBox()
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
            console.log("came Here")
            handleClose()
    }
//    console.log(handleClose);


    return (
        <div>
            <Dialog open={open} onClose={closeBox} aria-label="Add Transaction Dialog" role='dialog'>
                <DialogTitle>Add Transaction</DialogTitle>
                <DialogContent>
                    <Box sx={{ minWidth: 300, marginTop: 2 }}>
                        <FormControl fullWidth>
                            <label className={errors.type ? 'error' : ''} id="demo-simple-select-label">Select Transfer Type</label>
                            
                            <select
                                required
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={transactiontype}
                                label="Transction type"
                                error={errors.type}
                                onChange={(event) => changeType(event)}
                                className="classic"
                                
                            >   
                                <option value="">--Select Type--</option>
                                <option  value={'credit'}>Add Money</option>

                                <option  value={'deposit'}>Withdraw Money</option>
                            </select>
                            {errors.type && <span class="error">{errors.type}</span>}

                            <TextField
                                required
                                margin="dense"
                                id="tname"
                                label="Transaction Name"
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
                            {errors.amount && <span class="error">{errors.amount}</span>}

                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} tabIndex={0}>Cancel</Button>
                    <Button onClick={add} tabIndex={0}>Add Transaction </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}