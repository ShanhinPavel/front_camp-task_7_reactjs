import React from 'react';
import PropTypes from 'prop-types';

import { Header } from './header-detail-film-info';
import styles from './detail-film-info.module.css';
import {
  FilmInfoCardsSection,
  Footer,
  FilmsCardsSummary,
  FilmsCardSummaryType
} from '../common';

export const DetailFilmInfo = props => {
  const { filmsTheSameGenre, filmInfo } = props;

  return (
    <div className={styles.container}>
      <Header filmInfo={filmInfo} />
      <div className={styles.filmsCardsSortingSummary}>
        <FilmsCardsSummary
          summaryType={FilmsCardSummaryType.GENRE}
          filmsSummary={filmInfo.genres[0]}
        />
      </div>
      <FilmInfoCardsSection
        filmsInfo={filmsTheSameGenre}
        onClickTabButton={() => {}}
      />
      <Footer />
    </div>
  );
};

DetailFilmInfo.propTypes = {
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
    genres: PropTypes.arrayOf(PropTypes.string)
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
      genres: PropTypes.arrayOf(PropTypes.string),
      runtime: PropTypes.number
    })
  )
};
