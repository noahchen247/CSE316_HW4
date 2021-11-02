import { useContext } from 'react'
import AuthContext from '../auth'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 800,
    maxHeight: 1/2,
    borderWidth: '5px',
    borderRadius: '10px',
    borderStyle: 'groove',
    bgcolor: '#e1e4cb',
    border: '2px solid #000',
    p: 4,
    transition: 'all 2s'
};

const buttonStyle = {
    position: 'relative',
    transform: 'translate(0, 25%)'
}

function ErrorModal() {
    const { auth } = useContext(AuthContext);
    let isOpen = false;
    let message = ""
    if (auth.error) {
        isOpen = true;
        message = auth.error;
    }
    function handleCloseModal() {
        auth.hideCloseModal();
    }
    return (
        <Modal
            open={isOpen}
            data-animation="slideInOutLeft"
            aria-labelledby="dialog-header"
            aria-describedby="modal-button">
            <Box sx={style}>
                <Typography variant='h5'>Error: {message}</Typography>
                <div id='confirm-cancel-container'>
                    <Button style={buttonStyle} onClick={handleCloseModal}>Ok</Button>
                </div>
            </Box>
        </Modal>
    );
}

export default ErrorModal;