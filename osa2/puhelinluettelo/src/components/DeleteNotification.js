import React from 'react'

const DeleteNotification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className="delete">
        {message}
      </div>
    )
  }

  export default DeleteNotification