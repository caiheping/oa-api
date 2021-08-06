'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('logs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER,
      },
      method: {
        type: STRING,
        comment: '请求方式',
      },
      url: {
        type: STRING,
        comment: '地址',
      },
      ip: {
        type: STRING,
        defaultValue: null,
        comment: 'ip',
      },
      data: {
        type: STRING,
        comment: '请求参数',
      },
      status: {
        type: INTEGER,
        comment: 'http状态码',
      },
      createdAt: {
        allowNull: true,
        type: DATE,
        comment: '创建时间',
      },
      createdBy: {
        allowNull: true,
        type: STRING,
        comment: '创建者',
      },
      updatedAt: {
        allowNull: true,
        type: DATE,
        comment: '更新时间',
      },
      updatedBy: {
        allowNull: true,
        type: STRING,
        comment: '更新者',
      },
    });
  },
  // 在执行数据库降级时调用的函数，删除 logs 表
  down: async queryInterface => {
    await queryInterface.dropTable('logs');
  },
};
