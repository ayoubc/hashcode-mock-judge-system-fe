import './InputField.css';


const InputField = ({ onChangeFile }) => {
    
    return (
        <div>
            <input type="file" onChange={onChangeFile} multiple accept=".txt"/>
        </div>

    );
}

export default InputField;
