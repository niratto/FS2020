import React, { useState, useEffect } from 'react'
import Search from './components/Search'
import AddContact from './components/AddContact'
import ShowContacts from './components/ShowContacts'
import Notification from './components/Notification'
import ErrorNotification from './components/ErrorNotification'
import DeleteNotification from './components/DeleteNotification'
import contactService from './services/contacts'

const App = (props) => {
  const [contacts, setContact] = useState([])
  const [newName, setnewName] = useState('')
  const [newNumber, setnewNumber] = useState('')
  const [newSearch, setnewSearch] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorNotification, setErrorNotification] = useState(null)
  const [notification, setNotification] = useState(null)
  const [deleteNotification, setDeleteNotification] = useState(null)
  const timeout = 3000

  const deleteContact = (id, contacts) => {
    contactService
      .remove(id, contacts, setErrorNotification, setDeleteNotification, timeout)

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
        setErrorNotification(newName + " is already added to phonebook")
        setTimeout(() => {
          setErrorNotification(null)
        }, timeout)
        duplicateContactFound = true
      }
      return (null)
    })

    if (newName.length < 1) {
      setErrorNotification("Can't add empty contact!")
          setTimeout(() => {
            setErrorNotification(null)
          }, timeout)
      emptyContactGiven = true
    }

    // if no duplicates... concate new note to contacts
    if (!duplicateContactFound && !emptyContactGiven) {
      contactService
        .create(numObject)
        .then(response => {
          console.log("numObject", response)
          setContact(contacts.concat(response))
          setnewName('')
          setnewNumber('')
          setShowAll(true)
          setNotification(newName + " addeth to the phonebook of terror")
          setTimeout(() => {
            setNotification(null)
          }, timeout)
        })
        .catch((response) => {
          setErrorNotification("You tried to add '" + newName + "' which had insufficient data (name and phonenumber is required)")
          setTimeout(() => {
            setErrorNotification(null)
          }, timeout)
          })
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
      <ErrorNotification message={errorNotification} />
      <Notification message={notification} />
      <DeleteNotification message={deleteNotification} />
      <h2>Phonebook</h2>
      <Search handleSearchChange={handleSearchChange} />
      <h2>Add a New Contact</h2>
      <AddContact addNumber={addNumber}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange} />
      <h2>Contacts</h2>
      <ShowContacts contactsToShow={contactsToShow}
        deleteContact={deleteContact}
      />
    </div>
  )

}

export default App