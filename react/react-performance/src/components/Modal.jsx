import React from 'react'
import './Modal.css'

const Modal = (props) => {
    const { isVisible, hide } = props;
    if (!isVisible) return null;

    return (
        <div className='modal-overlay'>
            <div className="modal">
                <h2>Modal Title...</h2>
                <p>Modal description....</p>
                <button onClick={hide}>Close</button>
            </div>
        </div>
    )
}

export default Modal
