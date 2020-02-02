import React, { useState, useEffect } from 'react'
import Search from './components/Search'
import AddContact from './components/AddContact'
import ShowContacts from './components/ShowContacts'
import contactService from './services/contacts'

const App = (props) => {
  const [contacts, setContact] = useState([])
  const [newName, setnewName] = useState('')
  const [newNumber, setnewNumber] = useState('')
  const [newSearch, setnewSearch] = useState('')
  const [showAll, setShowAll] = useState(true)

  const deleteContact = (id,contacts) => {  
    contactService
      .remove(id,contacts)

    console.log("After DELETE: ", id, contacts)
  }

  useEffect(() => {
    console.log("hookedi hook")
    contactService
      .getAll()
      .then(response => {
        setContact(response.data)
      })
  }, [])
  
  const addNumber = (event) => {
    event.preventDefault()
    const numObject = {
      name: newName,
      number: newNumber
    }

    // Check for duplicates
    let duplicateContactFound = false
    let emptyContactGiven = false
    contacts.map(function (number) {
      if (number.name === newName) {
        alert(newName + " is already added to phonebook")
        duplicateContactFound = true
      }
      return (null)
    })

    if (newName.length < 1) {
      alert("Can't add empty contact!")
      emptyContactGiven = true
    }

    // if no duplicates... concate new note to contacts
    if (!duplicateContactFound && !emptyContactGiven) {
      contactService
        .create(numObject)
        .then(response => {
          console.log("numObject",numObject)
          setContact(contacts.concat(response))
          setnewName('')
          setnewNumber('')
        })

        setShowAll(true)
    }



  }

  const handleNameChange = (event) => {
    setnewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setnewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setnewSearch(event.target.value)
    setShowAll(false)
  }
  console.log("showAll", showAll)
  const contactsToShow = showAll
    ? contacts
    : contacts.filter(contacts => contacts.name.includes(newSearch))

  return (
    <div>
      <Search handleSearchChange={handleSearchChange} />
      <AddContact addNumber={addNumber}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange} />
      <ShowContacts contactsToShow={contactsToShow}
        deleteContact={deleteContact}
      />
    </div>
  )

}

export default App