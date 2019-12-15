import React from 'react';
import PropTypes from 'prop-types';

import styles from './film-cards-summary.module.css';

export const FilmsCardSummaryType = {
  FILMS_AMOUNT: 1,
  GENRE: 2
};

export const FilmsCardsSummary = ({ summaryType, filmsSummary }) => {
  return summaryType === FilmsCardSummaryType.FILMS_AMOUNT ? (
    <p className={styles.text}>{`${filmsSummary} movie found`}</p>
  ) : (
    <p className={styles.text}>{`Films by ${filmsSummary} genre`}</p>
  );
};

FilmsCardsSummary.propTypes = {
  filmsSummary: PropTypes.string,
  summaryType: PropTypes.number
};
