import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { Logo, Poster, Title } from '../../common';
import styles from './header-detail-film-info.module.css';
import { getReleaseYear } from '../../../utils';
import { Routes } from '../../../services';

export const DetailFilmInfoHeader = props => {
  const {
    poster_path,
    title,
    vote_count,
    runtime = 200,
    release_date,
    overview
  } = props.filmInfo;

  const releaseYear = getReleaseYear(release_date);

  return (
    <div className={styles.container}>
      <div className={styles.logoAndSearchButtonContainer}>
        <Logo />
        <Link to={{ pathname: Routes.home }}>
          <FontAwesomeIcon icon={faSearch} size="3x" color="#f65261" />
        </Link>
      </div>
      <div className={styles.filmInfoContainer}>
        <Poster poster_path={poster_path} title={title} />
        <div className={styles.generalInfo}>
          <div className={styles.titleAndRaiting}>
            <Title content={title} />
            <p className={styles.raiting}>{vote_count}</p>
          </div>
          <div className={styles.durationAndReleaseYear}>
            <p className={styles.releaseYear}>{releaseYear}</p>
            <p className={styles.duration}>{!runtime && '200'} min</p>
          </div>
          <p className={styles.description}>{overview}</p>
        </div>
      </div>
    </div>
  );
};

DetailFilmInfoHeader.propTypes = {
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
    genres: PropTypes.arrayOf(PropTypes.string),
    runtime: PropTypes.number
  })
};
