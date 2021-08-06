'use strict';
const httpCode = require('../utils/http-code');

module.exports = {
  // response通用返回
  returnBody(data = null, code = 0, status = 200) {
    this.status = status;
    this.httpLog();
    this.body = {
      code,
      message: httpCode[code] ? httpCode[code] : 'success',
      data,
    };
  },
  async httpLog() {
    if (this.method.toLowerCase() !== 'get' && this.state.user) {
      const query = {
        method: this.request.method,
        url: this.request.url,
        ip: this.request.ip,
        data: JSON.stringify(this.request.body),
        status: this.status,
      };
      console.log(this.status);
      query.createdAt = new Date();
      query.createdBy = this.state.user.userName;
      this.model.Logs.create(query);
    }

  },
  async checkValidate(datas, path) {
    try { // 校验规则, 如果沒有新建文件则不校验
      const validate = Object.assign({}, datas);
      return await this.validate(path, validate);
    } catch (error) {
      console.log(error);
      return true;
    }
  },
};
