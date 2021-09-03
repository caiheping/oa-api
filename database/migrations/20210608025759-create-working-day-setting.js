'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('working_day_settings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER,
      },
      day: {
        allowNull: false,
        type: STRING,
        comment: '工作日期',
      },
      remark: {
        type: STRING,
        comment: '备注',
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
  down: async queryInterface => {
    await queryInterface.dropTable('working_day_settings');
  },
};
