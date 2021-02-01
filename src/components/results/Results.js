import Card from 'react-bootstrap/Card';
import ResultItem from '../result-item/ResultItem';
import './Results.css';

const Results = ({ results }) => {
    const { fileResults, total} = results;
    return (
        <>
            <Card className="results">
                <Card.Header>Score</Card.Header>
                <Card.Body>
                    {fileResults.map((result, index) => {
                        return <ResultItem key={index} result={result} />
                    })}
                </Card.Body>
                <Card.Footer>
                    <ResultItem result={total} />
                </Card.Footer>
            </Card>
        </>
    )
}


export default Results;