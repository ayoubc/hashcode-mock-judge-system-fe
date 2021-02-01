import { useState } from 'react';
import { Button, Modal, Spinner } from 'react-bootstrap';
import UploadFile from '../upload-file/UploadFile';
import api from '../../api';

import './SubmissionForm.css';

const FILES = [
    { label: "A - Example", inputId: "a" },
    { label: "B - Lovely landscapes", inputId: "b" },
    { label: "C - Memorable moments", inputId: "c" },
    { label: "D - Pet pictures", inputId: "d" },
    { label: "E - Shiny selfies", inputId: "e" }
];

const INITIAL_SELECTED_FILES = {
    "a": null,
    "b": null,
    "c": null,
    "d": null,
    "e": null,
}

const noFileChoosed = (obj) => {
    for (let key in obj) {
        if (obj[key]) return false;
    }
    return true;
}

const SubmissionForm = ({ show, handleClose, onNewSubmission }) => {
    const [loading, setLoading] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState(INITIAL_SELECTED_FILES);

    if (!show) return null;

    const onChangeFile = (id, file) => {
        setSelectedFiles({ ...selectedFiles, [id]: file });
    }

    const uploadFile = async () => {
        const formData = new FormData();
        for (let key in selectedFiles) {
            const file = selectedFiles[key];
            if (file) {
                formData.append(key, file, file.name);
            }
        }

        try {
            setLoading(true);
            const response = await api.post("/files-upload", formData);
            onNewSubmission(response.data, false);
            setSelectedFiles(INITIAL_SELECTED_FILES);
            setLoading(false);
            handleClose();
        }
        catch (error) {
            setLoading(false);
            onNewSubmission({}, true);
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
                <div className="subheader">
                    <b >Output files for data sets.</b> Upload the output file for at least one data set.
                </div>
                {FILES.map((info, index) => {
                    return <UploadFile key={index} onChangeFile={onChangeFile} info={info} />
                })}

            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="outline-success" onClick={uploadFile} disabled={noFileChoosed(selectedFiles)}>
                    {!loading && "Submit"}
                    {loading && <> <Spinner as="span" animation="border" size="sm"role="status"/> Uploading files... </> }
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SubmissionForm;
