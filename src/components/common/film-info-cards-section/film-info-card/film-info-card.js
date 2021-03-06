import React from 'react';
import PropTypes from 'prop-types';

import styles from './film-info-card.module.css';
import { concatGenres, getReleaseYear } from '../../../../utils';
import { Poster } from '../../poster';
import { Link } from 'react-router-dom';
import { Routes } from '../../../../services';
import { generatePathToFilmDetails } from '../../../../services/routes';

export const FilmInfoCard = props => {
  const { filmInfo } = props;
  const { poster_path, title, genres, release_date, id } = filmInfo;
  const relatedGenres = concatGenres(genres);
  const releaseYear = getReleaseYear(release_date);

  return (
    <div className={styles.cardContainer}>
      <Link to={{ pathname: generatePathToFilmDetails(id) }}>
        <Poster title={title} poster_path={poster_path} />
      </Link>
      <div className={styles.filmInfoContainer}>
        <div className={styles.titleAndRealizeDataContainer}>
          <p className={styles.filmTitle}>{title}</p>
          <p className={styles.realizeData}>{releaseYear}</p>
        </div>
        <p className={styles.filmGenre}>{relatedGenres}</p>
      </div>
    </div>
  );
};

FilmInfoCard.propTypes = {
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
