import request from '../utils/request'


// 获取手机账号
export async function commonGetAccountByToken(params) {
  return request.post(`/educationright/getAccountByToken`,params)
}

// 校验验证码
export async function commonCheckSMSCode(params) {
  return request.post(`/educationright/checkSMSCode`,params)
}

// 获取兑换码
export async function commonGetExchangeCodes(params) {
  return request.post(`/educationright/getExchangeCode`,params)
}

// 获取验证码
export async function commonGetSMSCodes(params) {
  return request.post(`educationright/getSMSCode`,params)
}

// 查询权益
export async function commonQueryEducationRight(params) {
  return request.post(`/educationright/queryEducationRight`,params)
}