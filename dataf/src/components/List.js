
// List.js
import React from 'react';
import Contact from './Contact';

function List({ contacts, onSelectConversation }) {
    if (!Array.isArray(contacts)) {
        return <div>No contacts available.</div>;
    }

    return (
        <div>
       
            {contacts.map((contact, index) => (
                <Contact
                    key={index}
                    name={contact}
                    onSelectConversation ={onSelectConversation}
                />
            ))}
        </div>
    );
}

export default List;

