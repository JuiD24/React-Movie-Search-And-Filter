import React, { useState } from "react";

const Search = ({ onSearchChange }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    onSearchChange(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search movies..."
        value={input}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
