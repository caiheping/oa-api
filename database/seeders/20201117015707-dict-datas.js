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
    await queryInterface.bulkInsert('dict_datas', [
      {
        dictSort: 1,
        dictLabel: '显示',
        dictValue: '1',
        dictType: 'sys_show_hide',
        cssClass: null,
        listClass: null,
        isDefault: 'Y',
        status: '1',
        remark: '显示',
        createdAt: new Date(),
        createdBy: 'admin',
      },
      {
        dictSort: 2,
        dictLabel: '隐藏',
        dictValue: '0',
        dictType: 'sys_show_hide',
        cssClass: null,
        listClass: null,
        isDefault: 'Y',
        status: '1',
        remark: '隐藏',
        createdAt: new Date(),
        createdBy: 'admin',
      },
      {
        dictSort: 1,
        dictLabel: '正常',
        dictValue: '1',
        dictType: 'sys_normal_disable',
        cssClass: null,
        listClass: null,
        isDefault: 'Y',
        status: '1',
        remark: '正常',
        createdAt: new Date(),
        createdBy: 'admin',
      },
      {
        dictSort: 2,
        dictLabel: '停用',
        dictValue: '0',
        dictType: 'sys_normal_disable',
        cssClass: null,
        listClass: null,
        isDefault: 'Y',
        status: '1',
        remark: '停用',
        createdAt: new Date(),
        createdBy: 'admin',
      },
      {
        dictSort: 2,
        dictLabel: '男',
        dictValue: '1',
        dictType: 'sys_user_sex',
        cssClass: null,
        listClass: null,
        isDefault: 'Y',
        status: '1',
        remark: '男',
        createdAt: new Date(),
        createdBy: 'admin',
      },
      {
        dictSort: 1,
        dictLabel: '女',
        dictValue: '0',
        dictType: 'sys_user_sex',
        cssClass: null,
        listClass: null,
        isDefault: 'Y',
        status: '1',
        remark: '女',
        createdAt: new Date(),
        createdBy: 'admin',
      },


      {
        dictSort: 1,
        dictLabel: '消息',
        dictValue: '1',
        dictType: 'sys_notice_type',
        cssClass: null,
        listClass: null,
        isDefault: 'Y',
        status: '1',
        remark: '女',
        createdAt: new Date(),
        createdBy: 'admin',
      },
      {
        dictSort: 2,
        dictLabel: '公告',
        dictValue: '2',
        dictType: 'sys_notice_type',
        cssClass: null,
        listClass: null,
        isDefault: 'Y',
        status: '1',
        remark: '女',
        createdAt: new Date(),
        createdBy: 'admin',
      },


      {
        dictSort: 1,
        dictLabel: 'GET',
        dictValue: 'GET',
        dictType: 'sys_method_type',
        cssClass: null,
        listClass: null,
        isDefault: 'Y',
        status: '1',
        remark: 'GET',
        createdAt: new Date(),
        createdBy: 'admin',
      },
      {
        dictSort: 2,
        dictLabel: 'POST',
        dictValue: 'POST',
        dictType: 'sys_method_type',
        cssClass: null,
        listClass: null,
        isDefault: 'Y',
        status: '1',
        remark: 'POST',
        createdAt: new Date(),
        createdBy: 'admin',
      },
      {
        dictSort: 3,
        dictLabel: 'PUT',
        dictValue: 'PUT',
        dictType: 'sys_method_type',
        cssClass: null,
        listClass: null,
        isDefault: 'Y',
        status: '1',
        remark: 'PUT',
        createdAt: new Date(),
        createdBy: 'admin',
      },
      {
        dictSort: 4,
        dictLabel: 'DELETE',
        dictValue: 'DELETE',
        dictType: 'sys_method_type',
        cssClass: null,
        listClass: null,
        isDefault: 'Y',
        status: '1',
        remark: 'DELETE',
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
    await queryInterface.bulkDelete('dict_datas', null, {});
  },
};
