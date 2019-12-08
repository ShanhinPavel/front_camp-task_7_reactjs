import React, { Component } from "react";

import { SearchInput } from "./search-input";
import { SearchButton } from "./search-button";
import styles from "./search-form.module.css";

export class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = { textInputValue: "" };
  }

  clickSubmitButton = () => {
    const { textInputValue } = this.state;
    console.log(textInputValue);
  };

  changeTextInputValue = event => {
    const { value: textInputValue } = event.target;
    this.setState({ textInputValue });
  };

  render() {
    const { textInputValue } = this.state;

    return (
      <div className={styles.container}>
        <SearchInput
          onChangeInputValue={this.changeTextInputValue}
          inputValue={textInputValue}
        />
        <SearchButton onClickButton={this.clickSubmitButton} />
      </div>
    );
  }
}
