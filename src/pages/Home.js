import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementSearch } from "../redux/actions";

import Title from "../components/Title";
import SearchForm from "../components/SearchForm";
import MoviesList from "../components/MoviesList";

// Using redux with hooks useSelector & useDispatch
const Home = () => {
  
  const dispatch = useDispatch();
  const searchCount = useSelector((state) => state.searchCount);

  const [results, setResults] = useState([]);
  const [usedSearch, setUsedSearch] = useState(false);

  const _onResults = (results) => {
    dispatch(incrementSearch());
    
    setResults(results);
    setUsedSearch(true);
  };

  const _renderResults = () => {
    return results.length === 0 ? (
      <p>Sorry - No results</p>
    ) : (
      <MoviesList movies={results} />
    );
  };

  return (
    <div>
      <Title>Search Movies</Title>
      <div className="search-form-container">
        <SearchForm resultsHandler={_onResults} />
      </div>

      <p>Búsquedas realizadas: {searchCount}</p>

      {usedSearch ? (
        _renderResults()
      ) : (
        <small>Use the form to search a movie</small>
      )}
    </div>
  );
};

export default Home;
