/*
 Navicat Premium Data Transfer

 Source Server         : 127.0.0.1
 Source Server Type    : MySQL
 Source Server Version : 80016
 Source Host           : 127.0.0.1:3306
 Source Schema         : egg-oa-sys

 Target Server Type    : MySQL
 Target Server Version : 80016
 File Encoding         : 65001

 Date: 19/07/2021 11:00:42
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for departments
-- ----------------------------
DROP TABLE IF EXISTS `departments`;
CREATE TABLE `departments`  (
  `deptId` int(11) NOT NULL AUTO_INCREMENT,
  `parentId` int(11) NOT NULL COMMENT '父Id',
  `deptName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '部门名称',
  `orderNum` int(11) NOT NULL COMMENT '显示顺序',
  `status` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '1' COMMENT '部门状态（1正常 0停用）',
  `isDelete` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '0' COMMENT '删除标志（0代表存在 1代表删除）',
  `createdAt` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '创建者',
  `updatedAt` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新者',
  PRIMARY KEY (`deptId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of departments
-- ----------------------------
INSERT INTO `departments` VALUES (1, 0, '总部', 1, '1', '0', '2021-07-08 14:52:13', 'admin', NULL, NULL);
INSERT INTO `departments` VALUES (2, 1, '技术部', 1, '1', '0', '2021-07-08 14:52:13', 'admin', NULL, NULL);
INSERT INTO `departments` VALUES (3, 1, '测试部', 2, '1', '0', '2021-07-14 18:21:27', 'admin', NULL, NULL);
INSERT INTO `departments` VALUES (4, 2, '技术一部', 1, '1', '0', '2021-07-14 18:21:41', 'admin', NULL, NULL);
INSERT INTO `departments` VALUES (5, 3, '测试一部', 1, '1', '0', '2021-07-14 18:21:49', 'admin', NULL, NULL);
INSERT INTO `departments` VALUES (6, 2, '技术二部', 2, '1', '0', '2021-07-14 18:22:00', 'admin', NULL, NULL);

-- ----------------------------
-- Table structure for dict_datas
-- ----------------------------
DROP TABLE IF EXISTS `dict_datas`;
CREATE TABLE `dict_datas`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dictSort` int(11) NOT NULL COMMENT '字典排序',
  `dictLabel` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '字典标签',
  `dictValue` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '字典键值',
  `dictType` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '字典类型',
  `cssClass` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '样式属性（其他样式扩展）',
  `listClass` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '表格回显样式',
  `isDefault` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT 'Y' COMMENT '是否默认（Y是 N否）',
  `status` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '1' COMMENT '菜单状态（1正常 0停用）',
  `remark` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '备注',
  `createdAt` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '创建者',
  `updatedAt` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新者',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of dict_datas
-- ----------------------------
INSERT INTO `dict_datas` VALUES (1, 1, '正常', '1', 'sys_show_hide', NULL, NULL, 'Y', '1', '正常', '2021-07-08 14:52:13', 'admin', NULL, NULL);
INSERT INTO `dict_datas` VALUES (2, 2, '停用', '0', 'sys_show_hide', NULL, NULL, 'Y', '1', '停用', '2021-07-08 14:52:13', 'admin', NULL, NULL);
INSERT INTO `dict_datas` VALUES (3, 1, '正常', '1', 'sys_normal_disable', NULL, NULL, 'Y', '1', '正常', '2021-07-08 14:52:13', 'admin', NULL, NULL);
INSERT INTO `dict_datas` VALUES (4, 2, '停用', '0', 'sys_normal_disable', NULL, NULL, 'Y', '1', '停用', '2021-07-08 14:52:13', 'admin', NULL, NULL);
INSERT INTO `dict_datas` VALUES (5, 2, '男', '1', 'sys_user_sex', NULL, NULL, 'Y', '1', '男', '2021-07-08 14:52:13', 'admin', NULL, NULL);
INSERT INTO `dict_datas` VALUES (6, 1, '女', '0', 'sys_user_sex', NULL, NULL, 'Y', '1', '女', '2021-07-08 14:52:13', 'admin', NULL, NULL);

-- ----------------------------
-- Table structure for dict_types
-- ----------------------------
DROP TABLE IF EXISTS `dict_types`;
CREATE TABLE `dict_types`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dictName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '字典名称',
  `dictType` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '字典类型',
  `status` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '1' COMMENT '菜单状态（1正常 2停用）',
  `remark` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '备注',
  `createdAt` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '创建者',
  `updatedAt` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新者',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of dict_types
-- ----------------------------
INSERT INTO `dict_types` VALUES (1, '显示状态', 'sys_show_hide', '1', '显示状态', '2021-07-08 14:52:13', 'admin', NULL, NULL);
INSERT INTO `dict_types` VALUES (2, '状态数据', 'sys_normal_disable', '1', '状态数据', '2021-07-08 14:52:13', 'admin', NULL, NULL);
INSERT INTO `dict_types` VALUES (3, '性别', 'sys_user_sex', '1', '性别', '2021-07-08 14:52:13', 'admin', NULL, NULL);

-- ----------------------------
-- Table structure for menus
-- ----------------------------
DROP TABLE IF EXISTS `menus`;
CREATE TABLE `menus`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `parentId` int(11) NOT NULL COMMENT '父Id',
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '菜单名称',
  `path` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '菜单路径',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '名称',
  `component` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '组件路径',
  `isFrame` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '0' COMMENT '是否为外链（1是 0否）',
  `menuType` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT 'M' COMMENT '菜单类型（M目录 C菜单 F按钮）',
  `visible` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '1' COMMENT '菜单显示状态（1显示 0隐藏）',
  `orderNum` int(11) NOT NULL COMMENT '显示顺序',
  `status` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '1' COMMENT '菜单状态（1正常 0停用）',
  `perms` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '权限标识',
  `keepAlive` int(11) NULL DEFAULT 0 COMMENT '是否缓存',
  `icon` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '#' COMMENT '图标',
  `isDelete` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '0' COMMENT '删除标志（0代表存在 1代表删除）',
  `remark` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '备注',
  `createdAt` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '创建者',
  `updatedAt` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新者',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 36 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of menus
-- ----------------------------
INSERT INTO `menus` VALUES (1, 0, '首页', '/layout/home', 'Home', 'Home', '1', 'C', '1', 1, '1', '', 1, 'nav-home', '0', NULL, '2021-07-08 14:52:13', 'admin', '2021-07-13 16:49:36', 'admin');
INSERT INTO `menus` VALUES (2, 0, '系统管理', '/system', 'System', 'Layout', '1', 'M', '1', 20, '1', '', 0, 'nav-system', '0', NULL, '2021-07-08 14:52:13', 'admin', NULL, NULL);
INSERT INTO `menus` VALUES (3, 2, '用户中心', 'user', 'User', 'User', '1', 'C', '1', 1, '1', '', 0, '', '0', NULL, '2021-07-08 14:52:13', 'admin', '2021-07-13 10:04:45', 'admin');
INSERT INTO `menus` VALUES (4, 2, '角色管理', 'role', 'Role', 'Role', '1', 'C', '1', 2, '1', '', 0, '', '0', NULL, '2021-07-08 14:52:13', 'admin', NULL, NULL);
INSERT INTO `menus` VALUES (5, 2, '菜单管理', 'menu', 'Menu', 'Menu', '1', 'C', '1', 3, '1', '', 0, '', '0', NULL, '2021-07-08 14:52:13', 'admin', NULL, NULL);
INSERT INTO `menus` VALUES (6, 2, '部门管理', 'dept', 'Dept', 'Dept', '1', 'C', '1', 4, '1', '', 0, '', '0', NULL, '2021-07-08 14:52:13', 'admin', NULL, NULL);
INSERT INTO `menus` VALUES (7, 2, '字典管理', 'dict', 'Dict', 'Dict', '1', 'C', '1', 6, '1', '', 0, '', '0', NULL, '2021-07-08 14:52:13', 'admin', NULL, NULL);
INSERT INTO `menus` VALUES (8, 2, '数据字典', 'dictData/:id', 'DictData', 'DictData', '1', 'C', '0', 7, '1', '', 0, '', '0', NULL, '2021-07-08 14:52:13', 'admin', NULL, NULL);
INSERT INTO `menus` VALUES (9, 3, '查询', NULL, NULL, NULL, '0', 'F', '1', 1, '1', 'system:user:list', 0, '', '0', NULL, '2021-07-08 14:52:13', 'admin', NULL, NULL);
INSERT INTO `menus` VALUES (10, 3, '新增', NULL, NULL, NULL, '0', 'F', '1', 2, '1', 'system:user:add', 0, '', '0', NULL, '2021-07-08 14:52:13', 'admin', NULL, NULL);
INSERT INTO `menus` VALUES (11, 3, '修改', NULL, NULL, NULL, '0', 'F', '1', 3, '1', 'system:user:update', 0, '', '0', NULL, '2021-07-08 14:52:13', 'admin', NULL, NULL);
INSERT INTO `menus` VALUES (12, 3, '删除', NULL, NULL, NULL, '0', 'F', '1', 4, '1', 'system:user:delete', 0, '', '0', NULL, '2021-07-08 14:52:13', 'admin', NULL, NULL);
INSERT INTO `menus` VALUES (13, 3, '重置密码', NULL, NULL, NULL, '0', 'F', '1', 5, '1', 'system:user:resetPwd', 0, '', '0', NULL, '2021-07-08 14:52:13', 'admin', NULL, NULL);
INSERT INTO `menus` VALUES (14, 3, '修改头像', NULL, NULL, NULL, '0', 'F', '1', 6, '1', 'system:user:updateUserImg', 0, '', '0', NULL, '2021-07-08 14:52:13', 'admin', NULL, NULL);
INSERT INTO `menus` VALUES (15, 3, '修改密码', NULL, NULL, NULL, '0', 'F', '1', 7, '1', 'system:user:updateUserPwd', 0, '', '0', NULL, '2021-07-08 14:52:13', 'admin', NULL, NULL);
INSERT INTO `menus` VALUES (16, 4, '查询', NULL, NULL, NULL, '0', 'F', '1', 1, '1', 'system:role:list', 0, '', '0', NULL, '2021-07-08 14:52:13', 'admin', NULL, NULL);
INSERT INTO `menus` VALUES (17, 4, '新增', NULL, NULL, NULL, '0', 'F', '1', 2, '1', 'system:role:add', 0, '', '0', NULL, '2021-07-08 14:52:13', 'admin', NULL, NULL);
INSERT INTO `menus` VALUES (18, 4, '修改', NULL, NULL, NULL, '0', 'F', '1', 3, '1', 'system:role:update', 0, '', '0', NULL, '2021-07-08 14:52:13', 'admin', NULL, NULL);
INSERT INTO `menus` VALUES (19, 4, '删除', NULL, NULL, NULL, '0', 'F', '1', 4, '1', 'system:role:delete', 0, '', '0', NULL, '2021-07-08 14:52:13', 'admin', NULL, NULL);
INSERT INTO `menus` VALUES (20, 4, '修改角色状态', NULL, NULL, NULL, '0', 'F', '1', 5, '1', 'system:role:changeRoleStatus', 0, '', '0', NULL, '2021-07-08 14:52:13', 'admin', NULL, NULL);
INSERT INTO `menus` VALUES (21, 5, '查询', NULL, NULL, NULL, '0', 'F', '1', 1, '1', 'system:menu:list', 0, '', '0', NULL, '2021-07-08 14:52:13', 'admin', NULL, NULL);
INSERT INTO `menus` VALUES (22, 5, '新增', NULL, NULL, NULL, '0', 'F', '1', 2, '1', 'system:menu:add', 0, '', '0', NULL, '2021-07-08 14:52:13', 'admin', NULL, NULL);
INSERT INTO `menus` VALUES (23, 5, '修改', NULL, NULL, NULL, '0', 'F', '1', 3, '1', 'system:menu:update', 0, '', '0', NULL, '2021-07-08 14:52:13', 'admin', NULL, NULL);
INSERT INTO `menus` VALUES (24, 5, '删除', NULL, NULL, NULL, '0', 'F', '1', 4, '1', 'system:menu:delete', 0, '', '0', NULL, '2021-07-08 14:52:13', 'admin', NULL, NULL);
INSERT INTO `menus` VALUES (25, 6, '查询', NULL, NULL, NULL, '0', 'F', '1', 1, '1', 'system:department:list', 0, '', '0', NULL, '2021-07-08 14:52:13', 'admin', NULL, NULL);
INSERT INTO `menus` VALUES (26, 6, '新增', NULL, NULL, NULL, '0', 'F', '1', 2, '1', 'system:department:add', 0, '', '0', NULL, '2021-07-08 14:52:13', 'admin', NULL, NULL);
INSERT INTO `menus` VALUES (27, 6, '修改', NULL, NULL, NULL, '0', 'F', '1', 3, '1', 'system:department:update', 0, '', '0', NULL, '2021-07-08 14:52:13', 'admin', NULL, NULL);
INSERT INTO `menus` VALUES (28, 6, '删除', NULL, NULL, NULL, '0', 'F', '1', 4, '1', 'system:department:delete', 0, '', '0', NULL, '2021-07-08 14:52:13', 'admin', NULL, NULL);
INSERT INTO `menus` VALUES (29, 7, '查询', NULL, NULL, NULL, '0', 'F', '1', 1, '1', 'system:dictType:list', 0, '', '0', NULL, '2021-07-08 14:52:13', 'admin', NULL, NULL);
INSERT INTO `menus` VALUES (30, 7, '新增', NULL, NULL, NULL, '0', 'F', '1', 2, '1', 'system:dictType:add', 0, '', '0', NULL, '2021-07-08 14:52:13', 'admin', NULL, NULL);
INSERT INTO `menus` VALUES (31, 7, '修改', NULL, NULL, NULL, '0', 'F', '1', 3, '1', 'system:dictType:update', 0, '', '0', NULL, '2021-07-08 14:52:13', 'admin', NULL, NULL);
INSERT INTO `menus` VALUES (32, 7, '删除', NULL, NULL, NULL, '0', 'F', '1', 4, '1', 'system:dictType:delete', 0, '', '0', NULL, '2021-07-08 14:52:13', 'admin', NULL, NULL);
INSERT INTO `menus` VALUES (33, 8, '查询', NULL, NULL, NULL, '0', 'F', '1', 1, '1', 'system:dictData:list', 0, '', '0', NULL, '2021-07-08 14:52:13', 'admin', NULL, NULL);
INSERT INTO `menus` VALUES (34, 8, '新增', NULL, NULL, NULL, '0', 'F', '1', 2, '1', 'system:dictData:add', 0, '', '0', NULL, '2021-07-08 14:52:13', 'admin', NULL, NULL);
INSERT INTO `menus` VALUES (35, 8, '修改', NULL, NULL, NULL, '0', 'F', '1', 3, '1', 'system:dictData:update', 0, '', '0', NULL, '2021-07-08 14:52:13', 'admin', NULL, NULL);
INSERT INTO `menus` VALUES (36, 8, '删除', NULL, NULL, NULL, '0', 'F', '1', 4, '1', 'system:dictData:delete', 0, '', '0', NULL, '2021-07-08 14:52:13', 'admin', NULL, NULL);

-- ----------------------------
-- Table structure for notices
-- ----------------------------
DROP TABLE IF EXISTS `notices`;
CREATE TABLE `notices`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `noticeTitle` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '公告标题',
  `noticeType` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '1' COMMENT '公告类型（1通知 2公告）',
  `noticeContent` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '内容',
  `status` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '1' COMMENT '公告状态（1正常 0停用）',
  `remark` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '备注',
  `createdAt` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '创建者',
  `updatedAt` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新者',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for role_menus
-- ----------------------------
DROP TABLE IF EXISTS `role_menus`;
CREATE TABLE `role_menus`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `roleId` int(11) NOT NULL COMMENT '角色roleId',
  `menuId` int(11) NOT NULL COMMENT '菜单menuId',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 73 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of role_menus
-- ----------------------------
INSERT INTO `role_menus` VALUES (1, 1, 1);
INSERT INTO `role_menus` VALUES (2, 1, 2);
INSERT INTO `role_menus` VALUES (3, 1, 3);
INSERT INTO `role_menus` VALUES (4, 1, 4);
INSERT INTO `role_menus` VALUES (5, 1, 5);
INSERT INTO `role_menus` VALUES (6, 1, 6);
INSERT INTO `role_menus` VALUES (7, 1, 7);
INSERT INTO `role_menus` VALUES (8, 1, 8);
INSERT INTO `role_menus` VALUES (9, 1, 9);
INSERT INTO `role_menus` VALUES (10, 1, 10);
INSERT INTO `role_menus` VALUES (11, 1, 11);
INSERT INTO `role_menus` VALUES (12, 1, 12);
INSERT INTO `role_menus` VALUES (13, 1, 13);
INSERT INTO `role_menus` VALUES (14, 1, 14);
INSERT INTO `role_menus` VALUES (15, 1, 15);
INSERT INTO `role_menus` VALUES (16, 1, 16);
INSERT INTO `role_menus` VALUES (17, 1, 17);
INSERT INTO `role_menus` VALUES (18, 1, 18);
INSERT INTO `role_menus` VALUES (19, 1, 19);
INSERT INTO `role_menus` VALUES (20, 1, 20);
INSERT INTO `role_menus` VALUES (21, 1, 21);
INSERT INTO `role_menus` VALUES (22, 1, 22);
INSERT INTO `role_menus` VALUES (23, 1, 23);
INSERT INTO `role_menus` VALUES (24, 1, 24);
INSERT INTO `role_menus` VALUES (25, 1, 25);
INSERT INTO `role_menus` VALUES (26, 1, 26);
INSERT INTO `role_menus` VALUES (27, 1, 27);
INSERT INTO `role_menus` VALUES (28, 1, 28);
INSERT INTO `role_menus` VALUES (29, 1, 29);
INSERT INTO `role_menus` VALUES (30, 1, 30);
INSERT INTO `role_menus` VALUES (31, 1, 31);
INSERT INTO `role_menus` VALUES (32, 1, 32);
INSERT INTO `role_menus` VALUES (33, 1, 33);
INSERT INTO `role_menus` VALUES (34, 1, 34);
INSERT INTO `role_menus` VALUES (35, 1, 35);
INSERT INTO `role_menus` VALUES (36, 1, 36);
INSERT INTO `role_menus` VALUES (38, 2, 1);
INSERT INTO `role_menus` VALUES (39, 2, 2);
INSERT INTO `role_menus` VALUES (40, 2, 3);
INSERT INTO `role_menus` VALUES (41, 2, 9);
INSERT INTO `role_menus` VALUES (42, 2, 10);
INSERT INTO `role_menus` VALUES (43, 2, 11);
INSERT INTO `role_menus` VALUES (44, 2, 12);
INSERT INTO `role_menus` VALUES (45, 2, 13);
INSERT INTO `role_menus` VALUES (46, 2, 14);
INSERT INTO `role_menus` VALUES (47, 2, 15);
INSERT INTO `role_menus` VALUES (48, 2, 4);
INSERT INTO `role_menus` VALUES (49, 2, 16);
INSERT INTO `role_menus` VALUES (50, 2, 17);
INSERT INTO `role_menus` VALUES (51, 2, 18);
INSERT INTO `role_menus` VALUES (52, 2, 19);
INSERT INTO `role_menus` VALUES (53, 2, 20);
INSERT INTO `role_menus` VALUES (54, 2, 5);
INSERT INTO `role_menus` VALUES (55, 2, 21);
INSERT INTO `role_menus` VALUES (56, 2, 22);
INSERT INTO `role_menus` VALUES (57, 2, 23);
INSERT INTO `role_menus` VALUES (58, 2, 24);
INSERT INTO `role_menus` VALUES (59, 2, 6);
INSERT INTO `role_menus` VALUES (60, 2, 25);
INSERT INTO `role_menus` VALUES (61, 2, 26);
INSERT INTO `role_menus` VALUES (62, 2, 27);
INSERT INTO `role_menus` VALUES (63, 2, 28);
INSERT INTO `role_menus` VALUES (64, 2, 7);
INSERT INTO `role_menus` VALUES (65, 2, 29);
INSERT INTO `role_menus` VALUES (66, 2, 30);
INSERT INTO `role_menus` VALUES (67, 2, 31);
INSERT INTO `role_menus` VALUES (68, 2, 32);
INSERT INTO `role_menus` VALUES (69, 2, 8);
INSERT INTO `role_menus` VALUES (70, 2, 33);
INSERT INTO `role_menus` VALUES (71, 2, 34);
INSERT INTO `role_menus` VALUES (72, 2, 35);
INSERT INTO `role_menus` VALUES (73, 2, 36);

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `roleName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '角色名称',
  `roleKey` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '角色权限字符串',
  `roleSort` int(11) NOT NULL COMMENT '显示顺序',
  `dataScope` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '1' COMMENT '数据范围（1：本部门及以下数据权限 2：本部门数据权限 3：仅本人权限）',
  `status` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '1' COMMENT '角色状态（1正常 0停用）',
  `isDelete` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '0' COMMENT '删除标志（0代表存在 1代表删除）',
  `remark` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '备注',
  `createdAt` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '创建者',
  `updatedAt` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新者',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of roles
-- ----------------------------
INSERT INTO `roles` VALUES (1, '超级管理员', 'admin', 1, '1', '1', '0', NULL, '2021-07-08 14:52:13', 'admin', NULL, NULL);
INSERT INTO `roles` VALUES (2, '测试', 'ces', 1, '1', '1', '0', '测试', '2021-07-12 14:46:04', 'admin', '2021-07-13 10:17:31', 'admin');

-- ----------------------------
-- Table structure for sequelizemeta
-- ----------------------------
DROP TABLE IF EXISTS `sequelizemeta`;
CREATE TABLE `sequelizemeta`  (
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`) USING BTREE,
  UNIQUE INDEX `name`(`name`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sequelizemeta
-- ----------------------------
INSERT INTO `sequelizemeta` VALUES ('20210608025759-create-departments.js');
INSERT INTO `sequelizemeta` VALUES ('20210608025759-create-dict-data.js');
INSERT INTO `sequelizemeta` VALUES ('20210608025759-create-dict-type.js');
INSERT INTO `sequelizemeta` VALUES ('20210608025759-create-menus.js');
INSERT INTO `sequelizemeta` VALUES ('20210608025759-create-notices.js');
INSERT INTO `sequelizemeta` VALUES ('20210608025759-create-role-menu.js');
INSERT INTO `sequelizemeta` VALUES ('20210608025759-create-roles.js');
INSERT INTO `sequelizemeta` VALUES ('20210608025759-create-user-role.js');
INSERT INTO `sequelizemeta` VALUES ('20210608025759-init-users.js');

-- ----------------------------
-- Table structure for user_roles
-- ----------------------------
DROP TABLE IF EXISTS `user_roles`;
CREATE TABLE `user_roles`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL COMMENT '用户id',
  `roleId` int(11) NOT NULL COMMENT '角色id',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 21 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_roles
-- ----------------------------
INSERT INTO `user_roles` VALUES (2, 2, 1);
INSERT INTO `user_roles` VALUES (3, 3, 1);
INSERT INTO `user_roles` VALUES (4, 4, 1);
INSERT INTO `user_roles` VALUES (5, 5, 1);
INSERT INTO `user_roles` VALUES (6, 10, 1);
INSERT INTO `user_roles` VALUES (7, 15, 1);
INSERT INTO `user_roles` VALUES (8, 19, 1);
INSERT INTO `user_roles` VALUES (9, 20, 1);
INSERT INTO `user_roles` VALUES (10, 21, 1);
INSERT INTO `user_roles` VALUES (11, 22, 1);
INSERT INTO `user_roles` VALUES (20, 1, 1);
INSERT INTO `user_roles` VALUES (21, 23, 2);

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `deptId` int(11) NOT NULL COMMENT '部门deptId',
  `userName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户名',
  `nickName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '昵称',
  `sex` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '1' COMMENT '性别（0代表女 1代表男）',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '密码',
  `avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '头像',
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '邮箱',
  `mobile` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '手机号',
  `isDelete` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '0' COMMENT '删除标志（0代表存在 1代表删除）',
  `status` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '1' COMMENT '帐号状态（1正常 0停用）',
  `remark` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '备注',
  `createdAt` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '创建者',
  `updatedAt` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新者',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `userName`(`userName`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 23 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 1, 'admin', 'admin123', '1', '$2a$10$h9F9wNK9FBW3LQpjH/mGHurD88WNfYUVYwSRe0wnoYT8tJVAjK0Sm', '/uploads/1/CHP_1626139431608_login-bg.png', '789sd@qq.com', '13711031522', '0', '1', '', '2021-07-08 14:52:13', 'admin', '2021-07-09 15:14:59', 'admin');
INSERT INTO `users` VALUES (2, 1, 'test', 'test', '1', '$2a$10$7WZrqgx9U11UFnFPuRChJOvA5m65.I..eL.v8WrGeeml1BlkqhHxm', NULL, NULL, NULL, '0', '1', NULL, '2021-07-08 14:52:39', 'admin', NULL, NULL);
INSERT INTO `users` VALUES (3, 1, 'test1', 'test', '1', '$2a$10$0KQwEw7S9M/sTrk/NWVhTOEudmYt5MyoXDdy9j2FLXRbw/IJIrT7W', NULL, NULL, '13444556620', '0', '1', NULL, '2021-07-08 14:55:28', 'admin', NULL, NULL);
INSERT INTO `users` VALUES (4, 1, 'test11', 'test', '1', '$2a$10$iAZsm036g5WJU4ZZC/1SSuLKd1ikV80B.kQaDvLWYXOafRXniCdB2', NULL, NULL, NULL, '0', '1', NULL, '2021-07-08 14:55:45', 'admin', NULL, NULL);
INSERT INTO `users` VALUES (5, 2, 'yunji', 'test', '1', '$2a$10$XdsjZPKEgAPWBzuAX/.6FuhXsP/PzyNQcsMpG8jHvjD90kVRaWbp2', NULL, NULL, NULL, '0', '1', NULL, '2021-07-08 14:57:20', 'admin', NULL, NULL);
INSERT INTO `users` VALUES (10, 1, 'yunji1', 'test', '1', '$2a$10$AII0fKQ9eqyvTxwLwEXMZ.fHzqiMhjT9NISuPONMmTzBzZ/jyZj.K', NULL, NULL, NULL, '0', '1', NULL, '2021-07-08 14:58:51', 'admin', NULL, NULL);
INSERT INTO `users` VALUES (15, 1, 'yunjissdsd', 'test', '1', '$2a$10$gpIIX1zTme3jZ76lmSn/Z.AXUE1Fi6XxnbmyvzqM9fRAGzUosc2Ty', NULL, NULL, NULL, '0', '1', NULL, '2021-07-08 15:13:38', 'admin', NULL, NULL);
INSERT INTO `users` VALUES (19, 1, 'yunjiggggggg', 'test', '1', '$2a$10$zhGC14Iho3VDjjdP.Jno5uOsPJ.FsFIhR5R7yB4sg3Q79PnW8a/pm', NULL, NULL, NULL, '0', '1', NULL, '2021-07-08 15:19:36', 'admin', NULL, NULL);
INSERT INTO `users` VALUES (20, 1, 'testfd', 'test', '1', '$2a$10$CKoU7pCd9KQfszP3BDdPeO2G6f6.A06e2/G8.N7cebVeON0Onk8Om', NULL, NULL, NULL, '0', '1', NULL, '2021-07-08 15:20:02', 'admin', NULL, NULL);
INSERT INTO `users` VALUES (21, 2, 'test34', 'test11', '1', '$2a$10$xgDtclT3sjvCmORV7QJ.t./PT531dR08DPRFS17Ihm1a3nJ6Lq7My', NULL, NULL, NULL, '0', '1', NULL, '2021-07-08 15:20:17', 'admin', NULL, NULL);
INSERT INTO `users` VALUES (22, 2, 'admindsfs', 'test', '1', '$2a$10$XQrYh2Yd9HkGBanVKidZJuMlFzDIVc3fxeudMuQvkoxqtUwmCaeYu', NULL, NULL, NULL, '0', '1', NULL, '2021-07-08 15:20:36', 'admin', NULL, NULL);
INSERT INTO `users` VALUES (23, 1, 'cai', 'cai', '1', '$2a$10$eyp9Ra.Ks3gk2ovefOaYsewU4z6Tu.qFIIMN8ebL0bbNoMKkGTZwm', NULL, NULL, NULL, '0', '1', NULL, '2021-07-13 10:18:06', 'admin', NULL, NULL);

SET FOREIGN_KEY_CHECKS = 1;
