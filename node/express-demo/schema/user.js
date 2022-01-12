const joi = require('@hapi/joi')

/**
 * string() 值必须是字符串
 * alphanum() 值只能包含 a-zA-Z0-9的字符串
 * min(length) 最小长度
 * max(length) 最大长度
 * required() 值是必填项，不能为 undefined
 * pattern(正则表达式)
 */
const username = joi.string().alphanum().min(1).max(10).required()
const password = joi.string().alphanum().required()

// 注册和登录表单的验证规则对象
exports.reg_login_schema = {
  // body 对象
  body: {
    username,
    password,
  }
  // query 对象
  // params 对象
}