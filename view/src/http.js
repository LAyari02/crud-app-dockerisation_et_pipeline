import axios from 'axios'

let http = axios.create({
  baseURL: 'http://localhost:3001/api', // Correction du port pour correspondre au backend
  headers: {
    'Content-type': 'application/json'
  }
})

export default http