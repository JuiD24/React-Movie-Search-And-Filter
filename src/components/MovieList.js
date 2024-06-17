import React from "react";

const MovieList = ({ movies, searchTerm, ratingFilter, categoryFilter }) => {
  const filteredMovies = movies.filter((movie) => {
    const matchesSearchTerm =
      searchTerm === "" ||
      movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRating =
      ratingFilter.length === 0 ||
      ratingFilter.includes(Math.floor(movie.rating));
    const matchesCategory =
      categoryFilter.length === 0 || categoryFilter.includes(movie.category);

    return matchesSearchTerm && matchesRating && matchesCategory;
  });

  return (
    <div>
      <h3>Movies List</h3>
      <ul>
        {filteredMovies.map((movie, index) => (
          <li key={index}>
            {movie.title} - {movie.rating} - {movie.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
