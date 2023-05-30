import { useState } from 'react';

const ContactList = () => {
    const [contacts, setContacts] = useState([
        { id: 1, name: 'Julian Garcia', phone: '123' },
    ]);

    const addContact = () => {
        setContacts(prevContacts => [
            ...prevContacts,
            { id: 0, name: 'New Contact', phone: '000' }
        ]);
    };

    return (
        <div>
            <button onClick={addContact}>Agregar Contacto</button>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>
                        <p>{contact.name}</p>
                        <p>{contact.phone}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactList;