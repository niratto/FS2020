import React from 'react'

const Search = ({handleSearchChange,newSearch}) => {  
  return (
    <div>
      <h2>Phonebook</h2>
      search: <input
        value={newSearch}
        onChange={handleSearchChange}
      />
    </div>
  )
}

export default Search