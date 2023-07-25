import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    console.log('componentDidMount');
    const contacts = localStorage.getItem('My-Contacts');

    try {
      const parsedContacts = JSON.parse(contacts) || [];

      this.setState(() => ({
        contacts: parsedContacts,
      }));
    } catch (error) {
      console.log('error', error);
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts.length !== prevState.contacts.length) {
      localStorage.setItem('My-Contacts', JSON.stringify(this.state.contacts));
      console.log('componentDidUpdate');
    }
  }

  addContact = (newContact, newNumber) => {
    const exists = this.state.contacts.find(
      contact => contact.name === newContact
    );
    if (!exists) {
      const newPersonContact = {
        name: newContact,
        id: nanoid(),
        phone: newNumber,
      };

      this.setState(prevState => ({
        contacts: [...prevState.contacts, newPersonContact],
      }));
      Notify.success(`${newContact} has been added to your Phonebook`);
    } else {
      Notify.warning(`${newContact} is already in your Phonebook`);
    }
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => id !== contact.id),
    }));
    const contact = this.state.contacts.find(item => item.id === id);
    Notify.failure(`${contact.name} has been deleted`);
  };

  filterContacts = newFilter => {
    this.setState(() => ({
      filter: newFilter,
    }));
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onAdd={(name, phone) => this.addContact(name, phone)} />

        <h2>Contacts</h2>
        <Filter onFilter={filter => this.filterContacts(filter)} />
        <ContactList
          contactItems={this.state.contacts}
          filter={this.state.filter}
          deleteItem={id => this.deleteContact(id)}
        />
      </div>
    );
  }
}
