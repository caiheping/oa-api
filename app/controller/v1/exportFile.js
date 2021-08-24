'use strict';
const Controller = require('egg').Controller;

class ExportController extends Controller {
  // 导出日志
  async exportLogs() {
    const { ctx, service } = this;
    const datas = await ctx.model.Logs.findAll();
    const columns = [
      {
        name: 'id',
      },
      {
        name: 'method',
      },
      {
        name: 'url',
      },
      {
        name: 'data',
      },
      {
        name: 'status',
      },
      {
        name: 'createdAt',
      },
      {
        name: 'createdBy',
      },
    ];
    const rows = [];
    datas.forEach(item => {
      const row = [];
      columns.forEach(list => {
        row.push(item[list.name]);
      });
      rows.push(row);
    });

    const exportdata = [{
      sheet: 'sheet1',
      rows,
      columns,
    }];

    const result = await service[this.app.config.public].exportFile.exportExcel(exportdata);
    if (result) {
      // 返回文件buffer
      ctx.body = result;
    } else {
      ctx.returnBody(null, 100050, 500);
    }
  }
}

module.exports = ExportController;
