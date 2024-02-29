import React from "react";
import PropTypes from "prop-types";
import myLogo from "/logo.png";
import { FaSearch } from "react-icons/fa";

function Navbar({ searchRecipe, setSearchRecipe, handleSearch }) {
  const handleChange = (e) => {
    setSearchRecipe(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div className="navbar-container">
      <img src={myLogo} alt="plantpleaser logo" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchRecipe}
          onChange={handleChange}
          placeholder="search for a recipe"
        />
        <button type="submit" className="search-btn" onClick={handleSubmit}>
          <FaSearch />
        </button>
      </form>
    </div>
  );
}

Navbar.propTypes = {
  searchRecipe: PropTypes.string.isRequired,
  setSearchRecipe: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default Navbar;
