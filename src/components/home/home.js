import React from 'react';
import PropTypes from 'prop-types';

import {
  Footer,
  FilmInfoCardsSection,
  TabButtonSection,
  TabButtonSectionTitles,
  FilmsCardsSummary,
  FilmsCardSummaryType,
} from '../common';
import { Header } from './header';
import styles from './home.module.css';

export const Home = ({
  filmsInfo,
  onClickTabButton,
  textInputValue,
  changeTextInputValue,
  onClickSubmitButton,
}) => {
  return (
    <div className={styles.container}>
      <Header
        onClickTabButton={onClickTabButton}
        onClickSubmitButton={onClickSubmitButton}
        textInputValue={textInputValue}
        changeInputTextFieldValue={changeTextInputValue}
      />
      <div className={styles.filmsCardsSortingSummary}>
        <FilmsCardsSummary
          filmsSummary={`${filmsInfo.length}`}
          summaryType={FilmsCardSummaryType.FILMS_AMOUNT}
        />
        <TabButtonSection
          sectionTitle={TabButtonSectionTitles.SORT_BY}
          tabButtonsTitles={[TabButtonSectionTitles.REALISE_DATE, TabButtonSectionTitles.RAITING]}
          onClickTabButton={onClickTabButton}
        />
      </div>
      <FilmInfoCardsSection filmsInfo={filmsInfo} onClickTabButton={onClickTabButton} />
      <Footer />
    </div>
  );
};

Home.propTypes = {
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
      runtime: PropTypes.number,
    }),
  ),
  onClickTabButton: PropTypes.func,
  textInputValue: PropTypes.string,
  changeTextInputValue: PropTypes.func,
  onClickSubmitButton: PropTypes.func,
};
