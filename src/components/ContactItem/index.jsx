import css from './ContactItem.module.css';
import PropTypes from 'prop-types';

export const ContactItem = ({ item, deleteItem }) => {
  return (
    <li className={css.contactItem}>
      {item.name}: {item.phone}
      <button
        className={css.deleteBtn}
        type="button"
        onClick={() => deleteItem(item.id)}
      >
        Usuń
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  item: PropTypes.object,
  deleteItem: PropTypes.func,
};
