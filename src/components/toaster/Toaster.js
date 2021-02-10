import React from 'react';
import FailureImage from './images/failure.png';
import SuccessImage from './images/success.png';

import './Toaster.css'

const images = {
    200: SuccessImage,
    500: FailureImage
}

const Toaster = ({ message, status, onClose }) => {
    console.log(images[status]);
    // console.log(process.env.PUBLIC_URL)
    return (
        <div className="toaster">
            <div>
                <img src={FailureImage} alt='' />
                <span> {message} </span>
                <button onClick={onClose}>
                    <span>x</span>
                </button>
            </div>
        </div>
    );

}

export default Toaster;