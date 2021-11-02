import { useContext } from 'react'
import { GlobalStoreContext } from '../store'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'

/*
    This modal is shown when the user asks to delete a list. Note 
    that before this is shown a list has to be marked for deletion,
    which means its id has to be known so that we can retrieve its
    information and display its name in this modal. If the user presses
    confirm, it will be deleted.
    
    @author McKilla Gorilla
*/

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
    transition: 'all 2s',
};

const buttonStyle = {
    position: 'relative',
    transform: 'translate(0, 25%)'
}

function DeleteModal() {
    const { store } = useContext(GlobalStoreContext);
    let isOpen = false;
    let name = "";
    if (store.listMarkedForDeletion) {
        name = store.listMarkedForDeletion.name;
        isOpen = true;
    }
    function handleDeleteList() {
        store.deleteMarkedList();
        store.unmarkListForDeletion();
    }
    function handleCloseModal() {
        store.unmarkListForDeletion();
    }
    return (
        <Modal
            open={isOpen}
            data-animation="slideInOutLeft"
            aria-labelledby="dialog-header"
            aria-describedby="modal-button">
            <Box sx={style}>
                <Typography variant='h5'>Delete the {name} Top 5 List?</Typography>
                <div id='confirm-cancel-container'>
                    <Button style={buttonStyle} onClick={handleDeleteList}>Confirm</Button>
                    <Button style={buttonStyle} onClick={handleCloseModal}>Cancel</Button>
                </div>
            </Box>
        </Modal>
    );
}

export default DeleteModal;