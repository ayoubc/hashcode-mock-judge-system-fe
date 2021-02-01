import InputField from '../input-field/InputField';
import './UploadFile.css';


const UploadFile = ({ onChangeFile, info }) => {
    
    return (
        <div className="input-file-group">
            <div className="file-label">{info.label}</div>
            <InputField onChangeFile={onChangeFile} id={info.inputId} />
        </div>
    );
}

export default UploadFile;
