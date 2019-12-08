import React from "react";
import PropTypes from "prop-types";

export const TabButton = props => {
  const { onClickButton, title } = props;

  return <button onClick={onClickButton}></button>;
};

TabButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClickButton: PropTypes.func.isRequired
};
