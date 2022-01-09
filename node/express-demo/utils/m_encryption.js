/**
 * 加密工具
 */
const bcrypt = require('bcryptjs')

/**
 * @param {str} original_str 明文
 * @param {int} random_len 随机盐长度
 * 常用于密码加密
 */
exports.bcrype_encode = (original_str, random_len) => {
  return bcrypt.hashSync(original_str, random_len);
}

/**
 * 
 * @param {str} origin_str  原始字符串
 * @param {str} bcrypt_str  加密字符串
 * @returns 
 */
exports.bcrype_compare = (origin_str, bcrypt_str) => {
  return bcrypt.compareSync(origin_str, bcrypt_str)
}
