import { Component } from 'react';
import css from './ContactItem.module.css';
import PropTypes from 'prop-types';

export class ContactItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <li className={css.contactItem}>
        {item.name}: {item.phone}
        <button
          className={css.deleteBtn}
          type="button"
          onClick={() => this.props.deleteItem(item.id)}
        >
          Usuń
        </button>
      </li>
    );
  }
}

ContactItem.propTypes = {
  item: PropTypes.object,
  deleteItem: PropTypes.func,
};
