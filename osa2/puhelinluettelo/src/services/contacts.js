import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

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

const remove = (id, contact) => {
  let result = window.confirm("Are you really sure you want to delete '" + contact.name + "'\n...with really old-school CGI-kinda way?!?!?!?!");
  if (result === true) {
    axios.delete(`${baseUrl}/${id}`)
  }
}

export default {
  getAll: getAll,
  create: create,
  update: update,
  remove: remove
}