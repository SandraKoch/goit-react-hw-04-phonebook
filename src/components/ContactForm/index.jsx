import { Component } from 'react';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

export class ContactForm extends Component {
  state = { name: '', phone: '' };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handlePhoneChange = e => {
    this.setState({ phone: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAdd(this.state.name, this.state.phone);
  };

  render() {
    return (
      <form className={css.formWrap} onSubmit={this.handleSubmit}>
        <label htmlFor="name" className={css.inputLabel}>
          Name
          <input
            type="text"
            id="name"
            placeholder="Type here..."
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleNameChange}
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
            onChange={this.handlePhoneChange}
          />
        </label>
        <button type="submit" className={css.submitBtn}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onAdd: PropTypes.func,
};
