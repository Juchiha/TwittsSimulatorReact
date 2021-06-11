import React from 'react';
import Modal from '@material-ui/core/Modal';

import './ModalContainer.scss';

export default function ModalContainer(props){
    const {isOpenModal, CloseModal, children} = props;
    return (
        <Modal 
            className="modal-container"
            open={isOpenModal}
            onClose={CloseModal}
            closeAfterTransition        
            >
            <div>{children}</div>
        </Modal>
    )
    ;
}