import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState, useEffect } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    initializeContactsFromLS();
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('My-Contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact, newNumber) => {
    const exists = contacts.find(contact => contact.name === newContact);
    if (!exists) {
      const newPersonContact = {
        name: newContact,
        id: nanoid(),
        phone: newNumber,
      };

      setContacts([...contacts, newPersonContact]);

      Notify.success(`${newContact} has been added to your Phonebook`);
    } else {
      Notify.warning(`${newContact} is already in your Phonebook`);
    }
  };

  const deleteContact = id => {
    const contact = contacts.find(contact => id === contact.id);
    if (contact) {
      Notify.failure(`${contact.name} has been deleted`);
      setContacts(contacts.filter(contact => id !== contact.id));
    }
  };

  const filterContacts = newFilter => {
    setFilter(newFilter);
  };

  const initializeContactsFromLS = () => {
    const contactsFromLS = localStorage.getItem('My-Contacts');
    console.log('contactsFromLS', contactsFromLS);

    try {
      const parsedContacts = JSON.parse(contactsFromLS) || [];
      console.log('parsedContacts', parsedContacts);

      return parsedContacts;
    } catch (error) {
      console.log('error', error);
    }
  };

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
      <ContactForm onAdd={(name, phone) => addContact(name, phone)} />

      <h2>Contacts</h2>
      <Filter onFilter={filter => filterContacts(filter)} />
      <ContactList
        contactItems={contacts}
        filter={filter}
        deleteItem={id => deleteContact(id)}
      />
    </div>
  );
};
