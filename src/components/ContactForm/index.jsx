import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const ContactForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  // state = { name: '', phone: '' };

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handlePhoneChange = e => {
    setPhone(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAdd(name, phone);
  };

  return (
    <form className={css.formWrap} onSubmit={handleSubmit}>
      <label htmlFor="name" className={css.inputLabel}>
        Name
        <input
          type="text"
          id="name"
          placeholder="Type here..."
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleNameChange}
        />
      </label>
      <label htmlFor="number" className={css.inputLabel}>
        Phone number
        <input
          type="tel"
          id="number"
          placeholder="Type here..."
          pattern="(\+[0-9]{2}\s)?[0-9]{3}[\s\-]?[0-9]{3}[\s\-]?[0-9]{3}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handlePhoneChange}
        />
      </label>
      <button type="submit" className={css.submitBtn}>
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onAdd: PropTypes.func,
};
