import React from 'react'
import Contact from './Contact'

const ShowContacts = ({contactsToShow}) => {
  return (
    <div>
    <h2>Contacts</h2>
    {contactsToShow.map((contact, i) =>
      <Contact key={i} contact={contact} />
    )}
  </div>

  )
}

export default ShowContacts