import React from 'react'

const Search = ({handleSearchChange,newSearch}) => {  
  return (
    <div>
      search: <input
        value={newSearch}
        onChange={handleSearchChange}
      />
    </div>
  )
}

export default Search