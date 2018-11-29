import axios from 'axios'
import config from './config'

axios.interceptors.request.use(function (request) {
  request.baseURL = config.serviceIp
  // Successed
  request.transformRequest = function (data) {
    if (data) {
      let stringify = ''
      for (var i of Object.keys(data)) {
        let key = encodeURIComponent(i)
        let value = encodeURIComponent(data[i])
        stringify += `${key}=${value}&`
      }
      return stringify
    }
  }
  return request
}, function (error) {
  // Failed
  console.log(error)
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  // Successed
  console.log(response)
  return response.data.resultObj
}, function (error) {
  // Failed
  console.log(error)
  return Promise.reject(error)
})
