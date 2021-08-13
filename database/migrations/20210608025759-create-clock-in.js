'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('clock_ins', {
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
        defaultValue: '1',
        comment: '类型（1公司打卡 2外出打卡）',
      },
      wifi: {
        allowNull: false,
        type: Sequelize.STRING,
        comment: '打卡WiFi',
      },
      firstClockInAddr: {
        type: Sequelize.STRING,
        comment: '上班打卡地址',
      },
      firstClockInTime: {
        type: Sequelize.DATE,
        comment: '上班打卡时间',
      },
      lastClockInAddr: {
        type: Sequelize.STRING,
        comment: '下班打卡地址',
      },
      lastClockInTime: {
        type: Sequelize.DATE,
        comment: '下班打卡时间',
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
    await queryInterface.dropTable('clock_ins');
  },
};
