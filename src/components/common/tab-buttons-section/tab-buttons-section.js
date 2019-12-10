import React from 'react';
import PropTypes from 'prop-types';

import { TabButton } from './tab-button';
import styles from './tab-buttons-section.module.css';

export const TabButtonSectionTitles = {
  GENRE: 'GENRE',
  TITLE: 'TITLE',
  SEARCH_BY: 'SEARCH BY',

  SORT_BY: 'SORT BY',
  REALISE_DATE: 'RELEASE_DATE',
  RAITING: 'RAITING'
};

export const TabButtonSection = props => {
  const { sectionTitle, tabButtonsTitles, onClickTabButton } = props;

  const createTabButtons = tabButtonsTitles =>
    tabButtonsTitles.map((tabButtonTitle, index) => (
      <TabButton
        title={tabButtonTitle}
        onClickButton={onClickTabButton}
        key={tabButtonTitle}
        rightRadius={!!index}
      />
    ));

  return (
    <div className={styles.container}>
      <p className={styles.sectionTitle}>{sectionTitle}</p>
      {createTabButtons(tabButtonsTitles)}
    </div>
  );
};

TabButtonSection.propTypes = {
  sectionTitle: PropTypes.string,
  tabButtonsTitles: PropTypes.arrayOf(PropTypes.string),
  onClickTabButton: PropTypes.func
};
