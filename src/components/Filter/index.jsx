import css from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ onFilter }) => {
  const handleFilterChange = e => {
    onFilter(e.target.value);
  };

  return (
    <input
      className={css.input}
      type="text"
      onChange={handleFilterChange}
      placeholder="Search contacts by name..."
    />
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func,
};
