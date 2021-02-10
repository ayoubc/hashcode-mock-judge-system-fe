import { useState } from 'react';
import TrashIcon from './icon-trash.svg';
import './InputField.css';


const FileInfo = ({file, reset}) => {
    const getFileSizeInKB = (size) => {
        return (size / 1000).toFixed(2);
    }

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

    const onClick = (event) => {
        // this is a little tricky ==> to enable the user select the same file
        // otherwis, if selects a file then remove it, he will not be able to choose the same file!
       event.target.value = null;
    }

    return (
        <div className="file-input">
            <input type="file" id={id} className="file" onClick={onClick} onChange={onSelectFile} accept=".txt" />
            {selectedFile ? <FileInfo file={selectedFile} reset={unSelectFile}/> : <label htmlFor={id}>Choose file</label>}
        </div>
    );
}

export default InputField;
