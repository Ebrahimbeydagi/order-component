import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import {Button} from "@mui/material";


function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };


    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle style={{width:400,height:300}}>Set your page</DialogTitle>
        </Dialog>
    );
}



export default function OnClick() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
    };

    return (
        <div>
            <Button onClick={handleClickOpen} style={{border:"none",color:"goldenrod"}}>
                Detail
            </Button>
            <SimpleDialog
                open={open}
                onClose={handleClose}
            />
        </div>
    );
}
