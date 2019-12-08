import React from "react";
import PropTypes from "prop-types";

import styles from "./film-info-card.module.css";

export const FilmInfoCard = props => {
  const { filmInfo } = props;
  const { imgUrl, title, genre, releaseData } = filmInfo;

  return (
    <div className={styles.cardContainer}>
      <img alt={title} src={imgUrl} className={styles.filmImg} />
      <div className={styles.filmInfoContainer}>
        <div className={styles.titleAndRealizeDataContainer}>
          <p className={styles.filmTitle}>{title}</p>
          <p className={styles.realizeData}>{releaseData}</p>
        </div>
        <p className={styles.filmGenre}>{genre}</p>
      </div>
    </div>
  );
};

FilmInfoCard.propTypes = {
  filmInfo: PropTypes.shape({
    id: PropTypes.number,
    imgUrl: PropTypes.string,
    title: PropTypes.string,
    genre: PropTypes.string,
    releaseData: PropTypes.number
  })
};

export default FilmInfoCard;
