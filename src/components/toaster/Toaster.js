import React from 'react';
import FailureImage from './images/failure.png';
import SuccessImage from './images/success.png';

import './Toaster.css'

const images = {
    200: SuccessImage,
    500: FailureImage
}

const Toaster = ({ message, status, onClose }) => {
    
    return (
        <div className="toaster">
            <div>
                <img src={images[status]} alt='' />
                <span> {message} </span>
                <button onClick={onClose}>
                    <span>x</span>
                </button>
            </div>
        </div>
    );

}

export default Toaster;