# oa-api

## 描述

oa-api 为前后端分离的企业员工管理系统。

## 技术栈

后端技术栈：egg.js + mysql + sequelize + jwt 等

前端技术栈：vue3 + vite + ant-design-vue + pinia + windicss等

前端项目地址：

码云：https://gitee.com/caiheping/oa-sys

GitHub：https://github.com/caiheping/oa-sys

### 环境

node版本8以上

MySQL数据库

### 项目运行

**项目有两个分支，master分支包含一个后台管理系统的基础功能，feature-oa分支除了系统管理外还包含基础数据，财务数据，审核管理等模块**

```bash
git clone https://gitee.com/caiheping/oa-api.git
cd oa-api
npm install
```

然后修改config/config.default.js和database/config.json（如果你不是sequelize的命令生成数据的话，这个改不改都行）下自己的数据库用户名和密码

创建数据库egg-oa-sys

master分支运行：在egg-oa-sys数据库下导入项目根目录下 egg-oa-sys.sql 文件

feature-oa分支运行：在egg-oa-sys数据库下导入项目根目录下 egg-oa-sys-2021-09-17-基础功能完成.sql 文件

**备注：切换分支时要把数据库清空，重新导入对应分支的sql文件**

运行项目

> npm run dev

浏览器打开 http://127.0.0.1:7002/index.html

admin登录账号：admin，密码： 123456
普通用户账号密码自己用admin去用户管理创建



### 目录结构

```bash
oa-api
├─ app
|	├─ controller			// 用于解析用户的输入，处理后返回相应的结果
|	├─ extend				// 用于框架的扩展
|	├─ middleware			// 用于编写中间件
|	├─ model				// 用于放置领域模型
|	├─ public				// 用于放置静态资源
|	├─ rules				// 参数校验文件
|	├─ schedule				// 用于定时任务，可选，具体参见定时任务
|	├─ service				// 用于编写业务逻辑层，可选，建议使用
|	├─ utils				// 工具文件
|	├─ router.js				// 用于配置 URL 路由规则
├─ config
|	├─ config.default.js	// 用于编写配置文件
|	├─ plugin.js			// 用于配置需要加载的插件
├─ database
|	├─ migrations			// 数据库迁移文件
|	├─ seeders				// 种子文件
|	├─ config.json				// sequelize 配置文件
├─ logs						// 日志文件
├─ run
├─ test
├─ typings
├─ www						// 前端打包文件
...
```

演示地址：http://oa.caihp.top （自己服务器只开放部分功能，想要查看全部功能，请copy代码在自己的电脑上看）

用户名： test123

密码：123456



## 界面截图

登录页

![](http://cdn.caihp.top/oa-sys/other/login.png)

![](http://cdn.caihp.top/oa-sys/other/dept.png)

![](http://cdn.caihp.top/oa-sys/other/dit.png)

![](http://cdn.caihp.top/oa-sys/other/lockIn.png)

![](http://cdn.caihp.top/oa-sys/other/log.png)

![](http://cdn.caihp.top/oa-sys/other/makeUpCard.png)

![](http://cdn.caihp.top/oa-sys/other/menu.png)

![](http://cdn.caihp.top/oa-sys/other/notice.png)

![](http://cdn.caihp.top/oa-sys/other/role.png)

![](http://cdn.caihp.top/oa-sys/other/salary.png)

![](http://cdn.caihp.top/oa-sys/other/sysSetting.png)

![](http://cdn.caihp.top/oa-sys/other/setting.png)

![](http://cdn.caihp.top/oa-sys/other/userInfo.png)

![](http://cdn.caihp.top/oa-sys/other/user.png)

![](http://cdn.caihp.top/oa-sys/other/workOverTime.png)

![](http://cdn.caihp.top/oa-sys/other/workingDaySetting.png)



## 功能模块

**master分支**

- [x] 登录 -- 完成
- [ ] 首页 -- 待定
- [x] 系统布局配置 -- 完成
- [x] 系统管理 =》用户中心 -- 完成
- [x] 系统管理 =》角色管理 -- 完成
- [x] 系统管理 =》菜单管理 -- 完成
- [x] 系统管理 =》部门管理 -- 完成
- [x] 系统管理 =》字典管理 -- 完成
- [x] 系统管理 =》消息公告 -- 完成
- [x] 个人中心 =》头像上传 -- 完成

**feature-oa**

- [x] 登录 -- 完成
- [ ] 首页 -- 待定
- [x] 系统布局配置 -- 完成
- [x] 国际化（中英文切换）-- 完成
- [x] 系统管理 =》用户中心 -- 完成
- [x] 系统管理 =》角色管理 -- 完成
- [x] 系统管理 =》菜单管理 -- 完成
- [x] 系统管理 =》部门管理 -- 完成
- [x] 系统管理 =》字典管理 -- 完成
- [x] 系统管理 =》消息公告 -- 完成
- [x] 个人中心 =》头像上传 -- 完成
- [x] 系统管理 =》系统配置 -- 完成
- [x] 系统管理 =》系统日志 -- 完成
- [x] 基础数据 =》打卡详情 -- 完成
- [x] 基础数据 =》工作日设置 -- 完成
- [x] 基础数据 =》员工假期详情 -- 完成
- [x] 财务数据 =》工资详情 -- 完成
- [x] 审批管理 =》出差申请 -- 完成
- [x] 审批管理 =》补卡申请 -- 完成
- [x] 审批管理 =》请假申请 -- 完成
- [x] 审批管理 =》 加班申请 -- 完成

如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^