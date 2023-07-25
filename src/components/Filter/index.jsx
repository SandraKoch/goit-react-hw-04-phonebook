import { Component } from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

export class Filter extends Component {
  handleFilterChange = e => {
    console.log(e.target.value);
    this.props.onFilter(e.target.value);
  };

  render() {
    // console.log('test');
    return (
      <input
        className={css.input}
        type="text"
        onChange={this.handleFilterChange}
        placeholder="Search contacts by name..."
      />
    );
  }
}

Filter.propTypes = {
  onFilter: PropTypes.func,
};
