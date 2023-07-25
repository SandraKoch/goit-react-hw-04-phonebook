import { Component } from 'react';
import { ContactItem } from '../ContactItem';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export class ContactList extends Component {
  render() {
    return (
      <div>
        <ul className={css.contactList}>
          {this.props.contactItems
            .filter(item =>
              item.name.toLowerCase().includes(this.props.filter.toLowerCase())
            )
            .map(item => (
              <ContactItem
                key={item.id}
                item={item}
                deleteItem={id => this.props.deleteItem(id)}
              />
            ))}
        </ul>
      </div>
    );
  }
}

ContactList.propTypes = {
  filter: PropTypes.string,
  deleteItem: PropTypes.func,
  contactItems: PropTypes.arrayOf(PropTypes.object),
};
