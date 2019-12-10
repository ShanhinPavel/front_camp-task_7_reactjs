import React from 'react';
import PropTypes from 'prop-types';

import styles from './film-info-cards-section.module.css';
import { FilmInfoCard } from './film-info-card';
import {
  TabButtonSection,
  TabButtonSectionTitles
} from '../tab-buttons-section';

const createFilmInfoCards = filmsInfo => {
  if (!filmsInfo.length) return null;

  return filmsInfo.map(info => <FilmInfoCard key={info.id} filmInfo={info} />);
};

export const FilmInfoCardsSection = props => {
  const { filmsInfo, onClickTabButton } = props;
  const filmsInfoCards = createFilmInfoCards(filmsInfo);

  return (
    <>
      <TabButtonSection
        sectionTitle={TabButtonSectionTitles.SORT_BY}
        tabButtonsTitles={[
          TabButtonSectionTitles.REALISE_DATE,
          TabButtonSectionTitles.RAITING
        ]}
        onClickTabButton={onClickTabButton}
      />
      {filmsInfoCards && (
        <div className={styles.container}>{filmsInfoCards}</div>
      )}
    </>
  );
};

FilmInfoCardsSection.propTypes = {
  filmsInfo: PropTypes.arrayOf(
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
  ),
  onClickTabButton: PropTypes.func
};
