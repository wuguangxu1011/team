import axios from 'axios'
const baseURL = window.g.api
const apiTimeOut = window.g.apiTimeOut
const service = axios.create({
  baseURL: baseURL,
  withCredentials: false, // 请求为跨域类型时是否在请求中协带cookie
  timeout: apiTimeOut * 1000, // 请求超时时间
  //headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
})

axios.interceptors.request.use(config => {
  console.log(config,"config")
  return config;
}, err => {
  this.$message.error('请求超时');
  return Promise.resolve(err);
});

export default service