import React from 'react';

function SearchResult({ results }) {
  return (
    <div className="results">
      {results.map((result, index) => (
        <div key={index} className="result">
          <h2>{result.title}</h2>
          <a href={result.link}>{result.link}</a>
          <p>{result.snippet}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchResult