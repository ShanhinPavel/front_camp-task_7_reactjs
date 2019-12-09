import React from "react";
import PropTypes from "prop-types";

export const DetailFilmInfo = () => {
  return <div></div>;
};

DetailFilmInfopropTypes = {
  id: 0,
  title: PropTypes.string,
  tagline: PropTypes.string,
  vote_average: PropTypes.number,
  vote_count: PropTypes.number,
  release_date: PropTypes.string,
  poster_path: PropTypes.string,
  overview: PropTypes.string,
  budget: PropTypes.number,
  revenue: PropTypes.number,
  runtime: PropTypes.number,
  genres: PropTypes.array[PropTypes.string]
};
