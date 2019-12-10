import React from 'react';
import PropTypes from 'prop-types';

import {
  Logo,
  Title,
  TabButtonSection,
  TabButtonSectionTitles
} from '../../common';
import { SearchForm } from './search-form';
import styles from './header.module.css';

const FIND_YOUR_MOVIE = 'FIND YOUR MOVIE';

export const Header = props => {
  const {
    onClickTabButton,
    onClickSubmitButton,
    changeInputTextFieldValue,
    textInputValue
  } = props;

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>

      <div className={styles.searchContainer}>
        <Title content={FIND_YOUR_MOVIE} />
        <SearchForm
          onChangeTextInputValue={changeInputTextFieldValue}
          textInputValue={textInputValue}
          onClickSubmitButton={onClickSubmitButton}
        />
        <TabButtonSection
          sectionTitle={TabButtonSectionTitles.SEARCH_BY}
          tabButtonsTitles={[
            TabButtonSectionTitles.GENRE,
            TabButtonSectionTitles.TITLE
          ]}
          onClickTabButton={onClickTabButton}
        />
      </div>
    </div>
  );
};

Header.propTypes = {
  onClickTabButton: PropTypes.func,
  onClickSubmitButton: PropTypes.func,
  changeInputTextFieldValue: PropTypes.func,
  textInputValue: PropTypes.string
};
