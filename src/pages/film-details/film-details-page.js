import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { DetailFilmInfo } from '../../components';
import { filmsData } from '../mock-data';

export class FilmDetailsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filmInfo: filmsData[0],
      filmsTheSameGenre: filmsData
    };
  }

  render() {
    const { filmInfo, filmsTheSameGenre } = this.state;

    return (
      <DetailFilmInfo
        filmInfo={filmInfo}
        filmsTheSameGenre={filmsTheSameGenre}
      />
    );
  }
}

FilmDetailsPage.propTypes = {
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
  genres: PropTypes.arrayOf(PropTypes.string)
};
