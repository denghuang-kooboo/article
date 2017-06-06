import axios from 'axios'
export default {
  getUsers () {
    return axios.get('/api/contact')
  },
  getUser (id) {
    return axios.get('/api/contact/' + id)
  },
  login (accountName, password) {
    return axios.post('/api/login', { accountName: accountName, password: password })
  },
  logout (token) {
    return axios.post('/api/logout', { token: token })
  },
  register (info) {
    return axios.post('/api/register', {
      account: info.account,
      birthDate: info.birthDate,
      email: info.email,
      gender: +info.gender,
      name: info.name,
      password: info.password,
      phone: info.phone
    })
  }
}
