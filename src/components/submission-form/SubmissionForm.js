import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import InputField from '../input-field/InputField';
import api from '../../api';

import './SubmissionForm.css';


const SubmissionForm = ({ show, handleClose }) => {
    const [selectedFiles, setSelectedFiles] = useState(null);

    const onChangeFile = (event) => {
        setSelectedFiles(event.target.files);
    }

    const uploadFile = async () => {
        const formData = new FormData();
        for(let i=0; i<selectedFiles.length; i++) {
            formData.append(
                `file_${i}`,
                selectedFiles[i],
                selectedFiles[i].name
            );
        }
        
        try{
            const response = await api.post("/files-upload", formData);
            console.log(response.data);
            handleClose();
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <Modal 
            show={show} onHide={handleClose} size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Create submission</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <InputField onChangeFile={onChangeFile}/>
            </Modal.Body>
            <Modal.Footer>
                <Button 
                    variant="outline-secondary" 
                    onClick={handleClose}
                >
                    Cancel
                </Button>
                <Button 
                    variant="outline-success" 
                    onClick={uploadFile}
                    disabled={selectedFiles === null}
                >
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SubmissionForm;
