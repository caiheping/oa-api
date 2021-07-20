'use strict';

module.exports = {
  up: async queryInterface => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('dict_types', [
      {
        dictName: '显示状态',
        dictType: 'sys_show_hide',
        status: '1',
        remark: '显示状态',
        createdAt: new Date(),
        createdBy: 'admin',
      },
      {
        dictName: '状态数据',
        dictType: 'sys_normal_disable',
        status: '1',
        remark: '状态数据',
        createdAt: new Date(),
        createdBy: 'admin',
      },
      {
        dictName: '性别',
        dictType: 'sys_user_sex',
        status: '1',
        remark: '性别',
        createdAt: new Date(),
        createdBy: 'admin',
      },
      {
        dictName: '消息类型',
        dictType: 'sys_notice_type',
        status: '1',
        remark: '消息类型',
        createdAt: new Date(),
        createdBy: 'admin',
      },
      {
        dictName: '请求方式',
        dictType: 'sys_method_type',
        status: '1',
        remark: '请求方式',
        createdAt: new Date(),
        createdBy: 'admin',
      },
    ], {});
  },

  down: async queryInterface => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('dict_types', null, {});
  },
};
