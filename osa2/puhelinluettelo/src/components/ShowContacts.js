import React from 'react'
import Contact from './Contact'

const ShowContacts = ({ contactsToShow, deleteContact }) => {
  return (
    <div>
    <h2>Contacts</h2>
      {contactsToShow.map((contact, i) =>
        <Contact  key={i} 
                  contact={contact} 
                  deleteContact={() => deleteContact(contact.id,contact)}
                  />
      )}
    </div>
  )
}

export default ShowContacts