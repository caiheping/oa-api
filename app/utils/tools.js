'use strict';

const fs = require('fs');
const path = require('path');

// 校验有 /* 的白名单
function checkWhiteList(ctx, list) {
  list = list.map(item => item.substring(0, item.lastIndexOf('/*')));
  let flag = false;
  list.forEach(item => {
    if (item === ctx.request.path.substring(0, item.length)) {
      flag = true;
    }
  });
  return flag;
}

// 递归创建目录 同步方法
function mkdirsSync(dirname) {
  if (fs.existsSync(dirname)) {
    return true;
  }
  if (mkdirsSync(path.dirname(dirname, '/'))) {
    fs.mkdirSync(dirname);
    return true;
  }

}

/**
 * @param data 数据源
 * @param id字段 默认 'id'
 * @param parentId 父节点字段 默认 'parentId'
 * @param children 孩子节点字段 默认 'children'
 * @param rootId 根Id 默认 0
 * @return {{obj, list: Array}}
 */

function handleTree(data, id = 'id', parentId = 'parentId', children = 'children', rootId = 0) {
  const obj = {};
  data.forEach(item => {
    item[children] = [];
    obj[item[id]] = item;
  });
  const tree = [];
  data.forEach(list => {
    if (list[parentId] !== rootId) {
      obj[list[parentId]][children].push(list);
    } else {
      tree.push(list);
    }
  });
  return {
    tree,
    obj,
  };
}

module.exports = {
  checkWhiteList,
  handleTree,
  mkdirsSync,
};
