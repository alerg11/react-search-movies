import { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ButtonBackToHome from "../components/ButtonBackToHome";

const API_KEY = "81d7ead1";

// Using redux with connect()

const Detail = ({ match, searchCount }) => {
  const [movie, setMovie] = useState({});

  const _fetchMovie = (id) => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then((response) => response.json())
      .then((movie) => {
        // console.log("RESPONSE: ", movie);
        setMovie(movie);
      });
  };

  useEffect(() => {
    // console.log("detail - componentDidMount - props: ", match);
    const { id } = match.params;
    _fetchMovie(id);
  }, [match]);

  const { Title, Poster, Actors, Metascore, Plot } = movie;

  return (
    <div>
      <ButtonBackToHome />
      <p>Búsquedas realizadas: {searchCount}</p>
      <h1 className="title">{Title}</h1>
      <img alt={Title} src={Poster} />
      <h3>{Actors}</h3>
      <p>{Metascore}</p>
      <p>{Plot}</p>
    </div>
  );
};

Detail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
    isExact: PropTypes.bool,
    path: PropTypes.string,
    url: PropTypes.string,
  }),
};

const mapStateToProps = (state) => ({
  searchCount: state.searchCount,
});

export default connect(mapStateToProps)(Detail);
