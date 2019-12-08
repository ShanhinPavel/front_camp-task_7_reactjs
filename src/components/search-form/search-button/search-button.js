import React from "react";
import PropTypes from "prop-types";

import styles from "./search-button.module.css";

export const SearchButton = props => {
  const { onClickButton } = props;

  return (
    <button className={styles.button} onClick={onClickButton}>
      SEARCH
    </button>
  );
};

SearchButton.propTypes = {
  onClickButton: PropTypes.func.isRequired
};
