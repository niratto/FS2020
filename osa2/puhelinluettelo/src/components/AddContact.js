import React from 'react'

const AddContact = ({addNumber,newName,handleNameChange,newNumber,handleNumberChange}) => {

  return (
    <>
    <h2>Add a New Contact</h2>
    <form onSubmit={addNumber}>
      <div>
        name: <input
          value={newName}
          onChange={handleNameChange}
        />
      </div>
      <div>
        number: <input
          value={newNumber}
          onChange={handleNumberChange}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
    </>
  )
}

export default AddContact