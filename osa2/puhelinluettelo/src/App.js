import React, { useState, useEffect } from 'react'
import Search from './components/Search'
import AddContact from './components/AddContact'
import ShowContacts from './components/ShowContacts'
import axios from 'axios'

const App = (props) => {
  const [contacts, setNumber] = useState([])
  const [newName, setnewName] = useState('')
  const [newNumber, setnewNumber] = useState('')
  const [newSearch, setnewSearch] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setNumber(response.data)
      })
  }, [])
  console.log('render', contacts.length, 'notes')

  const addNumber = (event) => {
    event.preventDefault()
    const numObject = {
      name: newName,
      number: newNumber
    }

    let noNameFound = false
    contacts.map(function (number) {
      if (number.name === newName) {
        alert(newName + " is already added to phonebook")
        noNameFound = true
      }
      return(null)
    })

    if (!noNameFound)
      setNumber(contacts.concat(numObject))
    
    setShowAll(true)
    setnewName('')
    setnewNumber('')
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
  console.log("showAll",showAll)
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
                  handleNumberChange={handleNumberChange}/>
      <ShowContacts contactsToShow={contactsToShow} />
    </div>
  )

}

export default App