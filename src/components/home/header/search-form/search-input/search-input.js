import React from "react";
import PropTypes from "prop-types";

import styles from "./search-input.module.css";

export const SearchInput = props => {
  const { onChangeInputValue, inputValue } = props;

  return (
    <input
      type="text"
      size="40"
      value={inputValue}
      onChange={onChangeInputValue}
      className={styles.textInput}
    />
  );
};

SearchInput.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onChangeInputValue: PropTypes.func.isRequired
};
