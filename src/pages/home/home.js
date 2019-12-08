import React, { Component } from "react";

import { SearchForm, Title, FilmInfoCard } from "../../components";
import styles from "./home.module.css";
import { filmsData } from "./mock-data";

const HOME_PAGE_TITLE = "FIND YOUR MOVIE";

export class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filmsInfo: filmsData
    };
  }
  clickButton = () => {
    console.log("I am clicked");
  };

  createFilmInfoCards = filmsInfo => {
    if (!filmsInfo.length) return null;

    return filmsInfo.map(info => (
      <FilmInfoCard key={info.id} filmInfo={info} />
    ));
  };

  render() {
    const { filmsInfo } = this.state;
    const filmsInfoCards = this.createFilmInfoCards(filmsInfo);

    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <Title content={HOME_PAGE_TITLE} />
          <SearchForm />
        </div>
        <div className={styles.contentSection}>{filmsInfoCards}</div>
        <div className={styles.footer}>
          <p className={styles.companyName}>
            <span>netflix</span>Roulette
          </p>
        </div>
      </div>
    );
  }
}
