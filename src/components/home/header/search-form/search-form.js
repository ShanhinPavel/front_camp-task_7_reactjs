import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { SearchInput } from './search-input';
import { SearchButton } from './search-button';
import styles from './search-form.module.css';

export const SearchForm = props => {
  const { onChangeTextInputValue, textInputValue, onClickSubmitButton } = props;

  return (
    <div className={styles.container}>
      <SearchInput
        onChangeInputValue={onChangeTextInputValue}
        inputValue={textInputValue}
      />
      <SearchButton onClickButton={onClickSubmitButton} />
    </div>
  );
};

SearchForm.propTypes = {
  onChangeTextInputValue: PropTypes.func,
  textInputValue: PropTypes.string,
  onClickSubmitButton: PropTypes.func
};
