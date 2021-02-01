import { useState } from 'react';
import TrashIcon from './icon-trash.svg';
import './InputField.css';


const FileInfo = ({file, reset}) => {

    const getFileSizeInKB = (size) => {
        return (size / 1000).toFixed(2);
    }

    if(!file) return null;
    return (
        <>
            <img src={TrashIcon} className="trash-icon" onClick={reset} alt="Trash Icon"/>
            <p className="file-name"> {file.name} - {getFileSizeInKB(file.size)}KB</p>
        </>
    )
}

const InputField = ({ onChangeFile, id }) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const onSelectFile = (event) => {
        const { files } = event.target;
        setSelectedFile(files[0]);
        onChangeFile(id, files[0]);
    }
    const unSelectFile = () => {
        setSelectedFile(null);
        onChangeFile(id, null);
    }
    return (
        <div className="file-input">
            <input type="file" id={id} className="file" onChange={onSelectFile} accept=".txt" />
            {selectedFile ? null : <label htmlFor={id}>Choose file</label>}
            <FileInfo file={selectedFile} reset={unSelectFile}/>
        </div>

    );
}

export default InputField;
