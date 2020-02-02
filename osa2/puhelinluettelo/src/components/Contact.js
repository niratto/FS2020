import React from 'react'

const Contact = ({ contact, deleteContact }) => {
  return (
    <p>
        {contact.name} {contact.number}
        <button onClick={deleteContact}>Delete</button>
    </p>
  )
}

export default Contact