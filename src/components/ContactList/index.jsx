import { ContactItem } from '../ContactItem';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ contactItems, deleteItem, filter }) => {
  return (
    <div>
      <ul className={css.contactList}>
        {contactItems
          .filter(item =>
            item.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(item => (
            <ContactItem
              key={item.id}
              item={item}
              deleteItem={id => deleteItem(id)}
            />
          ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  filter: PropTypes.string,
  deleteItem: PropTypes.func,
  contactItems: PropTypes.arrayOf(PropTypes.object),
};
