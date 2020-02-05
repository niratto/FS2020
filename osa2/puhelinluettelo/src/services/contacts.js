import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const remove = (id, contact, setErrorNotification, setDeleteNotification, timeout) => {
  let result = window.confirm(timeout + ": Are you really sure you want to delete '" + contact.name + "'\n...with really old-school CGI-kinda way?!?!?!?!");
  if (result === true) {

    const request = axios.delete(`${baseUrl}/${id}`).then((res) => {
      setDeleteNotification(contact.name + " deleteth from the phonebook of terror")
      setTimeout(() => {
        setDeleteNotification(null)
        window.location.reload(); // really sorry about this... I am a retard. :(
      }, timeout)

      console.log("In here I should probably place some awesome action-thingy...")
      
    })
      .catch(function (error) {
        setErrorNotification(contact.name + " has already been deleted from the phonebook")
        setTimeout(() => {
          setErrorNotification(null)
          window.location.reload(); // really sorry about this... I am a retard. :(
        }, timeout)
        
      });


  }
}

export default {
  getAll: getAll,
  create: create,
  update: update,
  remove: remove
}