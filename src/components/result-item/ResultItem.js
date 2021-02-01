import './ResultItem.css';

const ResultItem = ({ result}) => {
    return (
        <div className="result-item">
            <span> {result.label}</span>
            <span> <b>{result.value}</b> points</span>
        </div>
    )
}


export default ResultItem;