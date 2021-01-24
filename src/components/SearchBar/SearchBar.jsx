import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const { term } = this.state;
    const { onTermSubmit } = this.props;
    onTermSubmit(term);
  };

  render() {
    const { term } = this.state;
    return (
      <div className="search-bar ui segment" style={{ marginTop: 10 }}>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="search">
              Video Search:
              <input
                id="search"
                type="text"
                value={term}
                placeholder="Search YouTube Videos..."
                onChange={this.onInputChange}
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onTermSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
