'use strict';

const rule = {
  dateLists: [
    {
      validator(rule, value, callback) {
        if (value && Object.prototype.toString.call(value) === '[object Array]' && value.length) {
          callback(); // 验证通过
          return;
        }
        callback({ message: '工作日期不能为空' }); // 验证不通过
      },
    },
  ],
};

module.exports = rule;
