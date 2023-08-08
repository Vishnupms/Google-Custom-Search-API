import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const apiUrl = 'http://localhost:8000/api/search?q=' + query;
      const response = await axios.get(apiUrl);
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div className="App">
      <h1>Google Custom Search</h1>
      <input
        type="text"
        placeholder="Enter your search query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div className="results">
        {results.map((result, index) => (
          <div key={index} className="result">
            <h2>{result.title}</h2>
            <a href={result.link}>{result.link}</a>
            <p>{result.snippet}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
