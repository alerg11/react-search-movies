import { Component } from "react";

import { Title } from "../Title";
import { SearchForm } from "../SearchForm";
import { MoviesList } from "../MoviesList";

export class Home extends Component {
  state = {
    results: [],
    usedSearch: false,
  };

  _onResults = (results) => {
    this.setState({ results, usedSearch: true });
  };

  _renderResults() {
    const { results } = this.state;

    return results.length === 0 ? (
      <p>Sorry - No results</p>
    ) : (
      <MoviesList movies={results} />
    );
  }

  render() {
    const { usedSearch } = this.state;

    return (
      <div>
        <Title>Search Movies</Title>
        <div className="search-form-container">
          <SearchForm resultsHandler={this._onResults} />
        </div>

        {usedSearch ? (
          this._renderResults()
        ) : (
          <small>Use the form to search a movie</small>
        )}
      </div>
    );
  }
}
