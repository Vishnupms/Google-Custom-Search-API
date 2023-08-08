
import React, { useState } from 'react';

function SearchBar({ handleSearch }) {
  const [query, setQuery] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your search query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={() => handleSearch(query)}>Search</button>
    </div>
  );
}

export default SearchBar