import React, { useState } from "react";
import Search from "./components/Search";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";
import { movies } from "./data";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [ratingFilter, setRatingFilter] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState([]);

  const handleSearchChange = (term) => setSearchTerm(term);
  const handleRatingChange = (ratings) => setRatingFilter(ratings);
  const handleCategoryChange = (categories) => setCategoryFilter(categories);

  return (
    <div>
      <h1>Movie Search and Filter</h1>
      <Search onSearchChange={handleSearchChange} />
      <Filter
        onRatingChange={handleRatingChange}
        onCategoryChange={handleCategoryChange}
      />
      <MovieList
        movies={movies}
        searchTerm={searchTerm}
        ratingFilter={ratingFilter}
        categoryFilter={categoryFilter}
      />
    </div>
  );
};

export default App;
