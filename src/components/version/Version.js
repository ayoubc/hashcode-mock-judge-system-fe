import { useState } from 'react';
import SubmissionForm from '../submission-form/SubmissionForm';

import './Version.css';

const Version = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="box">
            <h4 className='headline'>Qualification Round 2019</h4>
            <h4>Photo slideshow</h4>
            <div className="box-actions">
                {/* <a target="_blank" href="https://storage.googleapis.com/coding-competitions.appspot.com/HC/2020/hashcode_2020_online_qualification_round.pdf" >
                    <span class="mdc-button__label">View problem</span>
                </a> 
                <a target="_blank" href="https://storage.googleapis.com/coding-competitions.appspot.com/HC/2020/qualification_round_2020.in.zip">
                    <span class="mdc-button__label">Download file</span>
                </a>  */}
                <button className="new-sub" onClick={handleShow}>
                    New Submission
                </button>
                <SubmissionForm show={show} handleClose={handleClose}/>
            </div>
        </div>
        
    );
}

export default Version;
