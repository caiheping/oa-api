'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER } = Sequelize;
    await queryInterface.createTable('role_menus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER,
      },
      roleId: {
        allowNull: false,
        type: INTEGER,
        comment: '角色roleId',
      },
      menuId: {
        allowNull: false,
        type: INTEGER,
        comment: '菜单menuId',
      },
    });
  },
  down: async queryInterface => {
    await queryInterface.dropTable('role_menus');
  },
};
