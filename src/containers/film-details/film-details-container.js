import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { store } from '../../store';
import { DetailFilmInfo } from '../../components';
import { getFilmById, getFilmsByQuery, searchBy } from '../../services/api';
import { getFilmDetails, getFilms } from '../../actions';

export class FilmDetailsContainer extends Component {
  fetchData = async (filmId) => {
    try {
      const filmDetail = await getFilmById(filmId);
      console.log(filmDetail.genres[0]);
      const { data: filmsByGenre } = await getFilmsByQuery({
        searchBy: searchBy.GENRES,
        search: filmDetail.genres[0],
      });

      store.dispatch(getFilmDetails(filmDetail));
      store.dispatch(getFilms(filmsByGenre));
    } catch (error) {}
  };
  async componentDidMount() {
    await this.fetchData(this.props.match.params.filmId);
  }

  render() {
    const { filmInfo, filmsList } = this.props;

    if (filmInfo.id)
      return <DetailFilmInfo tailFilmInfo filmInfo={filmInfo} filmsTheSameGenre={filmsList} />;

    return <h1>Spinner</h1>;
  }
}

FilmDetailsContainer.propTypes = {
  filmInfo: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    tagline: PropTypes.string,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    overview: PropTypes.string,
    budget: PropTypes.number,
    revenue: PropTypes.number,
    runtime: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string),
  }),
  filmsTheSameGenre: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      tagline: PropTypes.string,
      vote_average: PropTypes.number,
      vote_count: PropTypes.number,
      release_date: PropTypes.string,
      poster_path: PropTypes.string,
      overview: PropTypes.string,
      budget: PropTypes.number,
      revenue: PropTypes.number,
      runtime: PropTypes.number,
      genres: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
};

const mapStateToProps = (state) => ({
  filmInfo: state.filmDetails,
  filmsList: state.films,
});

const mapDispatchToProps = (dispatch, ownProps) => {};

export const filmDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilmDetailsContainer);
