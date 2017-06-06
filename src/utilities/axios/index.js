import axios from 'axios'

axios.defaults.baseURL = 'http://www.article.com'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.interceptors.request.use(function (config) {
  // do something before request is sent
  if (sessionStorage.getItem('token')) {
    config.headers.Authorization = sessionStorage.getItem('token')
  }
  return config
}, function (error) {
  // do something with request error
  return Promise.reject(error)
})

// add a response interceptor
axios.interceptors.response.use(function (response) {
  // do something with response data
  return response
}, function (error) {
  console.log(111)
  sessionStorage.removeItem('token')
  sessionStorage.removeItem('userInfo')
  // do something with response error
  return Promise.reject(error)
})
