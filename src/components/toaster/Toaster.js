import React from 'react';
import './Toaster.css'

const images = {
    200: "./assets/images/success.png",
    500: "./assets/images/failure.png"
}

const Toaster = ({ message, status }) => {
    return (
        <div className="toaster">
            <div>
                <img src={images[status]} alt='' />
                <span> {message} </span>
                {/* <button onClick={this.props.onClose}>
                    <span>x</span>
                </button> */}
            </div>
        </div>
    );

}

export default Toaster;