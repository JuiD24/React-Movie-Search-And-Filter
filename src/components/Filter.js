import React, { useState, useEffect, useRef } from "react";
import "./Filter.css"; // Make sure this file contains the necessary styles

const Filter = ({ onRatingChange, onCategoryChange }) => {
  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const ratingRef = useRef(null);
  const categoryRef = useRef(null);

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (ratingRef.current && !ratingRef.current.contains(event.target)) {
        setIsRatingOpen(false);
      }
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setIsCategoryOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleRatingDropdown = () => {
    setIsRatingOpen(!isRatingOpen);
  };

  const toggleCategoryDropdown = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const handleRatingChange = (rating) => {
    const newRatings = selectedRatings.includes(rating)
      ? selectedRatings.filter((r) => r !== rating)
      : [...selectedRatings, rating];
    setSelectedRatings(newRatings);
    onRatingChange(newRatings);
  };

  const handleCategoryChange = (category) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(newCategories);
    onCategoryChange(newCategories);
  };

  return (
    <div className="filter-container">
      <div className="dropdown" ref={ratingRef}>
        <button className="dropdown-btn" onClick={toggleRatingDropdown}>
          Rating
        </button>
        {isRatingOpen && (
          <div className="dropdown-content">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((rating) => (
              <label key={rating}>
                <input
                  type="checkbox"
                  checked={selectedRatings.includes(rating)}
                  onChange={() => handleRatingChange(rating)}
                />
                {rating}
              </label>
            ))}
          </div>
        )}
      </div>

      <div className="dropdown" ref={categoryRef}>
        <button className="dropdown-btn" onClick={toggleCategoryDropdown}>
          Category
        </button>
        {isCategoryOpen && (
          <div className="dropdown-content">
            {["Action", "Drama", "Comedy", "Horror", "Romance"].map(
              (category) => (
                <label key={category}>
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                  />
                  {category}
                </label>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
