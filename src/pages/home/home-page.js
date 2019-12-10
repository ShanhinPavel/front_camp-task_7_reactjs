import React, { Component } from 'react';

import { Home } from '../../components';
import { filmsData } from './mock-data';

export class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filmsInfo: filmsData,
      textInputValue: ''
    };
  }

  clickTabButton = () => {
    console.log('I am clicked');
  };

  clickSubmitButton = () => {
    const { textInputValue } = this.state;
    console.log(textInputValue);
  };

  changeTextInputValue = event => {
    const { value: textInputValue } = event.target;
    this.setState({ textInputValue });
  };

  render() {
    const { filmsInfo, textInputValue } = this.state;

    return (
      <Home
        filmsInfo={filmsInfo}
        onClickTabButton={this.clickTabButton}
        changeTextInputValue={this.changeTextInputValue}
        textInputValue={textInputValue}
        onClickSubmitButton={this.clickSubmitButton}
      />
    );
  }
}
