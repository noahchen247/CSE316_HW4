import { useContext } from 'react'
import { GlobalStoreContext } from '../store'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

/*
    This modal is shown when the user asks to delete a list. Note 
    that before this is shown a list has to be marked for deletion,
    which means its id has to be known so that we can retrieve its
    information and display its name in this modal. If the user presses
    confirm, it will be deleted.
    
    @author McKilla Gorilla
*/
function DeleteModal() {
    const { store } = useContext(GlobalStoreContext);
    let name = "";
    if (store.listMarkedForDeletion) {
        name = store.listMarkedForDeletion.name;
    }
    function handleDeleteList() {
        store.deleteMarkedList();
        store.hideDeleteListModal();
        store.unmarkListForDeletion();
    }
    function handleCloseModal() {
        store.hideDeleteListModal();
        store.unmarkListForDeletion();
    }
    return (
        <div
            className="modal"
            id="delete-modal"
            data-animation="slideInOutLeft">
            <div className="modal-dialog">
                <Typography className="dialog-header">Delete the {name} Top 5 List?</Typography>
                <div id="confirm-cancel-container">
                    <Button
                        id="dialog-yes-button"
                        className="modal-button"
                        onClick={handleDeleteList}
                    >Confirm
                    </Button>
                    <Button
                        id="dialog-no-button"
                        className="modal-button"
                        onClick={handleCloseModal}
                    >Cancel
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;