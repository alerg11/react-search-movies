import { useState } from "react";

const API_KEY = "81d7ead1";

const SearchForm = ({ resultsHandler }) => {
  const [inputMovie, setInputMovie] = useState("");

  const _handleChange = (e) => {
    setInputMovie(e.target.value);
  };

  const _handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
      .then((response) => response.json())
      .then((results) => {
        const { Search = [], totalResults = "0" } = results;
        console.log("RESPONSE: ", { Search, totalResults });
        resultsHandler(Search);
      });
  };

  return (
    <form onSubmit={_handleSubmit}>
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Find a movie"
            onChange={_handleChange}
          />
        </div>
        <div className="control">
          <button className="button is-info">Search</button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
