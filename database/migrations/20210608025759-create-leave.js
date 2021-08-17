'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('leaves', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        comment: '用户id',
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING,
        comment: '请假类型',
      },
      leaveDuration: {
        type: Sequelize.INTEGER,
        comment: '请假时长',
      },
      leaveReason: {
        type: Sequelize.STRING,
        comment: '请假原因',
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: '0',
        comment: '状态',
      },
      startTime: {
        type: Sequelize.DATE,
        comment: '开始时间',
      },
      endTime: {
        type: Sequelize.DATE,
        comment: '结束时间',
      },
      remark: {
        type: Sequelize.INTEGER,
        comment: '备注',
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
        comment: '创建时间',
      },
      createdBy: {
        allowNull: true,
        type: Sequelize.STRING,
        comment: '创建者',
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        comment: '更新时间',
      },
      updatedBy: {
        allowNull: true,
        type: Sequelize.STRING,
        comment: '更新者',
      },
    });
  },
  down: async queryInterface => {
    await queryInterface.dropTable('leaves');
  },
};
