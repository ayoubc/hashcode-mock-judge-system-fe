import { useState } from 'react';
import Contests from './components/contests/Contests';
import Results from './components/results/Results';
import Toaster from './components/toaster/Toaster'

import './App.css';

const INITIAL_RESULT = {
  "fileResults": [
    { id: "a", label: "A - Example", value: 0 },
    { id: "b", label: "B - Lovely landscapes", value: 0 },
    { id: "c", label: "C - Memorable moments", value: 0 },
    { id: "d", label: "D - Pet pictures", value: 0 },
    { id: "e", label: "E - Shiny selfies", value: 0 },
  ],
  "total": {label: "Total score", value: 0 }
}

const App = () => {
  const [results, setResults] = useState(INITIAL_RESULT);
  const [hasError, setHasError] = useState(false);

  const onNewSubmission = (newSubmissionResults, hasError) => {
    if (hasError) {
      setHasError(true);
      setTimeout(() => setHasError(false), 4000);
      return;
    }
    setHasError(false);
    console.log(newSubmissionResults);
    let newResults = [...results["fileResults"]];
    let { total } = results;
    total.value = 0;
    for(let key in newSubmissionResults) {
      for(let result of newResults) {
        if(result.id === key) {
          result.value = newSubmissionResults[key];
        }
      }
    }
    for(let result of newResults) {
      total.value += result.value;
    }
    setResults({"fileResults": newResults, total});
  }
  return (
    <div className="App">
      <h2> Google HashCode judge system <em>(mocked)</em></h2>
      <Contests onNewSubmission={onNewSubmission}/>
      <Results  results={results}/>
      {hasError && <Toaster message="An Error Occured. Please try again." status="500"/>}
    </div>
  );
}

export default App;
