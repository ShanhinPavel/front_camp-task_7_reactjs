import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Home } from '../../components';
import { FilmAPI, searchBy, sortBy } from '../../services';
import { store } from '../../store';
import { getFilms, getTextInputValue, getSortType } from '../../actions';

class HomeContainer extends Component {
  fetchData = async (searchParams) => {
    try {
      const { data: films } = await FilmAPI.getFilmsByQuery(searchParams);
      store.dispatch(getFilms(films));
    } catch (error) {}
  };

  async componentDidMount() {
    await this.fetchData({
      searchBy: searchBy.TITLE,
      sortBY: sortBy.RELEASE_DATE,
      textInputValue: '',
    });
  }

  clickSubmitButton = async () => {
    const { textInputValue, searchBy, sortBy } = this.props;
    await this.fetchData({ search: textInputValue, searchBy, sortBy });
  };

  render() {
    const { filmsList, textInputValue, changeTextInputValue, clickTabButton } = this.props;

    return (
      <Home
        filmsInfo={filmsList}
        onClickTabButton={clickTabButton}
        changeTextInputValue={changeTextInputValue}
        textInputValue={textInputValue}
        onClickSubmitButton={this.clickSubmitButton}
      />
    );
  }
}

HomeContainer.propTypes = {
  filmsList: PropTypes.arrayOf(
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
      runtime: PropTypes.number,
      genres: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
};

const mapStateToProps = (state) => ({
  filmsList: state.films,
  textInputValue: state.textInputValue,
  searchBy: state.searchBy,
  sortBy: state.sortBy,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeTextInputValue: (event) => {
      dispatch(getTextInputValue(event.target.value));
    },
    clickTabButton: () => {
      dispatch(getSortType(sortBy.RELEASE_DATE));
    },
  };
};

export const homeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
