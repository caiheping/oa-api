'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('make_up_cards', {
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
      clockInId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        comment: '打卡id',
      },
      type: {
        type: Sequelize.STRING,
        comment: '类型（上午/下午）',
      },
      makeUpCardReason: {
        type: Sequelize.STRING,
        comment: '补卡原因',
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: '0',
        comment: '审批状态',
      },
      remark: {
        type: Sequelize.INTEGER,
        comment: '审批备注',
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
    await queryInterface.dropTable('make_up_cards');
  },
};
