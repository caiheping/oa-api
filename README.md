



# oa-api



## 描述

oa-api 为前后端分离的企业员工管理系统。

## 技术栈

后端技术栈：egg.js + mysql + sequelize + jwt 等

前端技术栈：vue全家桶 + axios + elementUI + markdown编辑器等

前端项目地址：https://gitee.com/caiheping/oa-sys

### 环境

node版本8以上

MySQL数据库

### 项目运行

```bash
git clone https://gitee.com/caiheping/oa-sys.git
cd egg-cms
npm install
```

然后修改config/config.default.js和database/config.json（如果你不是sequelize的命令生成数据的话，这个改不改都行）下自己的数据库用户名和密码

创建数据库egg_oa_sys

在egg_oa_sys数据库下导入项目根目录下egg-oa-sys.sql文件

运行项目

> npm run dev

浏览器打开 http://127.0.0.1:7002/index.html

admin登录账号：admin，密码： 123456
普通用户账号密码自己用admin去用户管理创建



## 功能模块

- [x] 登录 -- 完成
- [x] 用户中心 -- 增删改查
- [x] 角色管理 -- 增删改查
- [x] 菜单管理 -- 增删改查
- [x] 部门管理 -- 增删改查
- [x] 头像上传 -- 完成



如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^