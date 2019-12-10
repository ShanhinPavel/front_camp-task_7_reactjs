import React from 'react';
import PropTypes from 'prop-types';

import { Logo, Poster, Title } from '../../common';
import styles from './header.module.css';
import { getReleaseYear } from '../../../utils';

export const Header = props => {
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
        <button className={styles.searchIcon}>search</button>
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

Header.propTypes = {
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
