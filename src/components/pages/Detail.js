import { Component } from "react";
import PropTypes from "prop-types";
import { ButtonBackToHome } from "./ButtonBackToHome";

const API_KEY = "81d7ead1";

export class Detail extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string,
    }),
  };

  state = {
    movie: {},
  };

  _fetchMovie({ id }) {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then((response) => response.json())
      .then((movie) => {
        // console.log("RESPONSE: ", movie);
        this.setState({ movie });
      });
  }

  componentDidMount() {
    console.log("detail - componentDidMount - props: ", this.props);
    const { id } = this.props.match.params;
    this._fetchMovie({ id });
  }

  render() {
    const { Title, Poster, Actors, Metascore, Plot } = this.state.movie;

    return (
      <div>
        <ButtonBackToHome />
        <h1 className="title">{Title}</h1>
        <img alt={Title} src={Poster} />
        <h3>{Actors}</h3>
        <p>{Metascore}</p>
        <p>{Plot}</p>
      </div>
    );
  }
}

// cambiar a function components, useEffect y useStare,
// arreglar routing,
// crear componente boton de volver a home

